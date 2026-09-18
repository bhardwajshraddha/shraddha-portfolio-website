import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AskAI from "@/components/AskAI";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
export default function Home(){return <><Navbar/><main><Hero/><About/><Skills/><Projects/><AskAI/><Education/><Certifications/><Contact/></main><footer className="border-t border-ink/10 px-5 py-7 text-center text-sm text-ink/50 dark:border-white/10 dark:text-white/50">© {new Date().getFullYear()} Shraddha Bhardwaj. Built with intention.</footer></>}
