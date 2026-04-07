"use client";

import { motion } from "framer-motion";

import type { Profile } from "@/types";
import { GlassPanel } from "@/components/ui/GlassPanel";

interface Props {
  profiles: Profile[];
}

function MiniCard({ profile }: { profile: Profile }) {
  return (
    <GlassPanel className="w-44 p-3">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-1/40 via-accent-2/30 to-accent-3/40 text-sm font-semibold">
          {profile.initials}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">
            {profile.name}, {profile.age}
          </div>
          <div className="text-xs text-fg/70">{profile.match}% match</div>
        </div>
      </div>
    </GlassPanel>
  );
}

export function FloatingCards({ profiles }: Props) {
  const items = profiles.slice(0, 4);
  const positions = [
    "left-6 top-16",
    "right-10 top-28",
    "left-14 bottom-20",
    "right-6 bottom-10"
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {items.map((p, i) => (
        <motion.div
          key={p.id}
          className={`absolute ${positions[i]}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <MiniCard profile={p} />
        </motion.div>
      ))}
    </div>
  );
}

