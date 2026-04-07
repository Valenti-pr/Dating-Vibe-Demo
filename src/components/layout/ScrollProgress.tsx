"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const motionProgress = useMotionValue(0);
  const width = useSpring(motionProgress, { stiffness: 300, damping: 30, mass: 0.2 });

  useEffect(() => {
    motionProgress.set(progress);
  }, [motionProgress, progress]);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full">
      <motion.div
        style={{ scaleX: width, transformOrigin: "0% 50%" }}
        className="h-full w-full bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3"
      />
    </div>
  );
}

