"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LayoutGrid, Boxes, Warehouse, ShoppingCart, Truck, TrendingUp } from "lucide-react";
import { dashboard } from "@/content/site";
import { cn } from "@/lib/utils";

const navIcons = [LayoutGrid, Boxes, Warehouse, ShoppingCart, Truck];

/** Faux analytics dashboard shown in the hero (matches Figma product mock). */
export function DashboardMock() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full rounded-3xl border border-white/10 bg-surface-card/80 p-3 shadow-glow-lg backdrop-blur-sm sm:p-4">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-2 pb-3 pt-1">
        <span className="size-3 rounded-full bg-traffic-red" />
        <span className="size-3 rounded-full bg-traffic-amber" />
        <span className="size-3 rounded-full bg-traffic-green" />
      </div>

      <div className="flex gap-3 sm:gap-4">
        {/* sidebar */}
        <aside className="hidden w-40 shrink-0 flex-col gap-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-2 sm:flex">
          {dashboard.nav.map((item, i) => {
            const Icon = navIcons[i] ?? LayoutGrid;
            const active = i === 0;
            return (
              <span
                key={item}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-3 py-2 text-[13px]",
                  active
                    ? "bg-brand-500/15 font-medium text-white"
                    : "text-ink-muted"
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                {item}
              </span>
            );
          })}
        </aside>

        {/* main panel */}
        <div className="min-w-0 flex-1">
          {/* stat cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {dashboard.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 sm:p-4"
              >
                <p className="text-lg font-bold text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[10px] leading-tight text-ink-muted sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* chart */}
          <div className="relative mt-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-brand-500/30 bg-brand-500/15 px-2.5 py-1 text-[11px] font-medium text-brand-400">
              <TrendingUp className="size-3" aria-hidden />
              {dashboard.badge}
            </div>
            <div className="flex h-32 items-end gap-1.5 sm:h-40 sm:gap-2">
              {dashboard.bars.map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-brand-600/40 to-brand-500"
                  style={{ height: `${height}%` }}
                  initial={reduceMotion ? undefined : { scaleY: 0 }}
                  whileInView={reduceMotion ? undefined : { scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <p className="mt-3 text-[11px] text-ink-dim">{dashboard.chartCaption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
