"use client";

import { useCallback, useRef, useState } from "react";
import { Reveal } from "./reveal";

export function AvantApres() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);

  const onMove = useCallback((clientX: number) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100));
    setPct(next);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      onMove(e.clientX);
    },
    [onMove]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (e.buttons > 0) onMove(e.clientX);
    },
    [onMove]
  );

  return (
    <section className="py-[var(--section-y)] bg-paper">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--gutter)]">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="inline-flex items-center gap-3.5 text-[11px] font-medium tracking-[.32em] uppercase text-gold-deep">
                <span className="w-7 h-px bg-gold" />
                Avant / Après
              </div>
              <h2
                className="font-serif font-normal tracking-[-0.022em] leading-[.98] mt-[18px]"
                style={{ fontSize: "clamp(40px, 5.6vw, 84px)" }}
              >
                Le résultat, <em className="italic font-medium text-gold-deep">en clair.</em>
              </h2>
            </div>
            <p className="text-ink-soft leading-[1.65] max-w-[56ch]" style={{ fontSize: "clamp(17px, 1.35vw, 20px)" }}>
              Quelques cas réalisés au cabinet. Le curseur compare la situation initiale
              et le résultat final — toutes les photographies sont partagées avec l&apos;accord du patient.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            ref={stageRef}
            className="relative mt-12 aspect-[16/8.5] rounded-lg overflow-hidden bg-mist-deep border border-rule cursor-ew-resize select-none shadow-[0_40px_80px_-40px_rgba(27,58,92,.25)]"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
          >
            {/* Before */}
            <div
              className="absolute inset-0 grid place-items-center font-mono text-[11px] tracking-[.18em] text-ink-soft uppercase"
              style={{
                background: "repeating-linear-gradient(135deg, #d2d8e3 0 1px, transparent 1px 12px), linear-gradient(180deg, #e3e7ee, #c9d0dc)",
              }}
            >
              Sourire · avant détartrage
            </div>
            {/* After */}
            <div
              className="absolute inset-0 grid place-items-center font-mono text-[11px] tracking-[.18em] text-ink uppercase"
              style={{
                clipPath: `inset(0 0 0 ${pct}%)`,
                background: "repeating-linear-gradient(135deg, rgba(201,169,110,.12) 0 1px, transparent 1px 12px), linear-gradient(180deg, #f7f4ec, #ebe2cb)",
              }}
            >
              Sourire · après détartrage
            </div>
            {/* Labels */}
            <span className="absolute top-5 left-6 px-3.5 py-2 rounded-full bg-white/92 font-sans text-[11px] tracking-[.18em] text-ink uppercase font-medium shadow-[0_6px_16px_-6px_rgba(27,58,92,.2)]">
              Avant
            </span>
            <span className="absolute top-5 right-6 px-3.5 py-2 rounded-full bg-ink text-white font-sans text-[11px] tracking-[.18em] uppercase font-medium shadow-[0_6px_16px_-6px_rgba(27,58,92,.2)]">
              Après
            </span>
            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(27,58,92,.2)] -translate-x-1/2 pointer-events-none"
              style={{ left: `${pct}%` }}
            />
            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-rule grid place-items-center text-ink shadow-[0_14px_30px_-10px_rgba(27,58,92,.3)] pointer-events-none"
              style={{ left: `${pct}%` }}
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" stroke="currentColor" fill="none" strokeWidth="1.6" strokeLinecap="round">
                <path d="M9 5l-6 7 6 7M15 5l6 7-6 7" />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
