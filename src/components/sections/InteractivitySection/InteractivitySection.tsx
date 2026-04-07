"use client";

import { motion } from "framer-motion";

import { SECTIONS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LikeButton } from "./LikeButton";
import { MatchSlider } from "./MatchSlider";
import { MoodTags } from "./MoodTags";

export default function InteractivitySection() {
  const s = SECTIONS.find((x) => x.id === "interactivity")!;

  return (
    <section id="interactivity" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeader number={s.number} tag={s.tag} title={s.title} description={s.description} />
        <motion.div variants={fadeInUp} className="mt-10 grid gap-4 lg:grid-cols-3">
          <LikeButton />
          <MatchSlider />
          <MoodTags />
        </motion.div>
      </motion.div>
    </section>
  );
}

