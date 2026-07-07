import React from "react";

type EyebrowProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Small pill label above section headings — one consistent system across the page. */
export default function Eyebrow({ children, tone = "light", className = "" }: EyebrowProps) {
  const toneClasses =
    tone === "light"
      ? "border-primary-200/80 bg-white/80 text-primary-700 shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
      : "border-white/15 bg-white/5 text-primary-300";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] backdrop-blur ${toneClasses} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary-400" aria-hidden="true" />
      {children}
    </span>
  );
}
