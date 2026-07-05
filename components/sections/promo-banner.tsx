import { BarChart3, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { DemoCta } from "@/components/demo/demo-cta";
import { promo } from "@/content/site";

/** Promotional savings banner with decorative growth chart. */
export function PromoBanner() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-brand-500/20 bg-gradient-to-br from-brand-600/25 via-brand-600/10 to-surface-card p-8 md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]"
            />
            <div className="relative grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
              <div className="flex flex-col items-start gap-5">
                <span className="text-eyebrow font-semibold uppercase text-brand-400">
                  {promo.eyebrow}
                </span>
                <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-h2">
                  {promo.titleLead}
                  <span className="text-brand-gradient">{promo.titleAccent}</span>
                </h2>
                <p className="max-w-md text-[15px] leading-relaxed text-ink-muted">
                  {promo.subtitle}
                </p>
                <DemoCta size="lg" withArrow className="mt-2">
                  {promo.cta}
                </DemoCta>
              </div>

              {/* decorative chart */}
              <div className="relative mx-auto flex aspect-square w-52 items-end justify-center rounded-3xl border border-white/10 bg-surface/60 p-6 md:w-full md:max-w-[240px]">
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand-500/20 px-2 py-1 text-xs font-medium text-brand-400">
                  <ArrowUpRight className="size-3" aria-hidden /> Growth
                </span>
                <div className="flex h-full w-full items-end justify-center gap-2">
                  {[40, 62, 55, 78, 90].map((h, i) => (
                    <div
                      key={i}
                      className="w-4 rounded-t-md bg-gradient-to-t from-brand-600/50 to-brand-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <BarChart3 className="absolute bottom-4 left-4 size-4 text-brand-400/60" aria-hidden />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
