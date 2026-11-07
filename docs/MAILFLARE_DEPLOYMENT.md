# Mailflare Deployment — `greatlightgroup.com`

> **Goal:** self-hosted mail for `contact@greatlightgroup.com` — inbound via Cloudflare Email Routing, outbound via Resend.
> **Stack:** [Mailflare](https://github.com/hieunc229/mailflare) Worker `mailflare` + D1 `mailflare` + R2 `mailflare-raw` + 3 Queues + Resend.
> **Status:** runbook complete; phases 3–5 require the Cloudflare/Resend account logins (see each progress report).

---

## 0. Two corrections before you start

These matter because they change the console screens you will be looking for.

**0.1 Mailflare has no SMTP host/port settings screen.**
Mailflare does not ship a "SMTP Configuration" form. Its outbound providers are chosen per domain under **Admin → Domains → Setup sending email**, and the Resend option authenticates with a **Resend API key** over Resend's HTTPS API — not `smtp.resend.com`. The `smtp.resend.com` / username `resend` / port 465 credentials are real Resend values, but they are only usable from a conventional runtime (Node, PHP, WordPress). A Cloudflare Worker cannot open 25/465/587, so an SMTP client inside Mailflare could not work anyway. Use the API-key integration in §5 Path A.

**0.2 Resend receiving would break your inbound path.**
Resend "receiving" takes over the **apex MX** record, which today belongs to Cloudflare Email Routing. Keep receiving on **Cloudflare** and use Resend for **sending only**. That combination is supported and is the cheapest/fastest path.

**Cost reality:** inbound (Email Routing) is free, Resend's free tier is 3,000 messages/month (100/day). Queues are on the Workers Free plan since Feb 2026, so the Worker itself can stay at $0. Cloudflare's own *Email Sending* (the only thing needing the $5/mo Workers Paid plan) is not used here.

---

## Phase 1 — Resend: verify `greatlightgroup.com`, create a key

1. Sign in at <https://resend.com> → **Domains** → **Add Domain**.
2. Name: `greatlightgroup.com` (root domain — Mailflare sends as `contact@greatlightgroup.com`, so the apex must be the verified domain).
3. Region: pick the one closest to your recipients (default `us-east-1`). The region determines the MX hostname in the table below.
4. Resend shows 3–4 records. Add them in Cloudflare DNS for the zone, **Proxy status: DNS only** (MX/TXT are never proxied anyway).

### Records to create in Cloudflare DNS

| # | Type | Name | Content / Target | Priority | TTL |
|---|------|------|------------------|----------|-----|
| 1 | MX | `send` | `feedback-smtp.us-east-1.amazonses.com` | `10` | Auto |
| 2 | TXT | `send` | `v=spf1 include:amazonses.com ~all` | — | Auto |
| 3 | TXT | `resend._domainkey` | `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQ…` **(copy the full value from the Resend dashboard)** | — | Auto |
| 4 | TXT | `_dmarc` | `v=DMARC1; p=none;` (add `rua=mailto:dmarc@greatlightgroup.com` once that mailbox exists) | — | Auto |

Notes that trip people up:

- **Record 1's host is `send`, not `@`.** It is Resend's bounce/return-path host. Adding it at `@` would overwrite Cloudflare Email Routing's MX records and stop inbound mail.
- **Record 2 goes on `send`, not `@`.** Cloudflare Email Routing already owns an apex SPF record (`v=spf1 include:_spf.mx.cloudflare.net ~all`). Two SPF TXT records on the same name is an SPF `permerror`. Keep the two on separate names — do **not** merge them, do **not** delete Cloudflare's.
- **Record 3's value is generated per domain** and is long; Cloudflare accepts it in one TXT record, so do not split it into chunks.
- Replace `us-east-1` with your chosen region (`eu-west-1`, `sa-east-1`, `ap-northeast-1`) if you picked another one — copy the exact host from Resend rather than editing this table.
- Verification can show `pending` for a few minutes after the records propagate; press **Verify DNS Records** to re-check.

5. When the domain shows **Verified**, create the API key: <https://resend.com/api-keys> → **Create API Key**.
   - Name: `mailflare-greatlightgroup`
   - Permission: **Sending access**
   - Domain: **`greatlightgroup.com`** (restrict it — do not leave it "All domains")
   - Copy the `re_…` value once and store it in a password manager. It is the value used as `RESEND_API_KEY` below.

> **Key scope caveat:** a *sending-only* key cannot create the domain in Resend or write/verify its DNS records. Mailflare detects this and tells you to add the domain manually (which is exactly what this phase does) and then use **Send test email** instead of **Setup**. If you would rather have Mailflare automate DNS + verification, use a **Full access** key instead — with the trade-off that the key can manage your account.

**Progress report — Phase 1**
- Instructions: complete (domain add flow, 4 DNS records, key scoping).
- Executed: **no** — needs your Resend login. Nothing to install locally.
- Deliverable from you: `re_…` API key + confirmation the domain reads **Verified**.

---

## Phase 2 — Cloudflare API token (`CF_TOKEN`)

Mailflare needs a runtime token so the Worker can read/write the zone's DNS, Email Routing rules and zone settings when you connect a domain.

### Creating it, click by click

1. Sign in at <https://dash.cloudflare.com> → account name (top of the sidebar) → **Manage Account**.
2. Left sidebar → **Account API Tokens** → **Create Token**.
3. Scroll past the templates → **Create Custom Token** → **Get started**.
4. Token name: `mailflare-runtime` (or `mailflare-deploy` for the deploy token).
5. **Permissions** — each row is *group* / *resource* / *level*. Pick the resource first; the group list filters to it.
6. **Account resources:** Include → your account.  
   **Zone resources:** Include → Specific zone → `greatlightgroup.com`.
7. **Client IP Address Filtering:** leave empty. **TTL:** set an expiry date (e.g. one year) so the token cannot live forever.
8. **Continue to summary** → **Create Token** → copy the value immediately. Cloudflare shows it once; if you lose it, roll the token rather than recreating the permission set.

Permission-name drift you may see: newer accounts label the level **Write** where older ones say **Edit** (`DNS Write` ≡ `DNS Edit`, `D1 Write` ≡ `D1 Edit`), and `Zone Settings` sometimes appears as `Zone`. Same capabilities — pick whichever wording your account shows.

| Scope | Permission | Access |
|-------|------------|--------|
| Account | Workers Scripts | Edit *(needed for deployment; harmless at runtime)* |
| Account | D1 | Edit |
| Account | Workers R2 Storage | Edit |
| Account | Queues | Edit |
| Account | Email Sending | Edit *(only if you ever enable Cloudflare sending; optional with Resend)* |
| Account | Account Settings | Read |
| Zone (`greatlightgroup.com`) | DNS | Edit |
| Zone | Zone Settings | Edit |
| Zone | Email Routing Rules | Edit |
| Zone | Zone | Read |

Your original list was missing three entries that will cause silent failures: **Zone: Read** (Mailflare lists/validates zones), **Queues: Edit** and **R2/Workers Scripts** on the *deploy* token. Two tokens are cleaner:

- **Deploy token** (used only by Wrangler, `CLOUDFLARE_API_TOKEN`): Workers Scripts Edit, D1 Edit, R2 Edit, Queues Edit, Account Settings Read.
- **Runtime token** (stored as Worker secret `CF_TOKEN`): the Zone rows above (+ Email Sending Edit if/when you use Cloudflare sending).

Store it as a Worker secret — never in `wrangler.jsonc`, `.dev.vars` committed to git, or a shell argument:

```bash
cd mailflare
npx wrangler secret put CF_TOKEN
# paste the token value only — no "Bearer " prefix, not the token ID
```

For local dev, put it in `.dev.vars` (already git-ignored by the repo convention in this project).

**Progress report — Phase 2**
- Instructions: complete (exact permission matrix, two-token split, secret storage).
- Executed: **no** — token creation requires your Cloudflare login.
- Deliverable from you: deploy token + `CF_TOKEN` value.

---

## Phase 3 — Deploy the `mailflare` Worker

The Worker name **must** stay `mailflare`: `wrangler.jsonc` declares `services[].service = "mailflare"` (`WORKER_SELF_REFERENCE`), plus D1 `mailflare`, R2 `mailflare-raw`, and queues `mailflare-inbound` / `-outbound` / `-agent`. Renaming breaks the self-binding, the queues and the cron/backup job.

### Option A — Deploy button (no local toolchain)

1. Open <https://deploy.workers.cloudflare.com/?url=https://github.com/hieunc229/mailflare>.
2. Select the account that owns `greatlightgroup.com`'s zone.
3. **App name: `mailflare`** — do not rename.
4. When prompted for the runtime variable/secret, paste the `CF_TOKEN` from Phase 2.
5. Deploy and wait for provisioning (D1, R2, queues, Durable Object).

### Option B — Wrangler CLI

```bash
git clone https://github.com/hieunc229/mailflare.git
cd mailflare
npm install

# Authenticate with the DEPLOY token (not CF_TOKEN)
export CLOUDFLARE_API_TOKEN="<deploy token>"
export CLOUDFLARE_ACCOUNT_ID="<account id>"

# Create the resources (safe to re-run; existing ones are reused)
npx wrangler d1 create mailflare
npx wrangler r2 bucket create mailflare-raw
npx wrangler queues create mailflare-inbound
npx wrangler queues create mailflare-outbound
npx wrangler queues create mailflare-agent
```

`wrangler d1 create` prints a `database_id`. Put it in `wrangler.jsonc` under `d1_databases[0]`:

```jsonc
"d1_databases": [
  { "binding": "DB", "database_name": "mailflare",
    "database_id": "<id from wrangler d1 create>",
    "migrations_dir": "drizzle/migrations" }
]
```

Keep that ID out of any public fork. Then:

```bash
npx wrangler secret put CF_TOKEN
npx wrangler secret put RESEND_API_KEY   # optional shortcut; app-saved key wins (see Phase 5)
npm run deploy                            # builds with vinext and uploads the full Worker
```

Do **not** run `npm run db:migrate:remote` — `/setup` applies migrations through the Worker's D1 binding, atomically per migration.

### Verify Phase 3

```bash
npx wrangler deployments list
npx wrangler tail mailflare --format pretty
curl -sI https://mailflare.<your-subdomain>.workers.dev | head -n 5   # expect a redirect to /setup
```

Worker URL: `https://mailflare.<your-subdomain>.workers.dev`.

**Progress report — Phase 3**
- Instructions: complete (both deploy paths, resource creation, `database_id` wiring, secret upload, verification commands).
- Executed: **no** — every command needs your account's deploy token. Nothing in this repo was changed by deployment.
- Deliverable from you: deployed Worker URL (or the deploy token + account ID, and I can run Option B end-to-end).

---

## Phase 4 — `/setup`, admin account, and inbound routing

1. Open `https://mailflare.<subdomain>.workers.dev/setup`.
2. Let the installer **check the Cloudflare configuration** — it verifies D1/R2/queue bindings and applies all migrations to the empty `mailflare` D1 database.
3. Create the first **admin** account (this is the only account that can manage providers, domains and users).
4. **Admin → Domains → New domain**, hostname `greatlightgroup.com`:
   - **Receive mail with:** `Cloudflare` (Email Routing)
   - **Send mail with:** `Resend` (§5)
   Mailflare enables Email Routing on the zone and writes the DNS/routing records. Approve the MX replacement only if the shown MX records are stale — if it offers to replace `route1/2/3.mx.cloudflare.net`, **stop**: that is Cloudflare Email Routing already doing its job.
5. Create the mailbox `contact@greatlightgroup.com` when prompted.

### What should exist after this

- Zone → **Email Routing** enabled, with a custom address `contact@greatlightgroup.com` → **Send to a Worker** → `mailflare` (Mailflare creates this; per-address routes only exist for Cloudflare-received domains).
- Apex MX = `route1.mx.cloudflare.net` (10), `route2…` (20), `route3…` (30).
- Apex SPF TXT unchanged: `v=spf1 include:_spf.mx.cloudflare.net ~all`.

Manual fallback if the route is missing: **Cloudflare dashboard → Email Routing → Routing rules → Custom addresses → Create address** — `contact@greatlightgroup.com`, action **Send to a Worker**, destination `mailflare`.

### Verify inbound

Send a message from an external account (Gmail) to `contact@greatlightgroup.com`; it should land in the webmail inbox within seconds. If it does not:

```bash
npx wrangler tail mailflare --format pretty   # watch the email handler / queue consumer
npx wrangler queues list
```

**Progress report — Phase 4**
- Instructions: complete (setup route, migration/verification behaviour, routing mapping, manual fallback, verification).
- Executed: **no** — `/setup` runs in your browser against your deployed Worker.
- Deliverable from you: admin credentials created + confirmation the test inbound message arrived.

---

## Phase 5 — Outbound with Resend

### Path A — the supported path (do this)

1. **Admin → Domains**, expand `greatlightgroup.com`, open **Setup sending email**.
2. Enable the **Resend** card and paste the `re_…` key from Phase 1 (or rely on the `RESEND_API_KEY` Worker secret when nothing is saved in the app; app-saved values take precedence).
   - **Full-access key:** **Setup** creates the domain in Resend, publishes DKIM/SPF to the zone and requests verification.
   - **Sending-only key (your case):** Mailflare says it cannot manage the domain. Your Phase 1 records already cover this — click **Check status**, then **Send test email**.
3. The Resend card shows a green check when set up; amber triangle means something is still missing.
4. Compose from webmail as `contact@greatlightgroup.com` → send to an external inbox (Gmail).

Delivery should show `spf=pass`, `dkim=pass`, `dmarc=pass` in Gmail's **Show original**. `mail-tester.com` gives a fuller score (aim ≥ 9/10; a fresh domain usually needs a few warm-up sends).

Replies thread correctly because Mailflare sets its own `Message-ID`, and subjects are preserved.

### Path B — if you need literal SMTP credentials for something *other* than Mailflare

Useful for the Next.js contact form or any server-side sender. These are Resend's real SMTP values:

| Setting | Value |
|---------|-------|
| Host | `smtp.resend.com` |
| Port | `465` (implicit TLS) or `587` (STARTTLS); also `25`, `2465`, `2587` |
| Username | `resend` — literal string, **not** an email address |
| Password | your `re_…` API key |
| From | `contact@greatlightgroup.com` (must be on a verified domain) |
| TLS | required |

```bash
# sanity check from a machine that allows outbound 465/587
openssl s_client -connect smtp.resend.com:465 -crlf -quiet
# EHLO then AUTH PLAIN <base64("\0resend\0re_...")>
```

This cannot run inside a Cloudflare Worker (25/465/587 are blocked) and cannot be entered into Mailflare, which has no SMTP client setting.

**Progress report — Phase 5**
- Instructions: complete, with the corrected integration surface (Resend API key, not SMTP) and the real SMTP table for other senders.
- Executed: **no** — needs the key from Phase 1 and the deployed Worker.
- Deliverable from you: a delivered test message with passing SPF/DKIM/DMARC.

---

## Final acceptance checklist

- [ ] `https://mailflare.<subdomain>.workers.dev` redirects to `/setup` → dashboard loads
- [ ] D1 `mailflare` and R2 `mailflare-raw` bound (`npx wrangler d1 list`, `npx wrangler r2 bucket list`)
- [ ] Queues `mailflare-inbound`, `-outbound`, `-agent` exist
- [ ] `CF_TOKEN` and `RESEND_API_KEY` present as Worker secrets (`npx wrangler secret list`)
- [ ] Worker name still `mailflare`
- [ ] DNS: MX/TXT on `send`, TXT on `resend._domainkey`, DMARC on `_dmarc`, apex MX untouched
- [ ] Resend domain = **Verified**
- [ ] Inbound: external → `contact@` arrives in webmail
- [ ] Outbound: webmail → external arrives, SPF/DKIM/DMARC pass
- [ ] Backup cron present in `wrangler.jsonc` (`0 2 * * *`) and R2 backups appear after the first run

## Troubleshooting quick table

| Symptom | Likely cause | Fix |
|---|---|---|
| Resend stuck `pending` | apex vs `send` host swapped, or duplicated SPF on one name | re-check Phase 1 table; one SPF per host |
| Inbound mail disappears after Phase 1 | apex MX overwritten by Resend receiving | restore `route1/2/3.mx.cloudflare.net`, keep receiving on Cloudflare |
| `/setup` shows a failing check | missing queue/binding or a rename away from `mailflare` | `npx wrangler deployments list`, re-check `wrangler.jsonc` |
| `CF_TOKEN` errors in Admin → Domains | token missing Zone:Read / Email Routing Rules:Edit, or wrong account | recreate token per Phase 2 |
| Resend card says "cannot manage domain" | sending-only key | expected — domain was added manually; use **Send test email** |
| Outbound lands in spam | new domain, `p=none`, no warm-up | raise DMARC to `quarantine` after 2–4 weeks, send consistently |
