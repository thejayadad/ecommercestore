/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#dd9ced",
        
"secondary": "#1e0ad1",
        
"accent": "#c11339",
        
"neutral": "#171821",
        
"base-100": "#434c51",
        
"info": "#6283d0",
        
"success": "#23d792",
        
"warning": "#9e6105",
        
"error": "#e55257",
        },
      },
    ],
  },
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
  },
  plugins: [require("daisyui")],
}
