"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NAV_CTA, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        scrolled ? "border-b border-white/10 bg-white/5 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href={NAV_CTA.brand.href} className="font-semibold tracking-tight">
          {NAV_CTA.brand.name}
          <span className="text-fg/60">{NAV_CTA.brand.accent}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-fg/80 hover:text-fg transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <a href={NAV_CTA.demoHref} className="hidden sm:block">
            <Button size="sm">{NAV_CTA.demoLabel}</Button>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex items-center justify-between py-2">
              <ThemeToggle />
              <a href={NAV_CTA.demoHref}>
                <Button size="sm" onClick={() => setOpen(false)}>
                  {NAV_CTA.mobileDemoLabel}
                </Button>
              </a>
            </div>
            <div className="flex flex-col gap-2 py-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

