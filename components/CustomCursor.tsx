"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      setEnabled(true);
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };
    const over = (event: MouseEvent) =>
      setActive(
        Boolean(
          (event.target as HTMLElement).closest?.(
            "a, button, .card, [data-cursor-interactive]",
          ),
        ),
      );
    window.addEventListener("pointermove", move);
    window.addEventListener("mouseover", over);
    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="custom-cursor"
      style={{ x: springX, y: springY }}
      animate={{ scale: active ? 1.8 : 1, opacity: active ? 0.8 : 0.55 }}
      transition={{ type: "spring", stiffness: 360, damping: 22 }}
    />
  );
}
