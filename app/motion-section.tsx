"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  id: string;
  className: string;
  children: ReactNode;
};

export function MotionSection({ id, className, children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 48, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
