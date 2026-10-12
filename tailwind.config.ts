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
          green: {
            DEFAULT: '#24583e',
            light: '#317352',
            dark: '#1b432f',
          },
          gold: {
            DEFAULT: '#c9a45b',
            light: '#e2c98f',
            dark: '#9f7d37',
          },
          ink: {
            DEFAULT: '#15251d',
            muted: '#2d3f35',
            deep: '#0d1813',
          },
          paper: {
            DEFAULT: '#f5f3ed',
            bright: '#ffffff',
            dark: '#ece9e0',
          },
          sand: '#d8c7a4',
          slate: '#202c37',
          muted: '#6c756e',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        editorial: '-0.05em',
        subtle: '-0.02em',
        eyebrow: '0.16em',
      },
      boxShadow: {
        editorial: '0 8px 30px rgba(21, 37, 29, 0.06)',
        'editorial-hover': '0 20px 40px rgba(21, 37, 29, 0.12)',
        gold: '0 4px 20px rgba(201, 164, 91, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
