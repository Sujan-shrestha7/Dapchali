// menudata.ts
import home from "../assets/images/home.jpg"

export const menuData: Record<string, { name: string; image: string }[]> = {
  "Products": [
    { name: "V Series", image: home },
    { name: "T Series", image: home},
    { name: "Smart Panel", image: home},
  ],

  "Solutions": [
    { name: "Education Solution", image: home },
    { name: "Corporate Solution", image:home },
    { name: "Government Solution", image: home},
  ],

  "Support": [
    { name: "Downloads", image: home},
    { name: "Warranty", image:home},
    { name: "Help Center", image: home},
  ]
};
