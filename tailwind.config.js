/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      'prime':"var(--prime)",
      'prime-100':"var(--prime-100)",
      'second':"var(--second)",
      'second-100':"var(--second-100)",
      'text':"var(--text)",
      'bg':'var(--bg)',
      'bg-100':'var(--bg-100)',
      'bg-200':'var(--bg-200)'
    },
    fontFamily:{
      title : ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      text : ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 200s linear infinite',
        'spin-slower': 'spin 300s linear infinite',
        'bounce-slow':'bounce 50s infinite;'
      },
      keyframes: {
        'spin-slow':{
           '100%':{rotate:'10deg'}
        }
      }
    },
  },
  plugins: [],
}

