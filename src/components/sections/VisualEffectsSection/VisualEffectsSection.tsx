"use client";

import { motion } from "framer-motion";

import { SECTIONS, UI_COPY } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "./GlassCard";
import { GlowOrb } from "./GlowOrb";
import { GradientText } from "./GradientText";

export default function VisualEffectsSection() {
  const s = SECTIONS.find((x) => x.id === "effects")!;

  return (
    <section id="effects" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <GlowOrb className="left-[-120px] top-10 h-80 w-80" colorClassName="bg-accent-2/30" />
      <GlowOrb className="right-[-140px] bottom-10 h-96 w-96" colorClassName="bg-accent-1/25" />

      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <SectionHeader number={s.number} tag={s.tag} title={s.title} description={s.description} />

        <motion.div variants={fadeInUp} className="mt-10 grid gap-4 lg:grid-cols-3">
          {UI_COPY.effectsCards.map((c) => (
            <GlassCard key={c.title} accent={c.accent}>
              <div className="text-sm font-semibold">
                {c.title === "GradientText" ? <GradientText text={c.title} /> : c.title}
              </div>
              <p className="mt-2 text-sm text-fg/75">{c.description}</p>
            </GlassCard>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

