/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f1115',
        surface: '#171a21',
        surface2: '#1d212b',
        border: '#262b36',
        ink: '#e4e7ec',
        muted: '#8b93a7',
        add: '#5fd97a',
        del: '#e5707a',
        amber: '#e3b341',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s steps(2, start) infinite',
      },
      keyframes: {
        blink: {
          to: { visibility: 'hidden' },
        },
      },
    },
  },
  plugins: [],
};
