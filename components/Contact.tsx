"use client";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 3500);
  };
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="section premium-section"
    >
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title mt-4">
            Let’s build something considered.
          </h2>
          <p className="mt-5 leading-7 text-ink/65 dark:text-white/65">
            Whether you’re hiring or have a project in mind, I’d love to hear
            from you.
          </p>
          <div className="mt-8 space-y-4">
            <a className="contact-link" href="mailto:shraddhadw10@gmail.com">
              <Mail size={18} />
              shraddhadw10@gmail.com
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/shraddhabhardwaj/"
              target="_blank"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              className="contact-link"
              href="https://github.com/bhardwajshraddha"
              target="_blank"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
        <form onSubmit={submit} className="card premium-card space-y-4">
          <label className="field-label">
            Name
            <input
              required
              name="name"
              className="field"
              placeholder="Your name"
            />
          </label>
          <label className="field-label">
            Email
            <input
              required
              type="email"
              name="email"
              className="field"
              placeholder="you@company.com"
            />
          </label>
          <label className="field-label">
            Message
            <textarea
              required
              name="message"
              rows={4}
              className="field resize-none"
              placeholder="How can I help?"
            />
          </label>
          <button className="button-primary" type="submit">
            <Send size={16} />
            Send message
          </button>
          {sent && (
            <p className="flex items-center gap-2 text-sm text-moss dark:text-lime">
              <CheckCircle2 size={16} />
              Thanks—your message is ready to send!
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
