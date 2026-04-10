/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy — main brand (header, footer, hero background)
        primary: {
          50:  '#eef2fa',
          100: '#d2dcef',
          200: '#a4bae0',
          300: '#7598cf',
          400: '#4a77bc',
          500: '#2d5a9f',
          600: '#1f4480',
          700: '#163461',
          800: '#102850',
          900: '#0a1e3f',
        },
        // Warm bronze / antique gold — CTA buttons, highlights, stats strip
        accent: {
          50:  '#f8f2e4',
          100: '#ecdcb7',
          200: '#dcc284',
          300: '#c9a659',
          400: '#b48a35',
          500: '#946f25',
          600: '#75561c',
          700: '#573f14',
          800: '#3a2a0d',
          900: '#1f1706',
        },
        neutral: {
          50:  '#f8f9fb',
          100: '#eef1f5',
          200: '#e1e6ed',
          300: '#ccd3de',
          400: '#a5aebe',
          500: '#7d8798',
          600: '#5a6374',
          700: '#3f4656',
          800: '#262b37',
          900: '#14171f',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
