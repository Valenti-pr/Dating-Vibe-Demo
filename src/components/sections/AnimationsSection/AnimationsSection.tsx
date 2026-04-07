"use client";

import { motion } from "framer-motion";

import { SECTIONS } from "@/lib/constants";
import { staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerDemo } from "./StaggerDemo";

export default function AnimationsSection() {
  const s = SECTIONS.find((x) => x.id === "animations")!;

  return (
    <section id="animations" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeader number={s.number} tag={s.tag} title={s.title} description={s.description} />
      </motion.div>
      <div className="mt-10">
        <StaggerDemo />
      </div>
    </section>
  );
}

