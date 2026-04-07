import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  tone?: "accent" | "neutral";
}

export function Badge({ className, tone = "neutral", ...props }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        tone === "accent"
          ? "bg-gradient-to-r from-accent-1/15 via-accent-2/15 to-accent-3/15 text-fg border border-white/15"
          : "bg-white/5 text-fg border border-white/10",
        className
      )}
      {...props}
    />
  );
}

