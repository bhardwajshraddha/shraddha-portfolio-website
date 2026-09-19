"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import { certifications, type Certification } from "@/data/certifications";
function tiltFromPointer(event: ReactMouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  return `perspective(1000px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-4px)`;
}
export default function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);
  const [tilt, setTilt] = useState("");
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="section section-tint premium-section"
    >
      <p className="eyebrow">Credentials</p>
      <h2 className="section-title mt-4">Continually sharpening my craft.</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <motion.button
            onMouseMove={(event) =>
              setTilt(`${c.name}:${tiltFromPointer(event)}`)
            }
            onMouseLeave={() => setTilt("")}
            onClick={() => setSelected(c)}
            key={c.name}
            style={{
              transform: tilt.startsWith(`${c.name}:`)
                ? tilt.slice(c.name.length + 1)
                : "perspective(1000px) rotateX(0) rotateY(0)",
            }}
            className="card premium-card text-left transition-transform duration-200 will-change-transform"
          >
            <div className="relative h-32 overflow-hidden rounded-xl bg-moss/10">
              <Image
                src={c.image}
                alt={`${c.name} certificate`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 font-semibold text-ink dark:text-white">
              {c.name}
            </h3>
            <p className="mt-1 text-sm text-ink/60 dark:text-white/60">
              {c.issuer} · {c.date}
            </p>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-ink/70 p-5"
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl bg-cream p-3 dark:bg-[#1b2922]"
            >
              <button
                aria-label="Close certificate preview"
                onClick={() => setSelected(null)}
                className="icon-button absolute right-5 top-5 z-10 bg-cream/80 dark:bg-ink/80"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-[1.6] overflow-hidden rounded-xl">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
