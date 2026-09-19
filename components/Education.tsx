"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
const education = [
  {
    degree: "Master of Computer Applications",
    school: "Dr. D. Y. Patil School of MCA, Pune",
    board: "Savitribai Phule Pune University",
    years: "2024–2026",
    cgpa: "8.66 CGPA",
  },
  {
    degree: "B.Voc Software Development",
    school: "Dhote Bandhu Science College, Gondia",
    board: "Rashtrasant Tukadoji Maharaj Nagpur University",
    years: "2021–2024",
    cgpa: "9.31 CGPA",
  },
];
export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="section premium-section"
    >
      <p className="eyebrow">Education</p>
      <h2 className="section-title mt-4">Learning, with momentum.</h2>
      <div className="relative mt-10 ml-3 border-l border-moss/25 dark:border-lime/30">
        {education.map((item, i) => (
          <motion.article
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={item.degree}
            className="relative ml-8 pb-10 last:pb-0"
          >
            <span className="absolute -left-[49px] grid h-9 w-9 place-items-center rounded-full bg-moss text-lime ring-4 ring-cream dark:ring-ink">
              <GraduationCap size={17} />
            </span>
            <div className="card premium-card">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-ink dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-moss dark:text-lime">
                    {item.school}
                  </p>
                </div>
                <span className="tag">{item.years}</span>
              </div>
              <p className="mt-4 text-sm text-ink/60 dark:text-white/60">
                {item.board}
              </p>
              <p className="mt-3 text-sm font-semibold text-ink dark:text-white">
                {item.cgpa}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
