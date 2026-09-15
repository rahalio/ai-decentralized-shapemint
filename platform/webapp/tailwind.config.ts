import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        assay: {
          950: 'var(--color-assay-950)',
          900: 'var(--color-assay-900)',
          700: 'var(--color-assay-700)',
        },
        mint: {
          DEFAULT: 'var(--color-mint)',
          dim: 'var(--color-mint-dim)',
        },
        amber: 'var(--color-amber)',
        coral: 'var(--color-coral)',
        steel: 'var(--color-steel)',
        brand: 'var(--color-brand)',
      },
      fontFamily: {
        display: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono-face)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
      },
    },
  },
  plugins: [],
};

export default config;
