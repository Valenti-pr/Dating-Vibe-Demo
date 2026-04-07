"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

import type { Profile } from "@/types";
import { buttonPress, cardHover, likePill } from "@/lib/animations";
import { PROFILE_CARD_COPY } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { GlassPanel } from "@/components/ui/GlassPanel";

interface Props {
  profile: Profile;
}

export function ProfileCard({ profile }: Props) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div {...cardHover} className="h-full">
      <GlassPanel className="h-full p-5">
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-accent-1/35 via-accent-2/25 to-accent-3/35">
            {profile.photo ? (
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                fill
                sizes="56px"
                className="object-cover"
              />
            ) : (
              <div className="grid h-full w-full place-items-center text-lg font-semibold">{profile.initials}</div>
            )}
          </div>
          <div className="min-w-0">
            <div className="truncate text-base font-semibold">
              {profile.name}, {profile.age}
            </div>
            <div className="text-sm text-fg/70">{profile.city}</div>
          </div>
          <div className="ml-auto text-sm font-semibold text-fg/80">{profile.match}%</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.interests.slice(0, 3).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2 text-xs text-fg/80 hover:bg-white/10"
          >
            {PROFILE_CARD_COPY.actions.skip}
          </button>
          <motion.button
            type="button"
            aria-pressed={liked}
            onClick={() => setLiked((v) => !v)}
            variants={likePill}
            initial={false}
            animate={liked ? "liked" : "notLiked"}
            {...buttonPress}
            className={liked
              ? "flex-1 rounded-xl bg-gradient-to-r from-accent-1/80 via-accent-2/80 to-accent-3/80 py-2 text-xs font-semibold text-white ring-1 ring-white/20"
              : "flex-1 rounded-xl bg-gradient-to-r from-accent-1/70 via-accent-2/70 to-accent-3/70 py-2 text-xs font-semibold text-white hover:opacity-95"}
          >
            <span className="inline-flex items-center justify-center gap-2">
              <Heart className={liked ? "h-4 w-4 fill-white text-white" : "h-4 w-4"} />
              {liked ? PROFILE_CARD_COPY.actions.liked : PROFILE_CARD_COPY.actions.like}
            </span>
          </motion.button>
        </div>
      </GlassPanel>
    </motion.div>
  );
}

