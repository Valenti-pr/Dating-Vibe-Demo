"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">
              Dating<span className="text-fg/60">2026</span>
            </div>
            <div className="mt-2 text-sm text-fg/70">Создано за 24 часа с Claude + Cursor</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>Next.js</Badge>
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Motion</Badge>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Button>GitHub</Button>
            </a>
            <a href="#hero" className="text-sm text-fg/70 hover:text-fg">
              Наверх
            </a>
          </div>
        </div>

        <div className="mt-10 text-xs text-fg/50">
          © {new Date().getFullYear()} Dating2026. Demo project.
        </div>
      </div>
    </footer>
  );
}

