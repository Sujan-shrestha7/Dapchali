// menudata.ts
import home from "../assets/images/home.jpg"

export const menuData: Record<string, { name: string; image: string }[]> = {
  "Products": [
    { name: "V Series", image: "../assets/images/home.jpg" },
    { name: "T Series", image: "/images/t-series.jpg" },
    { name: "Smart Panel", image: home},
  ],

  "Solutions": [
    { name: "Education Solution", image: "/images/education.jpg" },
    { name: "Corporate Solution", image: "/images/corporate.jpg" },
    { name: "Government Solution", image: "/images/government.jpg" },
  ],

  "Support": [
    { name: "Downloads", image: "/images/downloads.jpg" },
    { name: "Warranty", image: "/images/warranty.jpg" },
    { name: "Help Center", image: "/images/help.jpg" },
  ]
};
