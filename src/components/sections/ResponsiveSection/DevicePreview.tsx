"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import type { Device } from "@/types";
import { layoutSpring } from "@/lib/animations";
import { PROFILES, RESPONSIVE_COPY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function DevicePreview() {
  const [device, setDevice] = useState<Device>("desktop");
  const sizes = RESPONSIVE_COPY.devices;
  const size = sizes[device];
  const profile = PROFILES.find((p) => p.id === RESPONSIVE_COPY.miniProfile.profileId) ?? PROFILES[0];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Object.entries(sizes).map(([key, s]) => (
          <button
            key={key}
            type="button"
            onClick={() => setDevice(key as Device)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs transition",
              device === key ? "border-white/20 bg-white/15" : "border-white/10 bg-white/5 hover:bg-white/10"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <motion.div
          layout
          transition={layoutSpring}
          style={
            {
              ["--device-w"]: `${size.w}px`,
              ["--device-h"]: `${size.h}px`
            } as React.CSSProperties
          }
          className="max-w-full w-[var(--device-w)] h-[var(--device-h)]"
        >
          <GlassPanel className="h-full w-full overflow-hidden p-4 sm:p-5">
            <div className="flex h-full flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold">{RESPONSIVE_COPY.miniProfile.title}</div>
                  <p className="mt-1 text-sm text-fg/70">{RESPONSIVE_COPY.miniProfile.description}</p>
                </div>
                <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-fg/80">
                  {RESPONSIVE_COPY.miniProfile.matchPrefix} <span className="font-semibold">{profile.match}%</span>
                </div>
              </div>

              <div className="grid flex-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="relative aspect-[16/10] w-full">
                    {profile.photo ? (
                      <Image
                        src={profile.photo.src}
                        alt={profile.photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 520px"
                        className="object-cover"
                        priority={false}
                      />
                    ) : null}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="text-base font-semibold text-white">
                      {profile.name}, {profile.age}
                    </div>
                    <div className="text-sm text-white/80">{profile.city}</div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <div className="text-xs font-semibold text-fg/80">{RESPONSIVE_COPY.miniProfile.aboutTitle}</div>
                    <p className="mt-2 text-sm text-fg/75">{RESPONSIVE_COPY.miniProfile.aboutText}</p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-fg/80">{RESPONSIVE_COPY.miniProfile.interestsTitle}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {profile.interests.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="group relative overflow-hidden rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-medium text-fg/85 transition hover:border-white/20 hover:bg-white/10"
                        >
                          <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <span className="absolute -left-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-accent-1/12 blur-xl" />
                            <span className="absolute -right-6 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-accent-3/12 blur-xl" />
                          </span>
                          <span className="relative">{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </div>
  );
}

