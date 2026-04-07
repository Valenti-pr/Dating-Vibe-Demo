"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { MOOD_TAGS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function MoodTags() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const picked = useMemo(() => MOOD_TAGS.filter((t) => selected[t.id]), [selected]);

  return (
    <GlassPanel className="p-6">
      <div className="text-sm font-semibold">Теги настроения</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {MOOD_TAGS.map((t) => {
          const on = !!selected[t.id];
          return (
            <motion.button
              key={t.id}
              type="button"
              layout
              onClick={() => setSelected((m) => ({ ...m, [t.id]: !m[t.id] }))}
              className={cn(
                "rounded-full px-4 py-2 text-xs border transition",
                on
                  ? "border-white/20 bg-white/15"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              )}
            >
              {t.label}
            </motion.button>
          );
        })}
      </div>
      <div className="mt-4 text-xs text-fg/70">
        Выбрано: {picked.length ? picked.map((t) => t.label).join(", ") : "ничего"}
      </div>
    </GlassPanel>
  );
}

