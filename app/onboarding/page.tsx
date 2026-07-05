import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  UploadCloud,
  FileText,
  X,
  Mail,
  Phone,
  MessageSquare,
  Download,
  LifeBuoy,
  Bell,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusPill } from "@/components/onboarding/status-pill";
import { StageTracker } from "@/components/onboarding/stage-tracker";
import { onboarding } from "@/content/onboarding";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Onboarding · NEXTAIQ",
  description: "Track your NEXTAIQ implementation progress across every stage.",
};

const notifDot: Record<string, string> = {
  success: "bg-success",
  info: "bg-brand-500",
  warning: "bg-traffic-amber",
};

export default function OnboardingPage() {
  return (
    <div className="min-h-screen">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow">
              <Boxes className="size-4 text-white" aria-hidden />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">{brand.name}</span>
            <span className="text-sm text-ink-dim">/ Onboarding</span>
          </div>
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-ink-muted hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden /> Back to site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6">
        {/* progress header card */}
        <section className="rounded-3xl border border-white/10 bg-surface-card/70 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  Onboarding tracker — {onboarding.ref}
                </h1>
                <Badge tone="brand">{onboarding.status}</Badge>
              </div>
              <p className="mt-1.5 text-sm text-ink-muted">
                {onboarding.company} · {onboarding.meta}
              </p>
            </div>
            <div className="min-w-[200px]">
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-brand-gradient">{onboarding.percent}%</span>
                <span className="pb-1 text-xs text-ink-muted">complete</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-brand-gradient"
                  style={{ width: `${onboarding.percent}%` }}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <StageTracker />
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          {/* left column — stages */}
          <div className="flex flex-col gap-6">
            {/* stage 1 */}
            <StageCard title={onboarding.stage1.title} state={onboarding.stage1.state}>
              <ul className="divide-y divide-white/[0.06]">
                {onboarding.stage1.rows.map((row) => (
                  <li key={row.label} className="flex items-center justify-between py-3">
                    <span className="text-sm text-white">{row.label}</span>
                    <StatusPill tone={row.tone}>{row.status}</StatusPill>
                  </li>
                ))}
              </ul>
            </StageCard>

            {/* stage 2 */}
            <StageCard title={onboarding.stage2.title} state={onboarding.stage2.state}>
              <div className="grid gap-3 sm:grid-cols-3">
                {onboarding.stage2.sites.map((site) => (
                  <div
                    key={site.name}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <p className="text-sm font-medium text-white">{site.name}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <StatusPill tone={site.tone}>{site.status}</StatusPill>
                      {site.date && <span className="text-xs text-ink-dim">{site.date}</span>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <p className="text-eyebrow font-semibold uppercase text-ink-dim">
                  {onboarding.stage2.checklistTitle}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {onboarding.stage2.checklist.map((item) => (
                    <li key={item.label} className="flex items-center gap-2.5 text-sm">
                      <span
                        className={cn(
                          "flex size-4 items-center justify-center rounded-full border text-[10px]",
                          item.done
                            ? "border-success/40 bg-success/15 text-success"
                            : "border-white/15 text-transparent"
                        )}
                      >
                        ✓
                      </span>
                      <span className={item.done ? "text-ink-muted line-through" : "text-white"}>
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StageCard>

            {/* stage 3 */}
            <StageCard title={onboarding.stage3.title} state={onboarding.stage3.state}>
              <ul className="divide-y divide-white/[0.06]">
                {onboarding.stage3.rows.map((row) => (
                  <li key={row.label} className="flex items-center justify-between py-3">
                    <span className="text-sm text-white">{row.label}</span>
                    <span className="text-xs italic text-ink-dim">{row.status}</span>
                  </li>
                ))}
              </ul>
            </StageCard>
          </div>

          {/* right column — sidebar */}
          <aside className="flex flex-col gap-6">
            {/* required from you */}
            <SidebarCard>
              <SidebarTitle>{onboarding.required.title}</SidebarTitle>
              <ul className="mt-3 flex flex-col gap-2">
                {onboarding.required.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-traffic-amber/20 bg-traffic-amber/[0.06] px-3 py-2.5 text-sm text-white"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-traffic-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </SidebarCard>

            {/* upload center */}
            <SidebarCard>
              <SidebarTitle>
                <UploadCloud className="size-4 text-brand-400" aria-hidden />
                {onboarding.upload.title}
              </SidebarTitle>
              <div className="mt-3 flex flex-col items-center gap-1 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-6 text-center">
                <UploadCloud className="size-6 text-brand-400" aria-hidden />
                <p className="text-sm font-medium text-white">{onboarding.upload.prompt}</p>
                <p className="text-xs text-ink-dim">{onboarding.upload.hint}</p>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {onboarding.upload.files.map((file) => (
                  <li
                    key={file}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2"
                  >
                    <span className="flex items-center gap-2 text-sm text-ink-muted">
                      <FileText className="size-4 text-brand-400" aria-hidden />
                      {file}
                    </span>
                    <X className="size-3.5 text-ink-dim" aria-hidden />
                  </li>
                ))}
              </ul>
            </SidebarCard>

            {/* success manager */}
            <SidebarCard>
              <SidebarTitle>{onboarding.manager.title}</SidebarTitle>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                  SK
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{onboarding.manager.name}</p>
                  <p className="text-xs text-ink-muted">{onboarding.manager.role}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-2 text-sm text-ink-muted">
                <a
                  href={`mailto:${onboarding.manager.email}`}
                  className="focus-ring inline-flex items-center gap-2 rounded-sm hover:text-white"
                >
                  <Mail className="size-4 text-brand-400" aria-hidden /> {onboarding.manager.email}
                </a>
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4 text-brand-400" aria-hidden /> {onboarding.manager.phone}
                </span>
              </div>
              <Button className="mt-4 w-full">
                <MessageSquare className="size-4" aria-hidden /> {onboarding.manager.cta}
              </Button>
            </SidebarCard>

            {/* notifications */}
            <SidebarCard>
              <SidebarTitle>
                <Bell className="size-4 text-brand-400" aria-hidden />
                {onboarding.notifications.title}
              </SidebarTitle>
              <ul className="mt-3 flex flex-col gap-3">
                {onboarding.notifications.items.map((n) => (
                  <li key={n.text} className="flex gap-2.5">
                    <span className={cn("mt-1.5 size-1.5 shrink-0 rounded-full", notifDot[n.tone])} />
                    <div>
                      <p className="text-sm text-white">{n.text}</p>
                      <p className="text-xs text-ink-dim">{n.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SidebarCard>
          </aside>
        </div>

        {/* bottom action bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-surface-card/70 px-5 py-4 sm:flex-row">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary" size="sm">
              <MessageSquare className="size-4" aria-hidden /> Message team
            </Button>
            <Button variant="secondary" size="sm">
              <UploadCloud className="size-4" aria-hidden /> Upload required files
            </Button>
            <Button variant="secondary" size="sm">
              <Download className="size-4" aria-hidden /> Download checklist
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <LifeBuoy className="size-4" aria-hidden /> Contact support
            <ChevronRight className="size-4" aria-hidden />
          </Button>
        </div>
      </main>
    </div>
  );
}

/* ---------- local layout helpers ---------- */

function StageCard({
  title,
  state,
  children,
}: {
  title: string;
  state: string;
  children: React.ReactNode;
}) {
  const tone = state === "Completed" ? "success" : state === "In progress" ? "brand" : "neutral";
  return (
    <section className="rounded-3xl border border-white/10 bg-surface-card/60 p-5 md:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">{title}</h2>
        <Badge tone={tone}>{state}</Badge>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SidebarCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-surface-card/60 p-5">{children}</section>
  );
}

function SidebarTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="flex items-center gap-2 text-sm font-semibold text-white">{children}</h2>;
}
