"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { useConfetti } from "@/hooks/useConfetti";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function LikeButton() {
  const { fireHearts } = useConfetti();
  const [count, setCount] = useState(0);
  const label = useMemo(() => (count >= 3 ? "Ты слишком популярен" : "Match!"), [count]);

  return (
    <GlassPanel className="p-6 text-center">
      <motion.button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
          fireHearts();
        }}
        whileTap={{ scale: 0.97 }}
        className="mx-auto inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 px-6 py-4 text-sm font-semibold text-white shadow-glow"
      >
        <motion.span
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ type: "spring", stiffness: 300, damping: 16 }}
          key={count}
        >
          ♥
        </motion.span>
        {label}
      </motion.button>
      <div className="mt-4 text-sm text-fg/80">
        Лайков:{" "}
        <motion.span
          key={count}
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="font-semibold"
        >
          {count}
        </motion.span>
      </div>
    </GlassPanel>
  );
}

