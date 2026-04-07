"use client";

import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
}

export function GradientText({ text, className }: Props) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 bg-[length:220%_220%] bg-clip-text text-transparent [animation:gradient-x_7s_ease_infinite]",
        className
      )}
    >
      {text}
    </span>
  );
}

