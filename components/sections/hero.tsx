import { Sparkles, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button-variants";
import { Reveal } from "@/components/ui/reveal";
import { DemoCta } from "@/components/demo/demo-cta";
import { DashboardMock } from "./dashboard-mock";
import { hero } from "@/content/site";

/** Hero: badge, gradient headline, subtitle, CTAs, feature checks, product mock. */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
      {/* ambient glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-[360px] w-[360px] rounded-full bg-accent-cyan/10 blur-[120px]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/[0.12] px-3.5 py-1.5 text-eyebrow font-semibold uppercase text-brand-400">
            <Sparkles className="size-3" aria-hidden />
            {hero.badge}
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-display">
            {hero.titleLead}
            <span className="text-gradient">{hero.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-balance text-[15px] leading-relaxed text-ink-muted md:text-base">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <DemoCta size="lg" withArrow>
              {hero.primaryCta}
            </DemoCta>
            <a href="#ai" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              {hero.secondaryCta}
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {hero.checks.map((check) => (
              <li key={check} className="flex items-center gap-2 text-[13px] text-ink-muted">
                <span className="flex size-4 items-center justify-center rounded-full bg-brand-500/20 text-brand-400">
                  <Check className="size-3" strokeWidth={3} aria-hidden />
                </span>
                {check}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.25} className="mt-14 w-full max-w-5xl">
          <DashboardMock />
        </Reveal>
      </Container>
    </section>
  );
}
