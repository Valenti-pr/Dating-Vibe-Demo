"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { GlassPanel } from "@/components/ui/GlassPanel";

type Device = "desktop" | "tablet" | "mobile";

const SIZES: Record<Device, { w: number; h: number; label: string }> = {
  desktop: { w: 860, h: 440, label: "Desktop" },
  tablet: { w: 640, h: 440, label: "Tablet" },
  mobile: { w: 360, h: 520, label: "Mobile" }
};

export function DevicePreview() {
  const [device, setDevice] = useState<Device>("desktop");
  const size = SIZES[device];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Object.entries(SIZES).map(([key, s]) => (
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
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ width: size.w, height: size.h }}
          className="max-w-full"
        >
          <GlassPanel className="h-full w-full overflow-hidden p-6">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="text-sm font-semibold">Мини‑профиль</div>
                <p className="mt-2 text-sm text-fg/70">
                  UI сжимается/расширяется с layout‑анимацией.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-accent-1/35 via-accent-2/25 to-accent-3/35" />
                  <div>
                    <div className="text-sm font-semibold">Кира, 23</div>
                    <div className="text-xs text-fg/70">AI‑совместимость: 91%</div>
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

