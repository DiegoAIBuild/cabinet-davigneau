"use client";

import { TextReveal } from "./text-reveal";

export function ClosingLine() {
  return (
    <section className="pt-[var(--section-y)] text-center">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <TextReveal
          text="Reprendre soin de son sourire, simplement."
          className="font-serif font-normal tracking-[-0.022em] justify-center text-ink/20"
          />
      </div>
    </section>
  );
}
