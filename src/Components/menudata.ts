// menuData.tsx

import home from "../assets/images/home.jpg";
import f1 from "../assets/images/home.jpg";
import f2 from "../assets/images/world.png";
import f3 from "../assets/images/home.jpg";

export const menuData: Record<
  string,
  {
    name: string;
    image?: string;
    variants?: { name: string; image: string }[];
  }[]
> = {
  Products: [
    {
      name: "Interactive Flat Panel board",
      variants: [
        { name: "U30 Series", image: f1 },
        { name: "E40 Series", image: f2 },
      ],
    },

    {
      name: "PTZ Camera",
      variants: [{ name: "UC P30", image: f1 }],
    },
  ],

  Solutions: [
    {
      name: "Education Solution",
      variants: [
        { name: "Intelligent Interactive Classroom", image: f1 },
        { name: "Lecture Capture Classroom", image: f2 },
        { name: "Group Collabration Classroom", image: f2 },
      ],
    },
    {
      name: "Display Solution",
      variants: [{ name: "LED Solution", image: f3 }],
    },
  ],

  // ❗ Support has NO variants now
  Support: [
    { name: "Downloads", image: home },
    { name: "Warranty", image: f2 },
    { name: "Help Center", image: home },
  ],
};
