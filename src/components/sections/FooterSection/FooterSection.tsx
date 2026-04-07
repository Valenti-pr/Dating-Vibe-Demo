"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FOOTER_COPY } from "@/lib/constants";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">
              {FOOTER_COPY.brand.name}
              <span className="text-fg/60">{FOOTER_COPY.brand.accent}</span>
            </div>
            <div className="mt-2 text-sm text-fg/70">{FOOTER_COPY.subtitle}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {FOOTER_COPY.techStack.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a href={FOOTER_COPY.github.href} target="_blank" rel="noreferrer">
              <Button>{FOOTER_COPY.github.label}</Button>
            </a>
            <a href={FOOTER_COPY.backToTop.href} className="text-sm text-fg/70 hover:text-fg">
              {FOOTER_COPY.backToTop.label}
            </a>
          </div>
        </div>

        <div className="mt-10 text-xs text-fg/50">
          © {new Date().getFullYear()} {FOOTER_COPY.copyrightSuffix}
        </div>
      </div>
    </footer>
  );
}

