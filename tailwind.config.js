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
      'text-100':'var(--text-100)',
      'text-200':'var(--text-200)',
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
      },
      dropShadow: {
        'soft' : '-20px -10px 10px rgba(0,0,0,0.5)',
        'mid' : '0 0 10px rgba(0,0,0,0.8)',
        'hard' : '0 0 10px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

