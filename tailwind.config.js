/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    colors: {
      "gray-primary-2": "#64748b",
      'gray-primary': '#f8f9fa',
      'orange-primary': '#ffc32a',
      'white': '#fff',
      'gray-light': '#d3dce6',
      'gray': '#d2d5d9',
    }
  },
  plugins: [],
}
