"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const badges = [
  [GraduationCap, "MCA — 8.66 CGPA"],
  [GraduationCap, "B.Voc — 9.31 CGPA"],
  [MapPin, "Pune, Maharashtra"],
  [Sparkles, "Open to Software Engineering Roles"],
] as const;

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <p className="eyebrow">About me</p>

        <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-lime via-moss to-cyan-400" />

        <div className="mt-8 max-w-4xl">
          <h2 className="section-title">
            A practical mind for meaningful problems.
          </h2>

          <p className="mt-7 text-lg leading-8 text-ink/70 dark:text-white/70">
            I&apos;m an aspiring Software Engineer with hands-on experience
            building full-stack web applications and backend systems using{" "}
            <span className="font-medium text-ink dark:text-white">
              Java, Spring Boot, React.js, Node.js, and MongoDB
            </span>
            . I enjoy turning complex requirements into dependable,
            human-centered software—from well-structured REST APIs to
            responsive, thoughtful interfaces.
          </p>

          <p className="mt-4 text-lg leading-8 text-ink/70 dark:text-white/70">
            I&apos;m actively open to relevant software engineering roles and
            freelance opportunities where I can learn, contribute, and grow with
            a collaborative team. I&apos;d be glad to bring my curiosity,
            ownership, and problem-solving mindset to your
            organisation—let&apos;s connect and create something useful
            together.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map(([Icon, text]) => (
              <span key={text} className="badge">
                <Icon size={15} />
                {text}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="mailto:shraddhabw10@gmail.com" className="button-primary">
              <BriefcaseBusiness size={16} />
              Hire Me
              <ArrowRight size={16} />
            </a>

            <a href="#contact" className="button-secondary">
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
