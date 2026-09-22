"use client";

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
      <nav
        className="
          mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between
          rounded-2xl border border-white/[0.12]
          bg-ink/85 px-4
          shadow-[8px_8px_24px_rgba(0,0,0,.28),-4px_-4px_18px_rgba(255,255,255,.035),inset_0_1px_0_rgba(255,255,255,.06)]
          backdrop-blur-xl
          dark:border-white/[0.08]
          dark:bg-[#15251d]/85
          dark:shadow-[8px_10px_28px_rgba(0,0,0,.38),-4px_-4px_18px_rgba(255,255,255,.025),inset_0_1px_0_rgba(255,255,255,.05)]
          sm:px-5
        "
      >
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            className="
              grid h-10 w-10 place-items-center rounded-xl
              bg-gradient-to-br from-lime to-[#9ace53]
              text-ink
              shadow-[4px_4px_10px_rgba(0,0,0,.25),inset_1px_1px_2px_rgba(255,255,255,.35)]
            "
          >
            <Code2 size={19} />
          </span>

          <span className="bg-gradient-to-r from-white via-white to-lime bg-clip-text text-[17px] font-semibold tracking-tight text-transparent">
            Shraddha<span className="text-lime">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((x) => (
            <a
              key={x}
              className="nav-link-polished text-[17px] font-medium tracking-wide"
              href={`#${x.toLowerCase()}`}
            >
              {x}
            </a>
          ))}

          {/* Right-side action group */}
          <div className="ml-2 flex items-center gap-3">
            {/* Glass Ask AI Button */}
            <motion.a
              href="#ask-ai"
              className="
                relative inline-flex items-center gap-2.5
                overflow-hidden rounded-full
                border border-lime/40
                bg-white/[0.06]
                px-5 py-2.5
                text-[15px] font-semibold text-white
                backdrop-blur-md
                shadow-[0_0_18px_rgba(201,242,105,.12),inset_0_1px_0_rgba(255,255,255,.12)]
              "
              whileHover={{
                scale: 1.04,
                y: -1,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              {/* Lime glass glow */}
              <motion.span
                className="absolute inset-0 -z-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(201,242,105,.22), transparent 70%)",
                }}
                animate={{
                  opacity: [0.45, 0.8, 0.45],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* AI Icon */}
              <motion.span
                className="
                  grid h-7 w-7 shrink-0 place-items-center
                  overflow-hidden rounded-full
                  border border-lime/25
                  bg-lime/15
                  shadow-[inset_0_1px_3px_rgba(255,255,255,.12)]
                "
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/ask-ai-icon.png"
                  alt="Ask AI"
                  className="h-5 w-5 object-contain"
                />
              </motion.span>

              <span>Ask AI</span>
            </motion.a>

            {/* Theme Button */}
            <button
              aria-label="Toggle color theme"
              onClick={toggle}
              className="
                nav-icon-button
                h-11 w-11
                rounded-xl
                border border-white/10
                shadow-[4px_4px_10px_rgba(0,0,0,.25),-2px_-2px_8px_rgba(255,255,255,.035),inset_0_1px_0_rgba(255,255,255,.05)]
              "
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle color theme"
            onClick={toggle}
            className="
              nav-icon-button
              h-10 w-10
              rounded-xl
              shadow-[3px_3px_8px_rgba(0,0,0,.22),inset_0_1px_0_rgba(255,255,255,.04)]
              lg:hidden
            "
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            aria-label="Open navigation"
            onClick={() => setOpen(!open)}
            className="
              nav-icon-button
              h-10 w-10
              rounded-xl
              shadow-[3px_3px_8px_rgba(0,0,0,.22),inset_0_1px_0_rgba(255,255,255,.04)]
              lg:hidden
            "
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            mx-auto mt-2 max-w-6xl
            rounded-2xl border border-white/10
            bg-ink/95 px-5 py-3
            shadow-[8px_10px_24px_rgba(0,0,0,.28),inset_0_1px_0_rgba(255,255,255,.05)]
            backdrop-blur-xl
            dark:bg-[#15251d]/95
          "
        >
          {links.map((x) => (
            <a
              key={x}
              onClick={() => setOpen(false)}
              className="nav-link-polished block py-3 text-[17px] font-medium tracking-wide"
              href={`#${x.toLowerCase()}`}
            >
              {x}
            </a>
          ))}

          <a
            onClick={() => setOpen(false)}
            href="#ask-ai"
            className="
              mt-2 flex items-center gap-2.5
              rounded-full
              border border-lime/40
              bg-white/[0.06]
              px-5 py-2.5
              text-[15px] font-semibold text-white
              shadow-[0_0_18px_rgba(201,242,105,.12),inset_0_1px_0_rgba(255,255,255,.12)]
              backdrop-blur-md
            "
          >
            <span
              className="
                grid h-7 w-7 shrink-0 place-items-center
                overflow-hidden rounded-full
                border border-lime/25
                bg-lime/15
              "
            >
              <img
                src="/ask-ai-icon.png"
                alt="Ask AI"
                className="h-5 w-5 object-contain"
              />
            </span>
            Ask AI
          </a>
        </div>
      )}
    </header>
  );
}
