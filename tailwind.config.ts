import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-neue-montreal)'],
        hero: ['var(--font-tungsten)'],
      },
      colors: {
        background: '#F1F0EE',
        dark: '#000000',
        ligth: '#FFFFFF',
        'ligth-grey': '#F4F4F4',
      },
    },
  },
  plugins: [],
};
export default config;
