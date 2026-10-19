import { neon } from '@neondatabase/serverless';

export interface Env {
  DATABASE_URL: string;
}

// Allowed origins — your production domain + local dev
const ALLOWED_ORIGINS = [
  'https://greatlightgroup.com',
  'https://www.greatlightgroup.com',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
];

function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(data: unknown, status = 200, origin: string | null = null): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(origin),
    },
  });
}

// Ensure the reviews table exists (runs on cold start)
async function ensureTable(sql: ReturnType<typeof neon>): Promise<void> {
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id           TEXT        PRIMARY KEY,
      division     TEXT        NOT NULL CHECK (division IN ('software', 'media')),
      name         TEXT        NOT NULL,
      city         TEXT        NOT NULL,
      project_type TEXT        NOT NULL,
      rating       INTEGER     NOT NULL CHECK (rating BETWEEN 1 AND 5),
      comment      TEXT        NOT NULL,
      highlight_tag TEXT,
      helpful_count INTEGER    NOT NULL DEFAULT 0,
      created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');

    // ---------- CORS preflight ----------
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // Only handle /reviews path
    if (url.pathname !== '/reviews') {
      return jsonResponse({ error: 'Not found' }, 404, origin);
    }

    const sql = neon(env.DATABASE_URL);

    try {
      await ensureTable(sql);

      // ---------- GET /reviews?division=software|media ----------
      if (request.method === 'GET') {
        const division = url.searchParams.get('division');
        if (!division || !['software', 'media'].includes(division)) {
          return jsonResponse({ error: 'division query param must be "software" or "media"' }, 400, origin);
        }

        const rows = await sql`
          SELECT
            id,
            division,
            name,
            city,
            project_type   AS "projectType",
            rating,
            comment,
            highlight_tag  AS "highlightTag",
            helpful_count  AS "helpfulCount",
            TO_CHAR(created_at, 'YYYY-MM-DD') AS date,
            TRUE AS verified
          FROM reviews
          WHERE division = ${division}
          ORDER BY created_at DESC
          LIMIT 200
        `;

        return jsonResponse({ reviews: rows }, 200, origin);
      }

      // ---------- POST /reviews ----------
      if (request.method === 'POST') {
        let body: {
          id?: string;
          division?: string;
          name?: string;
          city?: string;
          projectType?: string;
          rating?: number;
          comment?: string;
          highlightTag?: string;
        };

        try {
          body = await request.json();
        } catch {
          return jsonResponse({ error: 'Invalid JSON body' }, 400, origin);
        }

        const { id, division, name, city, projectType, rating, comment, highlightTag } = body;

        // Validate required fields
        if (!division || !['software', 'media'].includes(division)) {
          return jsonResponse({ error: 'Invalid division' }, 400, origin);
        }
        if (!name?.trim() || !city?.trim() || !comment?.trim()) {
          return jsonResponse({ error: 'name, city, and comment are required' }, 400, origin);
        }
        if (!rating || rating < 1 || rating > 5) {
          return jsonResponse({ error: 'rating must be 1–5' }, 400, origin);
        }

        const reviewId = id || `rev-${division.slice(0, 3)}-${Date.now()}`;
        const safeProjectType = projectType?.trim() || 'General';
        const safeTag = highlightTag?.trim() || null;

        await sql`
          INSERT INTO reviews (id, division, name, city, project_type, rating, comment, highlight_tag)
          VALUES (
            ${reviewId},
            ${division},
            ${name.trim()},
            ${city.trim()},
            ${safeProjectType},
            ${rating},
            ${comment.trim()},
            ${safeTag}
          )
          ON CONFLICT (id) DO NOTHING
        `;

        return jsonResponse({ success: true, id: reviewId }, 201, origin);
      }

      // ---------- DELETE /reviews ----------
      if (request.method === 'DELETE') {
        const id = url.searchParams.get('id');
        if (!id) return jsonResponse({ error: 'id parameter required' }, 400, origin);
        await sql`DELETE FROM reviews WHERE id = ${id}`;
        return jsonResponse({ success: true, deleted: id }, 200, origin);
      }

      // ---------- POST /reviews/helpful ----------
      // (helpful vote — increment without exposing DB directly)
      if (request.method === 'PATCH') {
        let body: { id?: string };
        try {
          body = await request.json();
        } catch {
          return jsonResponse({ error: 'Invalid JSON body' }, 400, origin);
        }
        if (!body.id) {
          return jsonResponse({ error: 'id is required' }, 400, origin);
        }
        await sql`
          UPDATE reviews
          SET helpful_count = helpful_count + 1
          WHERE id = ${body.id}
        `;
        return jsonResponse({ success: true }, 200, origin);
      }

      return jsonResponse({ error: 'Method not allowed' }, 405, origin);
    } catch (err: unknown) {
      console.error('Worker error:', err);
      const message = err instanceof Error ? err.message : 'Internal server error';
      return jsonResponse({ error: message }, 500, origin);
    }
  },
};
