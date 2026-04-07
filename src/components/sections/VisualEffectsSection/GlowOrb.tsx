"use client";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  colorClassName: string;
}

export function GlowOrb({ className, colorClassName }: Props) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-70 [animation:float-slow_10s_ease-in-out_infinite]",
        colorClassName,
        className
      )}
    />
  );
}

