"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
const links = ["About", "Skills", "Projects", "Education", "Contact"];
export default function Navbar() {
  const [dark, setDark] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const saved = localStorage.getItem("theme"); const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches; setDark(isDark); document.documentElement.classList.toggle("dark", isDark); }, []);
  const toggle = () => { const next = !dark; setDark(next); localStorage.setItem("theme", next ? "dark" : "light"); document.documentElement.classList.toggle("dark", next); };
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/5 bg-cream/85 backdrop-blur dark:border-white/10 dark:bg-ink/85"><nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5"><a href="#top" className="font-semibold tracking-tight text-ink dark:text-white">Shraddha<span className="text-moss dark:text-lime">.</span></a><div className="hidden items-center gap-7 md:flex">{links.map(x => <a key={x} className="nav-link" href={`#${x.toLowerCase()}`}>{x}</a>)}</div><div className="flex items-center gap-2"><button aria-label="Toggle color theme" onClick={toggle} className="icon-button">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button><button aria-label="Open navigation" onClick={() => setOpen(!open)} className="icon-button md:hidden">{open ? <X size={19}/> : <Menu size={19}/>}</button></div></nav>{open && <div className="border-t border-ink/5 px-5 pb-4 pt-2 dark:border-white/10 md:hidden">{links.map(x => <a key={x} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-medium" href={`#${x.toLowerCase()}`}>{x}</a>)}</div>}</header>;
}
