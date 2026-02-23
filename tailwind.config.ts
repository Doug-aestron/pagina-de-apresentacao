import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffd',
          300: '#7cc5fb',
          400: '#36a9f6',
          500: '#0c8ce8',
          600: '#0070c6',
          700: '#0159a0',
          800: '#054c84',
          900: '#0a406d',
        },
      },
    },
  },
  plugins: [],
}
export default config
