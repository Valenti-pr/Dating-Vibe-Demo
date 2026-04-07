"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { UI_COPY } from "@/lib/constants";
import { likeButtonTap, likeHeartPop, numberBump } from "@/lib/animations";
import { useConfetti } from "@/hooks/useConfetti";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function LikeButton() {
  const { fireHearts } = useConfetti();
  const [count, setCount] = useState(0);
  const label = useMemo(
    () => (count >= 3 ? UI_COPY.like.labelPopular : UI_COPY.like.labelDefault),
    [count]
  );

  return (
    <GlassPanel className="p-6 text-center">
      <motion.button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
          fireHearts();
        }}
        {...likeButtonTap}
        className="mx-auto inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 px-6 py-4 text-sm font-semibold text-white shadow-glow"
      >
        <motion.span key={count} {...likeHeartPop}>
          ♥
        </motion.span>
        {label}
      </motion.button>
      <div className="mt-4 text-sm text-fg/80">
        {UI_COPY.like.countPrefix}{" "}
        <motion.span
          key={count}
          variants={numberBump}
          initial="hidden"
          animate="visible"
          className="font-semibold"
        >
          {count}
        </motion.span>
      </div>
    </GlassPanel>
  );
}

