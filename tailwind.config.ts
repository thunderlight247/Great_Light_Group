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
          bg: '#0c0a0e',            // Deep Espresso Noir
          card: '#131017',          // Elevated Espresso Slate
          surface: '#18141f',       // Highlight Card Surface
          border: 'rgba(232, 213, 181, 0.15)',
          champagne: {
            DEFAULT: '#e8d5b5',     // Pale Champagne Silk
            bright: '#f5e8d2',      // Crisp Pale Silk
            muted: '#b89758',       // Muted Brushed Brass
            dark: '#8a6d3b',        // Antique Bronze
          },
          ivory: '#fbf8f3',         // Pure Headline Ivory
          ash: '#9e98a3',           // Soft Warm Ash
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
