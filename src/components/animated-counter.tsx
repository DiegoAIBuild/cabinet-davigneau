"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring, useMotionValue, motion } from "framer-motion";

export function AnimatedCounter({
  end,
  suffix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, {
    bounce: 0,
    duration: duration * 1000,
  });

  useEffect(() => {
    spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  useEffect(() => {
    if (isInView) {
      motionVal.set(end);
    }
  }, [isInView, end, motionVal]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </motion.span>
  );
}
