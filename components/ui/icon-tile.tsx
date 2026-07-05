import { cn } from "@/lib/utils";
import { resolveIcon } from "@/components/icon-map";

interface IconTileProps {
  /** Icon key from content data; resolved to a Lucide component internally. */
  name: string;
  className?: string;
  variant?: "gradient" | "soft";
  size?: "sm" | "md";
}

/**
 * Rounded icon container used on cards and modal headers. Accepts an icon *name*
 * (string) rather than a component so it stays serialisable across the RSC
 * boundary when nested inside client wrappers like <Reveal>.
 */
export function IconTile({ name, className, variant = "soft", size = "md" }: IconTileProps) {
  const Icon = resolveIcon(name);
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl",
        size === "md" ? "size-11" : "size-9",
        variant === "gradient"
          ? "bg-brand-gradient text-white shadow-glow"
          : "border border-brand-500/20 bg-brand-500/10 text-brand-400",
        className
      )}
    >
      <Icon className={size === "md" ? "size-5" : "size-4"} strokeWidth={1.75} aria-hidden />
    </span>
  );
}
