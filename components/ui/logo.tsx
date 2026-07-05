import { Boxes } from "lucide-react";
import { cn } from "@/lib/utils";
import { brand } from "@/content/site";

interface LogoProps {
  className?: string;
  subLabel?: string;
}

/** NEXTAIQ wordmark with gradient glyph tile (matches Figma nav logo). */
export function Logo({ className, subLabel }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="flex size-8 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow">
        <Boxes className="size-4 text-white" strokeWidth={2} aria-hidden />
      </span>
      <span className="flex items-baseline gap-1.5">
        <span className="text-lg font-bold tracking-tight text-white">{brand.name}</span>
        {subLabel && <span className="text-sm text-ink-dim">/ {subLabel}</span>}
      </span>
    </span>
  );
}
