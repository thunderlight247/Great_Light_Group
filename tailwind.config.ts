import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        glg: {
          bg: {
            DEFAULT: '#070b09',      // Deep Obsidian Forest
            elevated: '#0d1410',    // Elevated Card Surface
            subtle: '#121c16',      // Highlight Surface
            border: 'rgba(201, 164, 91, 0.15)',
          },
          emerald: {
            DEFAULT: '#10b981',
            glow: '#059669',
            dark: '#064e3b',
            accent: '#34d399',
          },
          gold: {
            DEFAULT: '#c9a45b',
            bright: '#e6c875',
            champagne: '#f5e6b8',
            dark: '#947532',
            glow: 'rgba(201, 164, 91, 0.25)',
          },
          text: {
            primary: '#f8fafc',
            secondary: '#cbd5e1',
            muted: '#94a3b8',
            gold: '#e6c875',
          },
          green: {
            DEFAULT: '#10b981',
            light: '#34d399',
            dark: '#064e3b',
          },
          paper: '#070b09',
          ink: '#f8fafc',
        },
        atelier: {
          bg: '#faf8f5',            // Luminous Warm Alabaster Canvas
          card: '#ffffff',          // Crisp Gallery White Card
          surface: '#ffffff',       // Elevated Pure White Surface
          subtle: '#f3efe8',        // Soft Warm Paper Surface
          border: 'rgba(184, 144, 71, 0.2)', // Delicate Champagne Gold Border
          text: {
            primary: '#121115',     // Deep Studio Onyx Charcoal
            secondary: '#4b4754',   // Slate Charcoal
            muted: '#787280',       // Muted Editorial Ash
          },
          champagne: {
            DEFAULT: '#b89047',     // Rich Atelier Gold
            bright: '#c59b3f',      // Warm Champagne Foil
            muted: '#9e7526',       // Antique Bronze
            dark: '#6e4f13',        // Deep Gold Ink
            soft: '#f7f1e6',        // Soft Gold Tint
          },
          ivory: '#ffffff',
          ash: '#787280',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        editorial: '-0.05em',
        subtle: '-0.02em',
        eyebrow: '0.2em',
      },
      boxShadow: {
        editorial: '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
        'editorial-hover': '0 20px 50px -10px rgba(201, 164, 91, 0.15), 0 0 30px rgba(16, 185, 129, 0.1)',
        'gold-glow': '0 0 30px rgba(201, 164, 91, 0.2)',
        'emerald-glow': '0 0 30px rgba(16, 185, 129, 0.2)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
