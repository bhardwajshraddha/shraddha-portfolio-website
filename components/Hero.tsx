"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-[4.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(201,242,105,.12)_1px,transparent_0)] [background-size:28px_28px] dark:opacity-25" />
      <motion.div
        animate={{ x: [0, 26, 0], y: [0, -16, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-lime/20 blur-3xl dark:bg-lime/10"
      />
      <motion.div
        animate={{ x: [0, -24, 0], y: [0, 18, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-400/10"
      />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-72 rounded-full bg-moss/10 blur-3xl dark:bg-moss/30" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.35fr_.65fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <motion.p
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="eyebrow"
          >
            Hello, I’m Shraddha
          </motion.p>
          <div className="relative mt-2 h-[3px] w-20 overflow-hidden rounded-full bg-gradient-to-r from-lime via-moss to-cyan-400">
            <motion.span
              animate={{ x: ["-130%", "190%"] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                repeatDelay: 1.7,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-8 rounded-full bg-white/85 blur-[1px]"
            />
          </div>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] text-ink dark:text-white sm:text-7xl">
            Building reliable software{" "}
            <motion.span
              animate={{
                opacity: [0.72, 1, 0.72],
                textShadow: [
                  "0 0 0 rgba(201,242,105,0)",
                  "0 0 22px rgba(201,242,105,.36)",
                  "0 0 0 rgba(201,242,105,0)",
                ],
              }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-moss dark:text-lime"
            >
              with care.
            </motion.span>
          </h1>
          <p className="mt-6 text-lg font-medium text-ink/75 dark:text-white/75">
            Software Engineer{" "}
            <span className="mx-2 text-moss dark:text-lime">|</span> Full-Stack
            Developer
          </p>
          <p className="mt-4 max-w-xl leading-7 text-ink/65 dark:text-white/65">
            Recent MCA graduate focused on clean backend systems and thoughtful
            web experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="/shraddha-bhardwaj-resume.txt"
              download
              className="button-secondary"
            >
              Download Resume
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/"
              target="_blank"
              className="icon-button h-11 w-11"
            >
              <Github size={19} />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/"
              target="_blank"
              className="icon-button h-11 w-11"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[330px] lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-lime via-moss/35 to-lime/30 blur-md dark:from-lime/70 dark:via-moss dark:to-lime/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-lime/50 bg-moss/10 p-1.5 shadow-[0_20px_55px_rgba(53,94,76,.20)] dark:bg-white/5">
            <Image
              src="/profile.png"
              alt="Shraddha Bhardwaj"
              fill
              priority
              sizes="(max-width: 1024px) 330px, 360px"
              className="rounded-[1.65rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
