"use client";

import { motion } from "framer-motion";

import { SECTIONS } from "@/lib/constants";
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
          <GlassCard accent="pink">
            <div className="text-sm font-semibold">GlassCard</div>
            <p className="mt-2 text-sm text-fg/75">
              backdrop blur + полупрозрачный фон. Наведи курсор — появится мягкий glow.
            </p>
          </GlassCard>
          <GlassCard accent="violet">
            <div className="text-sm font-semibold">Glow Orbs</div>
            <p className="mt-2 text-sm text-fg/75">
              Декоративные blobs на фоне: чистый CSS, минимум JS.
            </p>
          </GlassCard>
          <GlassCard accent="cyan">
            <div className="text-sm font-semibold">
              <GradientText text="GradientText" />
            </div>
            <p className="mt-2 text-sm text-fg/75">
              Анимированный градиент через background-clip: text.
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}

