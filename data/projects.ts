export type Project = {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  problem: string;
  solution: string;
  features: string[];
  screenshots: string[];
};
export const projects: Project[] = [
  {
    name: "Borrvio",
    description:
      "A peer-to-peer rental marketplace that makes borrowing and lending effortless.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Cloudinary",
    ],
    github: "https://github.com/bhardwajshraddha/borrvio",
    demo: "https://borrvio.vercel.app/",
    problem:
      "People often own useful things that sit unused, while others need short-term access without buying new.",
    solution:
      "Borrvio connects local lenders and renters in a secure marketplace with protected accounts, media-rich listings, and streamlined payments.",
    features: [
      "JWT-secured authentication",
      "Rental listing and discovery",
      "Razorpay payment integration",
      "Cloudinary image management",
    ],
    screenshots: ["/borrvio-preview.png"],
  },
  {
    name: "SmartNet",
    description:
      "A network traffic analysis and threat detection platform built for actionable security insights.",
    stack: [
      "Java",
      "Spring Boot",
      "Maven",
      "PCAP",
      "TCP/IP",
      "REST API",
      "JUnit",
    ],
    github: "https://github.com/bhardwajshraddha/SmartNet-AI",
    problem:
      "Raw network traffic is difficult to interpret quickly, leaving suspicious patterns easy to overlook.",
    solution:
      "SmartNet processes packet data and surfaces meaningful traffic patterns through a structured, testable Spring Boot API.",
    features: [
      "PCAP traffic processing",
      "TCP/IP protocol analysis",
      "Threat-oriented detection rules",
      "Tested REST API endpoints",
    ],
    screenshots: ["/smartnet-preview.png"],
  },
];
