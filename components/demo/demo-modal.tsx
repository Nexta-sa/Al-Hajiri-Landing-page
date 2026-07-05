"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Building2,
  ClipboardList,
  CalendarClock,
  CheckCircle2,
  CalendarPlus,
  ShieldCheck,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, OptionGroup, CheckboxGroup } from "./fields";
import { ScheduleCalendar, type ScheduleValue } from "./schedule-calendar";
import { NotificationCarousel } from "./notification-carousel";
import { useDemo } from "./demo-context";
import {
  companyStep,
  operationalStep,
  scheduleStep,
  confirmationStep,
  resultsStep,
} from "@/content/demo";
import { resultsMetricIcon } from "./metric-icons";

interface FormState {
  company: string;
  contact: string;
  email: string;
  phone: string;
  warehouses: string | null;
  challenges: string[];
  system: string | null;
  schedule: ScheduleValue;
}

const initialForm: FormState = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  warehouses: null,
  challenges: [],
  system: null,
  schedule: { day: null, time: null },
};

// step: 0 company, 1 operational, 2 schedule, 3 confirmation, 4 results
const TOTAL_FORM_STEPS = 3;

export function DemoModal() {
  const { isOpen, closeDemo } = useDemo();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [attempted, setAttempted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setStep(0);
    setForm(initialForm);
    setAttempted(false);
  }, []);

  const handleClose = useCallback(() => {
    closeDemo();
    // reset after the exit animation
    window.setTimeout(reset, 250);
  }, [closeDemo, reset]);

  // Escape to close + body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, handleClose]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const stepValid = ((): boolean => {
    switch (step) {
      case 0:
        return (
          form.company.trim() !== "" &&
          form.contact.trim() !== "" &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
          form.phone.trim() !== ""
        );
      case 1:
        return form.warehouses !== null && form.challenges.length > 0 && form.system !== null;
      case 2:
        return form.schedule.day !== null && form.schedule.time !== null;
      default:
        return true;
    }
  })();

  const goNext = () => {
    if (step < TOTAL_FORM_STEPS - 1) {
      if (!stepValid) {
        setAttempted(true);
        return;
      }
      setAttempted(false);
      setStep((s) => s + 1);
      return;
    }
    // from schedule -> confirmation, confirmation -> results
    if (step === 2) {
      if (!stepValid) {
        setAttempted(true);
        return;
      }
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const goBack = () => {
    setAttempted(false);
    setStep((s) => Math.max(0, s - 1));
  };

  const progress =
    step >= TOTAL_FORM_STEPS ? 100 : Math.round(((step + 1) / TOTAL_FORM_STEPS) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Book a demo"
        >
          {/* overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <div className="relative z-10 my-auto flex w-full max-w-[560px] flex-col gap-4 py-6">
            {/* floating notification (hidden on very small screens) */}
            <div className="hidden sm:block">
              <NotificationCarousel />
            </div>

            <motion.div
              ref={panelRef}
              tabIndex={-1}
              className="overflow-hidden rounded-3xl border border-white/10 bg-surface-card shadow-glow-lg outline-none"
              initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* progress bar */}
              <div className="h-1 w-full bg-white/5">
                <motion.div
                  className="h-full bg-brand-gradient"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* header */}
              <div className="flex items-start justify-between px-6 pt-5">
                <div>
                  <p className="text-eyebrow font-semibold uppercase text-brand-400">
                    {step >= 4
                      ? resultsStep.eyebrow
                      : step === 3
                        ? confirmationStep.eyebrow
                        : "Demo request"}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {step < TOTAL_FORM_STEPS
                      ? `Step ${step + 1} of ${TOTAL_FORM_STEPS} — ${
                          ["Company information", "Operational information", "Schedule a call"][step]
                        }`
                      : step === 3
                        ? confirmationStep.title
                        : resultsStep.title}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {step < TOTAL_FORM_STEPS && (
                    <span className="text-xs text-ink-dim">{progress}% complete</span>
                  )}
                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close"
                    className="focus-ring inline-flex size-8 items-center justify-center rounded-full border border-white/10 text-ink-muted hover:text-white"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              {/* body */}
              <div className="scroll-slim max-h-[62vh] overflow-y-auto px-6 py-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -16 }}
                    transition={{ duration: 0.22 }}
                  >
                    {step === 0 && (
                      <StepShell icon={Building2} title={companyStep.title} subtitle={companyStep.subtitle}>
                        <div className="flex flex-col gap-4">
                          {companyStep.fields.map((f) => (
                            <Field
                              key={f.name}
                              id={`demo-${f.name}`}
                              label={f.label}
                              required
                              type={"type" in f ? f.type : "text"}
                              placeholder={f.placeholder}
                              value={form[f.name as "company" | "contact" | "email" | "phone"]}
                              onChange={(e) =>
                                update(f.name as keyof FormState, e.target.value as never)
                              }
                            />
                          ))}
                        </div>
                      </StepShell>
                    )}

                    {step === 1 && (
                      <StepShell
                        icon={ClipboardList}
                        title={operationalStep.title}
                        subtitle={operationalStep.subtitle}
                      >
                        <div className="flex flex-col gap-5">
                          <OptionGroup
                            label={operationalStep.warehousesLabel}
                            required
                            options={operationalStep.warehouses}
                            value={form.warehouses}
                            onChange={(v) => update("warehouses", v)}
                          />
                          <CheckboxGroup
                            label={operationalStep.challengesLabel}
                            hint={operationalStep.challengesHint}
                            options={operationalStep.challenges}
                            values={form.challenges}
                            onToggle={(v) =>
                              update(
                                "challenges",
                                form.challenges.includes(v)
                                  ? form.challenges.filter((c) => c !== v)
                                  : [...form.challenges, v]
                              )
                            }
                          />
                          <OptionGroup
                            label={operationalStep.systemLabel}
                            required
                            columns={3}
                            options={operationalStep.systems}
                            value={form.system}
                            onChange={(v) => update("system", v)}
                          />
                        </div>
                      </StepShell>
                    )}

                    {step === 2 && (
                      <StepShell
                        icon={CalendarClock}
                        title={scheduleStep.title}
                        subtitle={scheduleStep.subtitle}
                      >
                        <ScheduleCalendar
                          value={form.schedule}
                          onChange={(v) => update("schedule", v)}
                        />
                      </StepShell>
                    )}

                    {step === 3 && <ConfirmationView schedule={form.schedule} />}
                    {step === 4 && <ResultsView />}
                  </motion.div>
                </AnimatePresence>

                {attempted && !stepValid && step < TOTAL_FORM_STEPS && (
                  <p className="mt-4 text-sm text-traffic-red">
                    Please complete the required fields to continue.
                  </p>
                )}
              </div>

              {/* footer */}
              <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-4">
                {step > 0 && step < 4 ? (
                  <Button variant="ghost" size="sm" onClick={goBack}>
                    <ArrowLeft className="size-4" /> Back
                  </Button>
                ) : (
                  <span />
                )}

                {step < 3 && (
                  <Button size="md" onClick={goNext}>
                    Continue <ArrowRight className="size-4" />
                  </Button>
                )}
                {step === 3 && (
                  <Button size="md" onClick={goNext}>
                    {confirmationStep.cta} <ArrowRight className="size-4" />
                  </Button>
                )}
                {step === 4 && (
                  <Button
                    size="md"
                    onClick={() => {
                      handleClose();
                      router.push("/onboarding");
                    }}
                  >
                    {resultsStep.cta} <ArrowRight className="size-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ---------- step sub-views ---------- */

function StepShell({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon: typeof Building2;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
          <Icon className="size-4" aria-hidden />
        </span>
        <div>
          <h2 className="text-base font-semibold text-white">{title}</h2>
          <p className="text-xs text-ink-muted">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function ConfirmationView({ schedule }: { schedule: ScheduleValue }) {
  return (
    <div className="flex flex-col items-center gap-5 py-2 text-center">
      <span className="flex size-14 items-center justify-center rounded-full border border-success/30 bg-success/10 text-success">
        <CheckCircle2 className="size-7" aria-hidden />
      </span>
      <div>
        <h2 className="text-xl font-bold text-white">{confirmationStep.title}</h2>
        <p className="mt-1 text-sm text-ink-muted">
          June {schedule.day ?? 17}, 2026 · {schedule.time ?? "09:00"}
        </p>
        <p className="text-xs text-ink-dim">{confirmationStep.body}</p>
      </div>

      <div className="grid w-full gap-2 sm:grid-cols-2">
        <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white">
          <CalendarPlus className="size-4 text-brand-400" aria-hidden />
          {confirmationStep.addToCalendar}
        </span>
        <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-ink-muted">
          <ShieldCheck className="size-4 text-success" aria-hidden />
          {confirmationStep.managerNote}
        </span>
      </div>

      <div className="w-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-left">
        <p className="text-eyebrow font-semibold uppercase text-ink-dim">
          {confirmationStep.checklistTitle}
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {confirmationStep.checklist.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-white">
              <Check className="size-4 text-success" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-ink-dim">{confirmationStep.disclaimer}</p>
    </div>
  );
}

function ResultsView() {
  return (
    <div className="flex flex-col items-center gap-5 py-2 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-brand-500/15 text-brand-400">
        <Sparkles className="size-6" aria-hidden />
      </span>
      <div>
        <h2 className="text-xl font-bold text-white">{resultsStep.title}</h2>
        <p className="mx-auto mt-1 max-w-sm text-sm text-ink-muted">{resultsStep.subtitle}</p>
      </div>

      <div className="grid w-full grid-cols-3 gap-3">
        {resultsStep.metrics.map((metric) => {
          const Icon = resultsMetricIcon(metric.icon);
          return (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <Icon className="mx-auto size-5 text-brand-400" aria-hidden />
              <p className="mt-2 text-xl font-bold text-brand-gradient">{metric.value}</p>
              <p className="mt-1 text-[11px] leading-tight text-ink-muted">{metric.label}</p>
            </div>
          );
        })}
      </div>

      <div className="w-full text-left">
        <p className="text-eyebrow font-semibold uppercase text-ink-dim">{resultsStep.focusTitle}</p>
        <ul className="mt-3 flex flex-col gap-2">
          {resultsStep.focus.map((f) => (
            <li
              key={f.title}
              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
              <div>
                <p className="text-sm font-medium text-white">{f.title}</p>
                <p className="text-xs text-ink-muted">{f.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
