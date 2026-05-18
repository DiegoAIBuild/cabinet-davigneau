"use client";

import { useEffect, useRef } from "react";

export function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let tx = 0, ty = 0, rx = 0, ry = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "0.5";
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
    };

    const tick = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    const rafId = requestAnimationFrame(tick);

    const interactives = document.querySelectorAll("a, button, .care, .testi-card, .tile");
    const onEnter = () => { ring.style.width = "68px"; ring.style.height = "68px"; };
    const onLeave = () => { ring.style.width = "46px"; ring.style.height = "46px"; };
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[9px] h-[9px] rounded-full bg-gold pointer-events-none z-[9000] opacity-0 transition-opacity duration-300"
        style={{ mixBlendMode: "multiply", transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-[46px] h-[46px] rounded-full border border-gold pointer-events-none z-[8999] opacity-0 transition-all duration-250"
        style={{ transform: "translate(-50%, -50%)", transitionTimingFunction: "var(--ease)" }}
      />
    </>
  );
}
