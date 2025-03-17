export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  heroImage?: string;
  problem: string;
  engineeringInsight: string;
  approachSteps: {
    title: string;
    description: string;
  }[];
  solution: string;
  results: string[];
  technicalConsiderations: string;
  pmInsights: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "feature-prioritization",
    title: "Engineering-Informed Feature Prioritization",
    summary:
      "How I leveraged technical knowledge to create a more effective feature prioritization framework",
    tags: ["Prioritization", "Roadmapping", "Cross-functional"],
    heroImage: "/images/case-studies/prioritization.jpg",
    problem:
      "Our team was struggling to effectively prioritize the feature backlog, leading to development bottlenecks and misaligned expectations.",
    engineeringInsight:
      "As an engineer, I noticed that features were being prioritized without full consideration of technical dependencies and implementation complexity.",
    approachSteps: [
      {
        title: "Stakeholder Interviews",
        description:
          "Conducted interviews with product, engineering, and business teams to understand priorities",
      },
      {
        title: "Framework Development",
        description:
          "Created a scoring system that balanced user value, business impact, and technical feasibility",
      },
      {
        title: "Validation Process",
        description:
          "Tested the framework on previous features to validate its effectiveness",
      },
    ],
    solution:
      "Developed a comprehensive prioritization framework that explicitly incorporated technical complexity and dependencies alongside user and business value.",
    results: [
      "25% reduction in development timeline misses",
      "Improved cross-functional alignment on priorities",
      "More realistic roadmap planning",
    ],
    technicalConsiderations:
      "Incorporated technical debt assessment and dependency mapping into the prioritization process.",
    pmInsights:
      "This project demonstrated how technical understanding can dramatically improve product decisions and team alignment.",
  },
];
