"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useTheme } from "@/hooks/useTheme";
import { themeToggleIcon } from "@/lib/animations";
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          variants={themeToggleIcon}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-sm"
        >
          {theme === "dark" ? "☾" : "☀"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

