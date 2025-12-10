// menuData.tsx

import home from "../assets/images/home.jpg";

import f1 from "../assets/images/home.jpg";
import f2 from "../assets/images/world.png";
import f3 from "../assets/images/home.jpg";
import f4 from "../assets/images/home.jpg";

export const menuData: Record< string,{ name: string; image?: string; variants: { name: string; image: string }[]; }[]> = {
  Products: [
    {
      name: "Interactive Flat Panel board",
      variants: [
        { name: "U30 Series", image: f1 },
        { name: "E40 Series", image: f2 }
      ],
    },

    {
      name: "PTZ Camera",
      variants: [
        { name: "UC P30", image: f1 }
      ],
    },
  ],

  Solutions: [
    {
      name: "Education Solution",
      variants: [
        { name: "Smart Classroom", image: f1 },
        { name: "Remote Learning", image: f2 },
      ],
    },
    {
      name: "Corporate Solution",
      variants: [
        { name: "Conference Tools", image: f3 },
        { name: "Wireless Casting", image: f4 },
      ],
    },
    {
      name: "Government Solution",
      variants: [
        { name: "Secure Meetings", image: f2 },
        { name: "Data Encryption", image: f3 },
      ],
    },
  ],

  Support: [
    { name: "Downloads", variants: [], image: home },
    { name: "Warranty", variants: [], image: home },
    { name: "Help Center", variants: [], image: home },
  ],
};
