/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#241934',
        paper: '#FBF3E7',
        coral: '#F2542D',
        butter: '#FFC857',
        mist: '#F1E4FF',
        cream: '#F7F1E8',
        orange: '#FE6225'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        chunky: ['"Fredoka"', 'sans-serif']
      },
    },
  },
  plugins: [],
}
