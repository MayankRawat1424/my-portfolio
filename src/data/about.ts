import type { AboutData, AboutSectionMeta } from "@/types";

/** Ordered like a résumé: work first, personal note last. */
export const ABOUT_SECTIONS: AboutSectionMeta[] = [
  { id: "experience", title: "Experience" },
  { id: "certifications", title: "Certifications" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "about-me", title: "About Me" },
];

export const ABOUT_SECTION_IDS = ABOUT_SECTIONS.map((s) => s.id);

/** Pastel palette used for skill tags, one colour per group. */
export const SKILL_COLORS = {
  mint: "#A7F3D0",
  pink: "#FBCFE8",
  blue: "#BFDBFE",
  yellow: "#FDE68A",
  cyan: "#A5F3FC",
  violet: "#DDD6FE",
  lime: "#D9F99D",
  peach: "#FED7AA",
} as const;

export const ABOUT: AboutData = {
  experience: [
    {
      company: "Infosys",
      logo: "/logos/infosys.jpg",
      role: "Systems Engineer - Trainee",
      duration: "October 2026 - Present",
      highlights: [
        "Completing Infosys' foundation program in Java: object-oriented design, exception handling, collections, and problem-solving through hands-on assignments.",
        "Writing SQL for data retrieval and manipulation using filtering, joins, aggregate functions, subqueries, and other database operations.",
      ],
    },
    {
      company: "Gig Healthcare",
      logo: "/logos/gig-healthcare.png",
      role: "Junior Front-end Developer",
      duration: "June 2026 - October 2026",
      highlights: [
        "Migrated 10+ pages and 40+ UI components from Bootstrap to Next.js, TypeScript, and Untitled UI, restructuring the frontend into a reusable component architecture.",
        "Built responsive, reusable UI components with React, Next.js, and TypeScript, keeping the application visually consistent.",
        "Worked on a reusable React component library with Storybook for marketing websites.",
        "Supported hosting and deployment on AWS using S3, CloudFront, Elastic Load Balancing, and Auto Scaling Groups.",
        "Integrated Claude Code and MCP servers into the development workflow to assist with code generation, debugging, and implementation.",
        "Delivered features in an Agile, sprint-based environment using Jira and Git workflows.",
      ],
    },
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      year: "2026",
      detail: "Score: 890",
      logo: "/logos/Amazon_Web_Services_Logo.svg",
    },
    {
      title: "GitHub Copilot Certification (GH-300)",
      issuer: "Microsoft",
      year: "2026",
      logo: "/logos/github-logo.png",
    },
  ],
  hardSkills: [
    {
      title: "Languages",
      color: SKILL_COLORS.mint,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Web Development",
      color: SKILL_COLORS.blue,
      skills: [
        "HTML5",
        "CSS3",
        "React.js",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Storybook",
        "Node.js",
        "Express.js",
        "FastAPI",
      ],
    },
    {
      title: "Databases",
      color: SKILL_COLORS.yellow,
      skills: ["MySQL", "SQLite"],
    },
    {
      title: "Cloud",
      color: SKILL_COLORS.peach,
      skills: [
        "AWS",
        "S3",
        "CloudFront",
        "Elastic Load Balancing",
        "Auto Scaling",
        "Firebase",
      ],
    },
    {
      title: "AI & ML",
      color: SKILL_COLORS.pink,
      skills: ["Claude Code", "MCP", "GitHub Copilot"],
    },
    {
      title: "Tools",
      color: SKILL_COLORS.cyan,
      skills: ["Git & GitHub", "Jira"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institute: "Graphic Era Hill University, Dehradun",
      duration: "2022 - 2026",
      performance: "8.38 CGPA",
      media: {
        src: "/logos/graphic-era.jpg",
        label: "Graphic Era Hill University logo",
      },
    },
    {
      degree: "Intermediate",
      institute: "Carman Residential & Day School, Dalanwala",
      duration: "2022",
      performance: "74.8%",
      media: { src: "/logos/carman-school.jpg", label: "Carman School crest" },
    },
    {
      degree: "Matriculation",
      institute: "Carman Residential & Day School, Dalanwala",
      duration: "2020",
      performance: "87.8%",
      media: { src: "/logos/carman-school.jpg", label: "Carman School crest" },
    },
  ],
  aboutMe: [
    "I grew up in Dehradun, Uttarakhand, and graduated in 2026 with a B.Tech in Computer Science and Engineering from Graphic Era Hill University. What hooked me on the frontend was how quickly an idea becomes something you can see, click, and hand to someone else.",
    "Today I'm a Systems Engineer at Infosys, sharpening my Java and SQL fundamentals, while I keep building web projects on the side and exploring cloud and AI-assisted development.",
    // TODO: add a personal line, e.g. "Outside of code, you'll usually find me ..."
  ],
};
