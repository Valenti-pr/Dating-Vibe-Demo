"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { GlassPanel } from "@/components/ui/GlassPanel";

interface Props extends HTMLAttributes<HTMLDivElement> {
  accent?: "pink" | "violet" | "cyan";
}

export function GlassCard({ className, accent = "pink", ...props }: Props) {
  const glow =
    accent === "pink"
      ? "hover:shadow-[0_0_0_1px_rgba(236,72,153,0.25),0_20px_80px_rgba(236,72,153,0.12)]"
      : accent === "violet"
        ? "hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_20px_80px_rgba(139,92,246,0.12)]"
        : "hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_20px_80px_rgba(34,211,238,0.12)]";

  return (
    <GlassPanel
      className={cn("p-6 transition-shadow", glow, className)}
      {...props}
    />
  );
}

