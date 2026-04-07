"use client";

import { motion } from "framer-motion";

import { PROFILES } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useInView } from "@/hooks/useInView";
import { ProfileCard } from "./ProfileCard";

export function StaggerDemo() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, threshold: 0.2 });

  return (
    <div ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PROFILES.slice(0, 6).map((p) => (
          <motion.div key={p.id} variants={fadeInUp}>
            <ProfileCard profile={p} />
          </motion.div>
        ))}
      </motion.div>
      <p className="mt-4 text-center text-xs text-fg/60">stagger animation + scroll trigger</p>
    </div>
  );
}

