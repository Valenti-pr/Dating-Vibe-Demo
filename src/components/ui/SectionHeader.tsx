"use client";

import { motion } from "framer-motion";

import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface Props {
  number: string;
  tag: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({ number, tag, title, description, className }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      className={cn("mx-auto max-w-3xl text-center", className)}
    >
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="text-5xl font-semibold tracking-tight text-white/10">{number}</span>
        <Badge tone="accent">{tag}</Badge>
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-pretty text-sm text-fg/80 sm:text-base">{description}</p>
    </motion.div>
  );
}

