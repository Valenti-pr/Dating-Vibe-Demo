"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeInUp } from "@/lib/animations";
import { HERO_COPY, PROFILES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimatedBackground } from "./AnimatedBackground";
import { FloatingCards } from "./FloatingCards";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pt-24">
        <div className="relative">
          <FloatingCards profiles={PROFILES} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.p variants={fadeInUp} className="text-sm text-fg/70">
              {HERO_COPY.badge}
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              {HERO_COPY.titleBeforeAccent}{" "}
              <span className="bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 bg-[length:200%_200%] bg-clip-text text-transparent [animation:gradient-x_6s_ease_infinite]">
                {HERO_COPY.titleAccent}
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-5 text-pretty text-base text-fg/80 sm:text-lg">
              {HERO_COPY.description}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={HERO_COPY.ctaPrimary.href}>
                <Button>{HERO_COPY.ctaPrimary.label}</Button>
              </a>
              <a href={HERO_COPY.ctaSecondary.href} target="_blank" rel="noreferrer">
                <Button variant="ghost">{HERO_COPY.ctaSecondary.label}</Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={HERO_COPY.scrollHint.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-fg/80 backdrop-blur-md hover:bg-white/10"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-3" />
            {HERO_COPY.scrollHint.label}
          </a>
        </div>
      </div>
    </section>
  );
}

