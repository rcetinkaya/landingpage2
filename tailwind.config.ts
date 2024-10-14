import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", 
  "./public/index.html"],
  safelist: [
    { pattern: /(s320|m360|l430|xl576|xxl786|xs992|sm1200|m1441|md1600|lg1920|xl2560)/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(90deg, #000000 0%, #1A0173 100%)',
      },
      screens: {
        's320': '320px',  
        'm360': '360px',  
        'l430': '430px',  
        'xl576': '576px',  
        'xxl786': '786px',  
        'xxs834': '834px',  
        'xs992': '992px',  
        'sm1200': '1200px',  
        'm1441': '1441px', 
        'md1600': '1600px', 
        'lg1920': '1920px',  
        'xl2560': '2560px',  
      },
    },
  },
  plugins: [],
} satisfies Config;
