"use client";

import { motion } from "framer-motion";

import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function ThemeToggle({ className }: Props) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-xl",
        "border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 transition",
        className
      )}
      aria-label="Toggle theme"
    >
      <motion.span
        key={theme}
        initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
        animate={{ rotateY: 0, opacity: 1, scale: 1 }}
        exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="text-sm"
      >
        {theme === "dark" ? "☾" : "☀"}
      </motion.span>
    </button>
  );
}

