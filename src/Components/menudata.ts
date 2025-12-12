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
    slug?: string;
    variants?: { name: string; image: string; slug?: string }[];
  }[]
> = {
  Products: [
    {
      name: "Interactive Flat Panel board",
      variants: [
        { name: "U30 Series", image: f1, slug: "u30series" },
        { name: "E40 Series", image: f2, slug: "e40" },
      ],
    },

    {
      name: "PTZ Camera",
      variants: [{ name: "UC P30", image: f1, slug: "ucp30" }],
    },
  ],

  Solutions: [
    {
      name: "Education Solution",
      variants: [
        { name: "Intelligent Interactive Classroom", image: f1, slug: "intelligent" },
        { name: "Lecture Capture Classroom", image: f2, slug: "lecture" },
        { name: "Group Collabration Classroom", image: f2, slug: "group" },
      ],
    },
    {
      name: "Display Solution",
      variants: [{ name: "LED Solution", image: f3, slug: "led" }],
    },
  ],

  Support: [
    { name: "Warrenty Policy", image: home, slug: "warranty" },
    { name: "Resource Center", image: f2, slug: "resources" },
    { name: "Service Request", image: home, slug: "service" },
  ],
};
