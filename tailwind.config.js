/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fc',
          100: '#e1ecf8',
          200: '#c2d9f2',
          300: '#94bfe9',
          400: '#5e9ddc',
          500: '#387ecb',
          600: '#2563eb',
          700: '#1d4fb8',
          800: '#1c4293',
          900: '#1b3975',
          950: '#0B1F3A', // Product Deep Navy
        },
        detergent: {
          light: '#E0F2FE', // light sky blue background
          foam: '#F0F9FF',
          sky: '#38BDF8',
          blue: '#2563EB',
          vibrant: '#0284C7',
          deep: '#0369A1',
          accent: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 31, 58, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(11, 31, 58, 0.12)',
        'glow': '0 0 25px rgba(37, 99, 235, 0.25)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
