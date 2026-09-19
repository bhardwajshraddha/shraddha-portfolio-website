"use client";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="section section-tint premium-section"
    >
      <p className="eyebrow">Capabilities</p>
      <h2 className="section-title mt-4">A versatile technical foundation.</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            key={category.name}
            className="card premium-card"
          >
            <h3 className="font-semibold text-ink dark:text-white">
              {category.name}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
