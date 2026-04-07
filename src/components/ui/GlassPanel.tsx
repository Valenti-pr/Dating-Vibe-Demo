import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  blur?: "md" | "lg";
}

export function GlassPanel({ className, blur = "lg", ...props }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/15 bg-white/5",
        blur === "lg" ? "backdrop-blur-xl" : "backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
}

