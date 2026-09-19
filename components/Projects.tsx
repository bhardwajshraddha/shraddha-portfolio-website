"use client";
import Image from "next/image";
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";
function tiltFromPointer(event: ReactMouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  return `perspective(1000px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-5px)`;
}
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [tilt, setTilt] = useState("");
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="section premium-section"
    >
      <p className="eyebrow">Selected work</p>
      <h2 className="section-title mt-4">Projects with a purpose.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onMouseMove={(event) =>
              setTilt(`${project.name}:${tiltFromPointer(event)}`)
            }
            onMouseLeave={() => setTilt("")}
            onClick={() => setSelected(project)}
            key={project.name}
            style={{
              transform: tilt.startsWith(`${project.name}:`)
                ? tilt.slice(project.name.length + 1)
                : "perspective(1000px) rotateX(0) rotateY(0)",
            }}
            className="card premium-card group cursor-pointer overflow-hidden p-0 transition-transform duration-200 will-change-transform"
          >
            {/* Project preview removes empty space and gives each card an immediate visual identity. */}
            <div className="relative aspect-[16/8.5] overflow-hidden border-b border-ink/10 bg-moss/10 dark:border-white/10">
              <Image
                src={project.screenshots[0]}
                alt={`${project.name} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-4 flex items-center justify-between">
                <span className="rounded-full bg-ink/65 px-2.5 py-1 text-xs font-semibold tracking-[.16em] text-lime backdrop-blur-sm">
                  0{i + 1}
                </span>
                <ExternalLink size={18} className="text-white/80" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-ink dark:text-white">
                {project.name}
              </h3>
              <p className="mt-3 min-h-12 leading-6 text-ink/65 dark:text-white/65">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((x) => (
                  <span key={x} className="tag">
                    {x}
                  </span>
                ))}
              </div>
              <div
                onClick={(e) => e.stopPropagation()}
                className="mt-7 flex gap-4"
              >
                <a
                  className="project-link"
                  target="_blank"
                  href={project.github}
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    className="project-link"
                    target="_blank"
                    href={project.demo}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <ProjectModal project={selected} close={() => setSelected(null)} />
    </motion.section>
  );
}
