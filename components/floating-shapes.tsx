"use client";

import { motion } from "framer-motion";

const MotionDiv = motion.div as any;

export function FloatingShapes() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <MotionDiv
        className="absolute left-6 top-8 h-16 w-16 rounded-3xl border border-accent/25 bg-accent/8"
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <MotionDiv
        className="absolute right-8 top-16 h-10 w-10 rounded-full border border-accent/30 bg-accent/10"
        animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <MotionDiv
        className="absolute bottom-12 left-1/4 h-24 w-24 rounded-[2rem] border border-border bg-background/70"
        animate={{ y: [0, -8, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  );
}
