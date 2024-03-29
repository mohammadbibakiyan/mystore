module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      animation: {
        'alert': 'alert 4s linear ',
      },
      keyframes: {
        "alert": {
          '0%, 100%': { transform:'translateY(-100%) translateX(50%)' },
          '20%,80%': { transform: 'translateY(0) translateX(50%)' },
        }
      },
      fontFamily: {
        Kordi: ["Kordi"],
      },
    },
    minWidth: {
      '80': '20rem',
      '10':'2.5rem',
    },
    colors: {
      "white":"#fff",
      "black":"#0c0c0c",
      "gray":"#424750",
      "primary-700": "#ef394e",
      "primary-500": "#ef4056",
      "primary-300": "#f37a8a",
      "primary-100": "#ffe440",
      "secondary-700": "#008eb2",
      "secondary-500": "#19bfd3",
      "secondary-300": "#008deb",
      "secondary-100": "#e6f4f7",
      "green-700": "#39ae00",
      "green-500": "#6bb927",
      "green-300": "#9dc44d",
      "hint-object-neutral": "#81858b",
      "hint-object-error": "#d32f2f",
      "hint-object-success": "#4caf50",
      "hint-object-caution": "#f9a825",
      "hint-text-neutral": "#62666d",
      "hint-text-error": "#b2001a",
      "hint-text-success": "#2e7b32",
      "neutral-000": "#fff",
      "neutral-100": "#f0f0f1",
      "neutral-200": "#e0e0e2",
      "neutral-300": "#c0c2c5",
      "neutral-400": "#a1a3a8",
      "neutral-500": "#81858b",
      "neutral-600": "#62666d",
      "neutral-700": "#424750",
      "neutral-800": "#232933",
      "neutral-900": "#0c0c0c",
      "button-primary": "#ef4056",
      "button-secondary": "#19bfd3",
      "button-brand": "#e6123d",
      "button-white": "#fff",
      "button-black": "#0c0c0c",
      "button-disable": "#e0e0e2",
      "button-error": "#b2001a",
      "button-text-primary": "#fff",
      "button-text-secondary": "#fff",
      "button-text-white": "#0c0c0c",
      "button-text-black": "#fff",
      "button-hint-object-error": "#d32f2f",
      "icon-primary": "#ef4056",
      "icon-secondary": "#19bfd3",
      "icon-brand": "#e6123d",
      "icon-white": "#fff",
      "icon-black": "#0c0c0c",
      "icon-disable": "#e0e0e2",
      "icon-low-emphasis": "#a1a3a8",
      "icon-high-emphasis": "#424750",
      "icon-success": "#4caf50",
      "icon-warning": "#f9a825",
      "icon-neutral-hint": "#81858b",
      "icon-primary-100": "#ffe440",
      "icon-rating-0-2": "#f9bc00",
      "icon-rating-2-3": "#b1b64d",
      "icon-rating-3-4": "#65aa57",
      "icon-rating-4-5": "#00a049",
      "icon-error": "#d32f2f",
      "app-background": "#f2f2f2",
      "brand-primary-700": "#e6123d",
      "error":"#ffe2df",
      "fail":"#fff3a5",
      "info":"#c8ecff",
      "success":"#ccf8e4",
      "success-text":"#51d29e",
      "info-text":"#4cc1f2",
      "fail-text":"#f8ad26",
      "error-text":"#f66763",
      "hint-text-caution":"#f57f17",
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide')
  ],
}