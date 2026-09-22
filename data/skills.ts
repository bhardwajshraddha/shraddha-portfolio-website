// Defines the shape of each skill category: a name/title and its list of skills
export type SkillCategory = { name: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  {
    // Core programming languages across your projects and coursework
    name: "Languages",
    skills: ["Java", "C", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    // Client-side / UI technologies, including what powers this portfolio itself
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    // Server-side frameworks and API technologies across Java and Node.js stacks
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot",
      "REST APIs",
      "JWT",
      "FastAPI", // powers this portfolio's own "Ask AI" backend
    ],
  },
  {
    // Databases used across projects (Borrvio, SmartNet, coursework)
    name: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    // GenAI/LLM-specific skills — demonstrated by this portfolio's own AI assistant
    name: "AI & GenAI",
    skills: [
      "LLM API Integration",
      "Groq API",
      "Prompt Engineering",
      "Structured Data Extraction",
    ],
  },
  {
    // Networking and security work from the SmartNet project
    name: "Networking & Security",
    skills: [
      "TCP/IP",
      "PCAP",
      "Wireshark",
      "Deep Packet Inspection (DPI)",
      "Network Traffic Analysis",
      "Threat Detection",
    ],
  },
  {
    // Dev tools, cloud services, and deployment platforms used across projects
    name: "Tools & Cloud",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "JUnit",
      "Postman",
      "Docker",
      "Cloudinary",
      "AWS (EC2, S3, IAM)",
      "Vercel",
      "Render",
    ],
  },
  {
    // CMS/content-site work outside the core dev stack
    name: "CMS",
    skills: ["WordPress"],
  },
  {
    // Core computer science fundamentals from your MCA coursework
    name: "Core CS Concepts",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    // Soft skills — especially relevant for support/customer-facing tech roles
    name: "Soft Skills",
    skills: [
      "Verbal & Written Communication (English)",
      "Problem Solving & Structured Troubleshooting",
      "Email & Chat Support",
      "Computer & Internet Troubleshooting",
      "MS Office & Data Handling",
      "Time Management & Multitasking",
    ],
  },
];
