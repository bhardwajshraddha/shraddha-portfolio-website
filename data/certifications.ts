// Defines the shape of each certification card
export type Certification = {
  name: string;
  issuer: string;
  date: string;
  image: string; // path to the certificate image, served from the public/ folder
};

export const certifications: Certification[] = [
  {
    name: "Software Engineer Role Certification",
    issuer: "HackerRank",
    date: "August 2026",
    // Place your certificate image at public/certificates/hackerrank-software-engineer.png
    image: "/certificates/hackerrank-software-engineer.png",
  },
  {
    name: "TCS iON Career Edge – Young Professional",
    issuer: "TCS iON",
    date: "October 2023",
    image: "/certificates/tcs-ion-career-edge.png",
  },
  {
    name: "Introduction to SQL",
    issuer: "Sololearn",
    date: "June 2025",
    image: "/certificates/sololearn-intro-to-sql.png",
  },
  {
    name: "AWS Basics – Crash Course",
    issuer: "KodeKloud",
    date: "September 2025",
    image: "/certificates/kodekloud-aws-basics.png",
  },
  {
    name: "Git",
    issuer: "PrepInsta",
    date: "August 2023",
    image: "/certificates/prepinsta-git.png",
  },
  {
    name: "HTML5 Nanodegree Certification",
    issuer: "PrepInsta",
    date: "August 2023",
    image: "/certificates/prepinsta-html5-nanodegree.png",
  },
  {
    name: "PHP and MySQL Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "May 2023",
    image: "/certificates/iit-bombay-php-mysql.png",
  },
];
