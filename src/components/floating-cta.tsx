"use client";

import { useEffect, useState } from "react";

export function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed right-[clamp(16px,3vw,32px)] bottom-[clamp(16px,3vw,32px)] z-90 px-[22px] py-4 rounded-full bg-ink text-white flex items-center gap-3 text-[14px] font-medium shadow-[0_20px_40px_-16px_rgba(27,58,92,.5)] transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
      }`}
      style={{ transitionTimingFunction: "var(--ease)" }}
    >
      Prendre rendez-vous
      <span className="inline-grid place-items-center w-6 h-6 rounded-full bg-gold text-ink">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[11px] h-[11px]">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}
