import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    { pattern: /(s320|m360|l430|xl576|xxl786|xs992|sm1200|m1441|md1600|lg1920|xl2560)/ },
    { pattern: /h-(32|40|48|56|84|90|129|500|100px)/ },
    { pattern: /w-(32|40|48|56|84|90|129|256|296|350|436|441|626|100vw)/ },
    { pattern: /text-(xs|sm|lg|xl|2xl|base)/ },
    { pattern: /(hidden|inline|md:inline|block|flex|gap-2|gap-4|gap-8|gap-x-3|gap-x-5|gap-x-10|gap-y-2|gap-y-4)/ },
    { pattern: /overflow-x-scroll/ },
    { pattern: /px-\[\d+%\]/ },
    { pattern: /py-\d+/ },
    { pattern: /rounded-md|rounded-lg|rounded-xl|rounded-10px/ },
    { pattern: /border-\[3px\]/ },
    { pattern: /border-\[#36394A\]/ },
    { pattern: /bg-\[#1A1B25\]/ },
    { pattern: /top-100/ },
    { pattern: /right-0/ },
    { pattern: /cursor-pointer/ },
    { pattern: /transition/ },
    { pattern: /transform/ },
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
