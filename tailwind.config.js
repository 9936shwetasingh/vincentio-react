module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // dark blue
        secondary: '#3b82f6', // blue accent
        accent: '#06b6d4', // cyan accent
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      /* 🔥 ADD ANIMATIONS HERE */
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-down': 'slideDown 0.8s ease forwards',
        'image-in': 'imageIn 1s ease forwards',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },

        slideDown: {
          '0%': { opacity: 0, transform: 'translate(-50%, -20px)' },
          '100%': { opacity: 1, transform: 'translate(-50%, 0)' },
        },

        imageIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      /* 🔥 END */
    },
  },
  plugins: [],
};

