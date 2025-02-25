export default {
  content: [
    "./src/**/*.{html,ts}", // Asegura que Tailwind procese los archivos Angular
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED2C41',
        secondary: '#FFC107',
      },
      fontSize: {
        'titular': 'var(--font-titular)',   // Clase personalizada
        'title': 'var(--font-title)', 
        'subtitle': 'var(--font-subtitle)', 
        'text': 'var(--font-text)',
      },
    },
    fontFamily: {
      primary: ['Rajdhani', 'serif'],
      secondary: ['Rubik', 'serif'],
    },
    screens: {
      phone: '414px',
      tablet: '768px',
      tabletlg: '960px',
      tabletxl: '1024px',
      laptop: '1200px',
      laptoplg: '1400px',
      desktop: '1700px',
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--font-titular': '4.45rem',
          '--font-title': '4rem',
          '--font-subtitle': '1.7rem',
          '--font-text': '1.5rem',
        },
        [`@media (min-width: ${theme('screens.phone')})`]: {
          ':root': {
            '--font-titular': '4.45rem',
            '--font-title': '4rem',
            '--font-subtitle': '1.7rem',
            '--font-text': '1.5rem',
          },
        },
        [`@media (min-width: ${theme('screens.tablet')})`]: {
          ':root': {
            '--font-titular': '8rem',
            '--font-title': '5.2rem',
            '--font-subtitle': '1.8rem',
            '--font-text': '1.6rem',
          },
        },
        [`@media (min-width: ${theme('screens.laptop')})`]: {
          ':root': {
            '--font-titular': '8rem',
            '--font-title': '5.2rem',
            '--font-subtitle': '1.8rem',
            '--font-text': '1.6rem',
          },
        },
        [`@media (min-width: ${theme('screens.desktop')})`]: {
          ':root': {
            '--font-titular': '8rem',
            '--font-title': '5.2rem',
            '--font-subtitle': '1.8rem',
            '--font-text': '1.6rem',
          },
        },
      });
    },
  ],
};
