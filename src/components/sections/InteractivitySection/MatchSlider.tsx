"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { UI_COPY } from "@/lib/constants";
import { clamp } from "@/lib/utils";
import { GlassPanel } from "@/components/ui/GlassPanel";

function labelFor(v: number) {
  const rule = UI_COPY.match.steps.find((s) => v < s.lt) ?? UI_COPY.match.steps.at(-1)!;
  return { label: rule.label, emoji: rule.emoji };
}

export function MatchSlider() {
  const [value, setValue] = useState(72);
  const v = clamp(value, 0, 100);
  const meta = useMemo(() => labelFor(v), [v]);

  return (
    <GlassPanel className="p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold">{UI_COPY.match.title}</div>
        <div className="text-sm text-fg/80">
          <span className="mr-2">{meta.emoji}</span>
          {meta.label}
        </div>
      </div>

      <div className="mt-5">
        <input
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-pink-400"
        />
        <div className="mt-3 flex items-center justify-between text-xs text-fg/60">
          <span>{UI_COPY.match.min}</span>
          <span>{UI_COPY.match.max}</span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <motion.div
          key={v}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="text-4xl font-semibold"
        >
          {v}%
        </motion.div>
        <div className="mt-2 text-sm text-fg/70">{UI_COPY.match.hint}</div>
      </div>
    </GlassPanel>
  );
}

