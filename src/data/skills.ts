export interface Skill {
  name: string;
  category: "Product" | "Technical" | "Soft Skills";
  proficiency: number; // 1-100
  icon?: string;
}

export const skills: Skill[] = [
  // Product Skills
  {
    name: "User Research",
    category: "Product",
    proficiency: 85,
    icon: "/images/skills/user-research.svg",
  },
  {
    name: "Product Strategy",
    category: "Product",
    proficiency: 80,
    icon: "/images/skills/strategy.svg",
  },
  {
    name: "Roadmapping",
    category: "Product",
    proficiency: 75,
    icon: "/images/skills/roadmap.svg",
  },

  // Technical Skills
  {
    name: "React",
    category: "Technical",
    proficiency: 95,
    icon: "/images/skills/react.svg",
  },
  {
    name: "JavaScript/TypeScript",
    category: "Technical",
    proficiency: 90,
    icon: "/images/skills/typescript.svg",
  },

  // Soft Skills
  {
    name: "Cross-functional Collaboration",
    category: "Soft Skills",
    proficiency: 90,
    icon: "/images/skills/collaboration.svg",
  },
];
