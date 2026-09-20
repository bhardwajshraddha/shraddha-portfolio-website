"use client";
// Added `motion` for the Ask AI button's bounce + glow animations
import { motion } from "framer-motion";
import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-5">
      <nav className="mx-auto flex h-[4.35rem] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-ink/80 px-4 shadow-[0_12px_35px_rgba(10,20,15,.18)] backdrop-blur-xl dark:bg-[#15251d]/80 sm:px-5">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-lime to-[#9ace53] text-ink shadow-[0_0_20px_rgba(201,242,105,.3)]">
            <Code2 size={18} />
          </span>
          <span className="bg-gradient-to-r from-white via-white to-lime bg-clip-text text-base font-semibold tracking-tight text-transparent">
            Shraddha<span className="text-lime">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((x) => (
            <a
              key={x}
              className="nav-link-polished text-[15px] font-medium tracking-wide"
              href={`#${x.toLowerCase()}`}
            >
              {x}
            </a>
          ))}

          {/* ASK AI — standout pill button using the site's existing lime theme */}
          <motion.a
            href="#ask-ai"
            className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold text-ink"
            style={{
              background: "linear-gradient(135deg, #c9f269, #9ace53)",
            }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <motion.span
              className="absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #c9f269 0%, transparent 70%)",
              }}
              animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.span
              className="grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-white/25"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/ask-ai-icon.png"
                alt="Ask AI"
                className="h-4 w-4 object-contain"
              />
            </motion.span>
            Ask AI
          </motion.a>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle color theme"
            onClick={toggle}
            className="nav-icon-button"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            aria-label="Open navigation"
            onClick={() => setOpen(!open)}
            className="nav-icon-button lg:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-ink/90 px-5 py-3 shadow-xl backdrop-blur-xl dark:bg-[#15251d]/90 lg:hidden">
          {links.map((x) => (
            <a
              key={x}
              onClick={() => setOpen(false)}
              className="nav-link-polished block py-3 text-[15px] font-medium tracking-wide"
              href={`#${x.toLowerCase()}`}
            >
              {x}
            </a>
          ))}

          <a
            onClick={() => setOpen(false)}
            href="#ask-ai"
            className="mt-2 flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-bold text-ink"
            style={{
              background: "linear-gradient(135deg, #c9f269, #9ace53)",
            }}
          >
            <span className="grid h-6 w-6 place-items-center overflow-hidden rounded-full bg-white/25">
              <img
                src="/ask-ai-icon.png"
                alt="Ask AI"
                className="h-4 w-4 object-contain"
              />
            </span>
            Ask AI
          </a>
        </div>
      )}
    </header>
  );
}
