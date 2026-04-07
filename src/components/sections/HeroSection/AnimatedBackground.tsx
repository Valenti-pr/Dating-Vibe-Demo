"use client";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-[-120px] h-[420px] w-[420px] rounded-full bg-accent-2/30 blur-3xl [animation:float-slow_8s_ease-in-out_infinite]" />
      <div className="absolute right-[-140px] top-24 h-[520px] w-[520px] rounded-full bg-accent-1/25 blur-3xl [animation:float-slow_10s_ease-in-out_infinite]" />
      <div className="absolute left-1/3 bottom-[-180px] h-[520px] w-[520px] rounded-full bg-accent-3/20 blur-3xl [animation:float-slow_12s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.07),rgba(255,255,255,0))]" />
    </div>
  );
}

