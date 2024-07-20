/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nhb: '#0f2166',
        whatsapp: '#24bb5d',
        google: '#ce3c30',
        facebook: '#0865fc',
        linkedin: '#0a63bc',
        stackOverflow: '#f48024',
        github: '#4a4a4a',
        telegram: '#2ba3df',
        reddit: '#ff4500',
        discord: '#5865f2',
        yahoo: '#6001d2',
      },
      fontFamily: {
        kreonSerif: '"Kreon", serif;',
        sourceSans: '"Source Sans 3", sans-serif;',
      },
    },
  },
  plugins: [],
}
