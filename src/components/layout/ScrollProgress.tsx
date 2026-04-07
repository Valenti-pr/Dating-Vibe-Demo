"use client";

import { motion, useSpring } from "framer-motion";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const width = useSpring(progress, { stiffness: 300, damping: 30, mass: 0.2 });

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full">
      <motion.div
        style={{ scaleX: width, transformOrigin: "0% 50%" }}
        className="h-full w-full bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3"
      />
    </div>
  );
}

