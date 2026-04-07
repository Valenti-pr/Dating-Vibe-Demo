"use client";

import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
}

export function Button({ className, variant = "primary", size = "md", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-3/60",
        "disabled:opacity-50 disabled:pointer-events-none",
        size === "sm" ? "h-9" : "h-11",
        variant === "primary"
          ? "bg-gradient-to-r from-accent-1/90 via-accent-2/90 to-accent-3/90 text-white shadow-glow hover:opacity-95"
          : "bg-white/0 text-fg hover:bg-white/10 border border-white/15",
        className
      )}
      {...props}
    />
  );
}

