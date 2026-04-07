"use client";

import { useEffect, useMemo, useState } from "react";

import type { Theme } from "@/types";

interface Props {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

const DEFAULT_STORAGE_KEY = "dating2026:theme";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = DEFAULT_STORAGE_KEY
}: Props) {
  const [isReady, setIsReady] = useState(false);

  const initialTheme = useMemo(() => defaultTheme, [defaultTheme]);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    const theme = isTheme(stored) ? stored : initialTheme;
    applyTheme(theme);
    setIsReady(true);
  }, [initialTheme, storageKey]);

  if (!isReady) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

