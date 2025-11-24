// tailwind.config.mjs
import daisyui from 'daisyui'; // 👈 DaisyUI ইম্পোর্ট করুন

/** @type {import('tailwindcss').Config} */
const config = {
 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
  },
 
  plugins: [
    daisyui,
  ],
};

export default config;