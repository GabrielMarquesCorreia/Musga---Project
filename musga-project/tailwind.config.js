/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
        'graphik-bold': ['Graphik-bold', 'sans-serif']
      },
      colors: {
        gray2: "#121212",
        gray3: "#838383",
        gray4: "#2D2D2D",
        gray5: "#42444D",
        gray6: "#1B1B1B",
        gray7: "#595D6B",
        gray8: "#0A0A0A",
        gray9: "#AFAFAF",
        gray10: "#9E9E9E",
        bgBlack: "#030303",
        bgGray: "#324357",
        opBg: "#543A03",
        opBg2: "#0B030A",
      },
      backgroundImage: {
        'phone-1': "url('../public/images/background-1.jpg')",
        'tablet-1': "url('../public/images/tablet.jpg')",
        'desktop-1': "url('../public/images/desktop-1.png')",
        'desktop-2': "url('../public/images/desktop-2.png')",
        'desktop-3': "url('../public/images/desktop-3.jpg')",
      },
      spacing: {
        '27': '27rem',
        '29': '7.2rem',
        '30': '30rem',
        '31': '76.5rem',
        '33': '32rem',
        '34': '34rem',
        '35': '35rem',
        '39': '39rem',
        '45': '44rem',
        '46': '42.5rem',
        '47': '117.5rem',
        '57': '57rem',
        '58': '28.1rem',
        '59': '78.4rem',
        '81': '20.5rem',
        '82': '28.3rem',
        '99': '90.6vw',
        '100': '93.8vw',
        '102': '84vh',
        '105': '105vh',
        '110': '111vh',
        '111': '232vh',
        '112': '158vh',
        '113': '312vh',
        '114': '167vh',
        '115': '264vh',
        '126': '126vh',
        '150': '150vw',
        '151': '124vw',
        '152': '92vw',
        '153': '90vw',
        '154': '122vw',
        '155': '110vw',
        '156': '85vw',
        '157': '85.6vw',
        '223': '223vw',
        '270': '270vw',
      },
      screens: {
        sm: "390px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1600px",
      },
    },
  },
}