"use client";

import { useRef, type ReactNode } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  duration = 0.6,
  delay = 0,
  yOffset = 24,
  blur = "8px",
}: BlurFadeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ y: yOffset, opacity: 0, filter: `blur(${blur})` }}
        animate={isInView ? { y: 0, opacity: 1, filter: "blur(0px)" } : undefined}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
