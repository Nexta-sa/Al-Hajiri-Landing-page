import { cn } from "@/lib/utils";
import { CheckCircle2, Plug, AlertTriangle, Circle, Clock, type LucideIcon } from "lucide-react";
import type { StatusTone } from "@/content/onboarding";

const config: Record<StatusTone, { className: string; icon: LucideIcon }> = {
  connected: { className: "border-success/30 bg-success/10 text-success", icon: Plug },
  received: { className: "border-success/30 bg-success/10 text-success", icon: CheckCircle2 },
  installed: { className: "border-success/30 bg-success/10 text-success", icon: CheckCircle2 },
  partial: { className: "border-traffic-amber/30 bg-traffic-amber/10 text-traffic-amber", icon: AlertTriangle },
  scheduled: { className: "border-brand-500/30 bg-brand-500/10 text-brand-400", icon: Clock },
  pending: { className: "border-white/10 bg-white/[0.04] text-ink-muted", icon: Circle },
};

/** Colored status chip for onboarding rows and site cards. */
export function StatusPill({ tone, children }: { tone: StatusTone; children: React.ReactNode }) {
  const { className, icon: Icon } = config[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        className
      )}
    >
      <Icon className="size-3" aria-hidden />
      {children}
    </span>
  );
}
