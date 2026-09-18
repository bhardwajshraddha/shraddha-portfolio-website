export type Certification = { name: string; issuer: string; date: string; image: string };
export const certifications: Certification[] = [
  { name: "Java Programming", issuer: "Oracle Academy", date: "2024", image: "/certificate-java.svg" },
  { name: "Full-Stack Web Development", issuer: "Udemy", date: "2024", image: "/certificate-web.svg" },
  { name: "Network Security Fundamentals", issuer: "Cisco Networking Academy", date: "2025", image: "/certificate-network.svg" }
];
