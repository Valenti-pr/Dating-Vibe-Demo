"use client";

import confetti from "canvas-confetti";

export function useConfetti() {
  const fireHearts = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      startVelocity: 35,
      scalar: 1,
      origin: { y: 0.65 },
      colors: ["#fb7185", "#f43f5e", "#ec4899", "#a855f7"],
      shapes: ["circle"]
    });
  };

  return { fireHearts } as const;
}

