"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  delay?: number;
  y?: number;
  children?: React.ReactNode;
}

/**
 * Scroll-triggered fade-up wrapper. Honors prefers-reduced-motion by rendering
 * content statically (no transform). Animates once when it enters the viewport.
 */
export function Reveal({ delay = 0, y = 20, children, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
