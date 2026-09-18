export type SkillCategory = { name: string; skills: string[] };
export const skillCategories: SkillCategory[] = [
  { name: "Languages", skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"] },
  { name: "Frontend", skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { name: "Backend", skills: ["Node.js", "Express", "Spring Boot", "REST APIs", "JWT"] },
  { name: "Database", skills: ["MongoDB", "MySQL", "PostgreSQL"] },
  { name: "Tools & Cloud", skills: ["Git", "GitHub", "Maven", "Docker", "Cloudinary"] },
  { name: "Networking", skills: ["TCP/IP", "PCAP", "Wireshark", "Network Analysis"] }
];
