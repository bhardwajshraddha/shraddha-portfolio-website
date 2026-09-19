"use client";
import { Code2, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
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
        {/* Small code badge gives the personal logo a distinct technical identity. */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-lime to-[#9ace53] text-ink shadow-[0_0_20px_rgba(201,242,105,.3)]">
            <Code2 size={18} />
          </span>
          <span className="bg-gradient-to-r from-white via-white to-lime bg-clip-text text-base font-semibold tracking-tight text-transparent">
            Shraddha<span className="text-lime">.</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((x) => (
            <a
              key={x}
              className="nav-link-polished"
              href={`#${x.toLowerCase()}`}
            >
              {x}
            </a>
          ))}
          <a
            className="nav-link-polished inline-flex items-center gap-1.5"
            href="#ask-ai"
          >
            <Sparkles size={14} />
            Ask AI
          </a>
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
              className="nav-link-polished block py-2.5"
              href={`#${x.toLowerCase()}`}
            >
              {x}
            </a>
          ))}
          <a
            onClick={() => setOpen(false)}
            className="nav-link-polished flex items-center gap-1.5 py-2.5"
            href="#ask-ai"
          >
            <Sparkles size={14} />
            Ask AI
          </a>
        </div>
      )}
    </header>
  );
}
