"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ScanSearch } from "lucide-react";
import { aiCapabilities } from "@/content/site";
import { cn } from "@/lib/utils";

const items = aiCapabilities.items.slice(0, 4);

/** Floating auto-advancing notification card shown alongside the demo modal. */
export function NotificationCarousel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), 3200);
    return () => window.clearInterval(id);
  }, []);

  const current = items[index];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-surface-card/90 p-5 shadow-glow-lg backdrop-blur-xl">
      <div className="flex items-start gap-3">
        <span className="flex size-9 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400">
          <ScanSearch className="size-4" aria-hidden />
        </span>
        <div className="min-h-[52px] flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm font-semibold text-white">{current.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-muted">{current.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show notification ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-4 bg-brand-500" : "w-1.5 bg-white/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
