"use client";

import { BrainCircuit, Code2, LayoutPanelTop } from "lucide-react";
import { motion } from "framer-motion";

const specializations = [
  {
    title: "Full-Stack Development",
    description:
      "Building scalable web applications using Java, Spring Boot, React.js, and Node.js, with robust REST APIs and database integration.",
    icon: Code2,
    accent:
      "border-lime/55 shadow-[0_0_28px_rgba(201,242,105,.18)] hover:shadow-[0_0_42px_rgba(201,242,105,.38)]",
    iconColor: "text-lime",
  },
  {
    title: "Frontend Engineering",
    description:
      "Crafting responsive, intuitive user interfaces with React.js, Tailwind CSS, and modern JavaScript, focused on clean design and smooth interactions.",
    icon: LayoutPanelTop,
    accent:
      "border-violet-400/55 shadow-[0_0_28px_rgba(167,139,250,.18)] hover:shadow-[0_0_42px_rgba(167,139,250,.38)]",
    iconColor: "text-violet-300",
  },
  {
    title: "AI & Backend Systems",
    description:
      "Building Python-based backend services with FastAPI, integrating LLM APIs for intelligent features like natural language Q&A systems.",
    icon: BrainCircuit,
    accent:
      "border-cyan-400/55 shadow-[0_0_28px_rgba(34,211,238,.18)] hover:shadow-[0_0_42px_rgba(34,211,238,.38)]",
    iconColor: "text-cyan-300",
  },
];

export default function Specialization() {
  return (
    <motion.section
      id="specialization"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="section"
    >
      <p className="eyebrow">Focused expertise</p>
      <h2 className="section-title mt-4">Specialization In</h2>
      <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-lime via-moss to-cyan-400" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {specializations.map(
          ({ title, description, icon: Icon, accent, iconColor }, index) => (
            <motion.article
              key={title}
              initial={{
                opacity: 0,
                x: index === 1 ? 0 : index === 0 ? -36 : 36,
                y: index === 1 ? 24 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.13 }}
              whileHover={{ y: -7 }}
              className={`rounded-2xl border bg-[#142019] p-6 transition-shadow duration-300 ${accent}`}
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-xl bg-white/10 ${iconColor}`}
              >
                <Icon size={23} />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {description}
              </p>
            </motion.article>
          ),
        )}
      </div>
    </motion.section>
  );
}
