import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { onboarding } from "@/content/onboarding";

/** Horizontal 3-stage progress tracker in the onboarding header. */
export function StageTracker() {
  const currentIndex = onboarding.stages.findIndex((s) => s.state === "In progress");

  return (
    <ol className="flex items-center">
      {onboarding.stages.map((stage, i) => {
        const done = stage.state === "Completed";
        const active = stage.state === "In progress";
        const isLast = i === onboarding.stages.length - 1;
        return (
          <li key={stage.index} className={cn("flex items-center", !isLast && "flex-1")}>
            <div className="flex flex-col items-center gap-2 text-center">
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-full border text-sm font-semibold",
                  done && "border-success/40 bg-success/15 text-success",
                  active && "border-brand-500 bg-brand-500 text-white",
                  !done && !active && "border-white/15 bg-white/[0.03] text-ink-muted"
                )}
              >
                {done ? <Check className="size-4" aria-hidden /> : stage.index}
              </span>
              <span
                className={cn(
                  "max-w-[120px] text-[11px] leading-tight",
                  active ? "text-white" : "text-ink-muted"
                )}
              >
                {stage.title}
              </span>
            </div>
            {!isLast && (
              <span
                className={cn(
                  "mx-2 mb-6 h-px flex-1",
                  i < currentIndex ? "bg-success/40" : "bg-white/10"
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
