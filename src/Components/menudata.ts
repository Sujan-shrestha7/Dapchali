// menuData.tsx

import home from "../assets/images/home.jpg";

import f1 from "../assets/images/home.jpg";
import f2 from "../assets/images/world.png";
import f3 from "../assets/images/home.jpg";
import f4 from "../assets/images/home.jpg";

export const menuData: Record< string,{ name: string; image?: string; variants: { name: string; image: string }[]; }[]> = {
  Products: [
    {
      name: "V Series",
      variants: [
        { name: "4K UHD Display", image: f1 },
        { name: "Wireless Screen Sharing", image: f2 },
        { name: "Multi-Touch Support", image: f3 },
        { name: "AI Noise Reduction", image: f4 },
      ],
    },

    {
      name: "T Series",
      variants: [
        { name: "High Brightness", image: f1 },
        { name: "Android OS", image: f2 },
        { name: "Anti-Glare Panel", image: f3 },
      ],
    },

    {
      name: "Smart Panel",
      variants: [
        { name: "Touch Control", image: f1 },
        { name: "Fast CPU", image: f2 },
        { name: "Energy Efficient", image: f3 },
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
