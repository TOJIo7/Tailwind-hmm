/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html'],
  theme: {
    extend: {
      fontSize: {
        50: '50px',
        13: '13px',
        22: '22px',
      },
      colors: {
        'teal-dark': '#0f3d36',
        'orange-brand': '#ff7a2f',
        'teal-light': '#cfe0dc',
        'teal-muted': '#3d5c57',
        'teal-darker': '#14524a',
      },
      lineHeight: {
        '58': '58px',
        '26': '26px',
      },
      spacing: {
        '70': '70px',
        '420': '420px',
        '500': '500px',
      },
    },
  },
}
