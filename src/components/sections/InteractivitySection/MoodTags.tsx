"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { MOOD_TAGS, UI_COPY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function MoodTags() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const picked = useMemo(() => MOOD_TAGS.filter((t) => selected[t.id]), [selected]);

  return (
    <GlassPanel className="p-6">
      <div className="text-sm font-semibold">{UI_COPY.moods.title}</div>
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
                "group relative overflow-hidden rounded-full border px-4 py-2 text-xs transition",
                on
                  ? "border-white/25 bg-white/15"
                  : "border-white/10 bg-white/5 hover:border-white/15 hover:bg-white/10"
              )}
            >
              {on ? (
                <motion.span
                  layoutId={`mood-active-${t.id}`}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-1/18 via-accent-2/14 to-accent-3/18"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              ) : null}
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-accent-2/10 blur-xl" />
                <span className="absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-accent-3/10 blur-xl" />
              </span>

              <span className="relative inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full border border-white/10 bg-white/5 text-[11px]">
                  {t.emoji ?? "•"}
                </span>
                <span className={cn("font-medium", on ? "text-fg" : "text-fg/85")}>{t.label}</span>
              </span>
            </motion.button>
          );
        })}
      </div>
      <div className="mt-4 text-xs text-fg/70">
        {UI_COPY.moods.selectedPrefix}{" "}
        {picked.length ? picked.map((t) => t.label).join(", ") : UI_COPY.moods.selectedNone}
      </div>
    </GlassPanel>
  );
}

