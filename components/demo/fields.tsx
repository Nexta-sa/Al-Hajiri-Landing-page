"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

/** Labeled text field used across wizard steps. */
export function Field({
  label,
  required,
  id,
  ...props
}: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-white">
        {label}
        {required && <span className="ml-0.5 text-brand-400">*</span>}
      </label>
      <Input id={id} {...props} />
    </div>
  );
}

/** Single-select pill group (e.g. warehouse count, current system). */
export function OptionGroup({
  label,
  required,
  options,
  value,
  onChange,
  columns = 4,
}: {
  label: string;
  required?: boolean;
  options: readonly string[];
  value: string | null;
  onChange: (value: string) => void;
  columns?: number;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 text-sm font-medium text-white">
        {label}
        {required && <span className="ml-0.5 text-brand-400">*</span>}
      </legend>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={selected}
              className={cn(
                "rounded-xl border px-3 py-2.5 text-sm transition-colors",
                selected
                  ? "border-brand-500 bg-brand-500/15 text-white"
                  : "border-white/10 bg-white/[0.03] text-ink-muted hover:border-white/20 hover:text-white"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

/** Multi-select checkbox grid (e.g. primary operational challenges). */
export function CheckboxGroup({
  label,
  hint,
  options,
  values,
  onToggle,
}: {
  label: string;
  hint?: string;
  options: readonly string[];
  values: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <div className="mb-1 flex items-center justify-between">
        <legend className="text-sm font-medium text-white">{label}</legend>
        {hint && <span className="text-xs text-ink-dim">{hint}</span>}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const checked = values.includes(option);
          return (
            <label
              key={option}
              className={cn(
                "flex cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2.5 text-sm transition-colors",
                checked
                  ? "border-brand-500/60 bg-brand-500/10 text-white"
                  : "border-white/10 bg-white/[0.03] text-ink-muted hover:border-white/20"
              )}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(option)}
                className="size-4 accent-brand-500"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
