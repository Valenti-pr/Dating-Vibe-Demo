"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Options extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView<T extends Element>(options?: Options) {
  const opts = useMemo(
    () => ({
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? "0px",
      threshold: options?.threshold ?? 0.2,
      once: options?.once ?? true
    }),
    [options?.root, options?.rootMargin, options?.threshold, options?.once]
  );

  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setInView(true);
        if (opts.once) obs.disconnect();
      } else if (!opts.once) {
        setInView(false);
      }
    }, opts);

    obs.observe(el);
    return () => obs.disconnect();
  }, [opts]);

  return { ref, inView } as const;
}

