import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-poppins)'],
        title: ['var(--font-inter)'],
      },
      colors: {
        primary: 'hsl(var(--primary))',
        dark: 'hsl(var(--dark))',
        light: 'hsl(var(--light))',
      },
    },
  },
  plugins: [],
}
export default config
