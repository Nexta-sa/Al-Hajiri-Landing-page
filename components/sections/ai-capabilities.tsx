import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { IconTile } from "@/components/ui/icon-tile";
import { aiCapabilities } from "@/content/site";

/** "AI Powered Operational Intelligence" — 6 capability cards. */
export function AICapabilities() {
  return (
    <section id="ai" className="section">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-600/[0.07] blur-[130px]"
      />
      <Container className="relative flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow={aiCapabilities.eyebrow}
          titleLead={aiCapabilities.titleLead}
          titleAccent={aiCapabilities.titleAccent}
          subtitle={aiCapabilities.subtitle}
        />

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06} className="h-full">
              <li className="glass-card glass-card-hover group flex h-full flex-col gap-4 p-6">
                <IconTile name={item.icon} variant="gradient" />
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
