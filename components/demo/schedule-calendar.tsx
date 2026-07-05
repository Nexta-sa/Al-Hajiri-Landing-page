"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { scheduleStep } from "@/content/demo";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

interface ScheduleValue {
  day: number | null;
  time: string | null;
}

interface ScheduleCalendarProps {
  value: ScheduleValue;
  onChange: (value: ScheduleValue) => void;
}

/** Calendar + time-slot picker for the Schedule-a-call wizard step. */
export function ScheduleCalendar({ value, onChange }: ScheduleCalendarProps) {
  // Anchor to June 2026 to match the Figma design; fully navigable.
  const [viewMonth, setViewMonth] = useState(5);
  const [viewYear, setViewYear] = useState(2026);

  const { cells, monthLabel } = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const today = new Date(2026, 5, 13); // reference "now" for disabling past days
    const list: { day: number | null; disabled: boolean }[] = [];
    for (let i = 0; i < firstDay; i += 1) list.push({ day: null, disabled: true });
    for (let d = 1; d <= daysInMonth; d += 1) {
      const date = new Date(viewYear, viewMonth, d);
      list.push({ day: d, disabled: date < today });
    }
    return { cells: list, monthLabel: `${MONTHS[viewMonth]} ${viewYear}` };
  }, [viewMonth, viewYear]);

  function changeMonth(delta: number) {
    let m = viewMonth + delta;
    let y = viewYear;
    if (m < 0) {
      m = 11;
      y -= 1;
    } else if (m > 11) {
      m = 0;
      y += 1;
    }
    setViewMonth(m);
    setViewYear(y);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* calendar */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
        <div className="mb-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
            className="focus-ring inline-flex size-8 items-center justify-center rounded-full border border-white/10 text-ink-muted hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="text-sm font-semibold text-white">{monthLabel}</span>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            aria-label="Next month"
            className="focus-ring inline-flex size-8 items-center justify-center rounded-full border border-white/10 text-ink-muted hover:text-white"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((wd, i) => (
            <span key={i} className="py-1 text-[11px] font-medium text-ink-dim">
              {wd}
            </span>
          ))}
          {cells.map((cell, i) => (
            <div key={i} className="aspect-square">
              {cell.day !== null && (
                <button
                  type="button"
                  disabled={cell.disabled}
                  onClick={() => onChange({ day: cell.day, time: null })}
                  className={cn(
                    "flex size-full items-center justify-center rounded-full text-[13px] transition-colors",
                    cell.disabled && "cursor-not-allowed text-ink-dim/40",
                    !cell.disabled && value.day === cell.day
                      ? "bg-brand-500 font-semibold text-white"
                      : !cell.disabled && "text-white hover:bg-white/10"
                  )}
                >
                  {cell.day}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* time slots */}
      <div>
        <p className="mb-3 flex items-center gap-1.5 text-sm text-ink-muted">
          <Clock className="size-3.5" aria-hidden />
          Available times{value.day ? ` · ${MONTHS[viewMonth]} ${value.day}` : ""}
        </p>
        <div className="grid grid-cols-2 gap-2">
          {scheduleStep.times.map((time) => {
            const disabled = value.day === null;
            const selected = value.time === time;
            return (
              <button
                key={time}
                type="button"
                disabled={disabled}
                onClick={() => onChange({ ...value, time })}
                className={cn(
                  "rounded-xl border py-2.5 text-sm transition-colors",
                  disabled && "cursor-not-allowed border-white/5 text-ink-dim/40",
                  !disabled && selected
                    ? "border-brand-500 bg-brand-500/15 font-medium text-white"
                    : !disabled && "border-white/10 text-white hover:border-white/25"
                )}
              >
                {time}
              </button>
            );
          })}
        </div>
        {value.day === null && (
          <p className="mt-3 text-xs text-ink-dim">Select a date to see times.</p>
        )}
      </div>
    </div>
  );
}

export type { ScheduleValue };
