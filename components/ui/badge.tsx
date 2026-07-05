import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "brand" | "neutral" | "success";
}

/** Small pill label used for eyebrows and status chips. */
export function Badge({ tone = "brand", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tone === "brand" && "border-brand-500/40 bg-brand-500/[0.12] text-brand-400",
        tone === "neutral" && "border-white/10 bg-white/[0.04] text-ink-muted",
        tone === "success" && "border-success/30 bg-success/10 text-success",
        className
      )}
      {...props}
    />
  );
}
