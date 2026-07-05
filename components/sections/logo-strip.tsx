import { Container } from "@/components/ui/container";
import { logoStrip } from "@/content/site";

/** Social-proof logo strip beneath the hero. */
export function LogoStrip() {
  return (
    <section aria-label="Trusted by" className="border-y border-white/[0.06] bg-surface/40 py-12">
      <Container className="flex flex-col items-center gap-8">
        <p className="text-xs uppercase tracking-[0.14em] text-ink-dim">{logoStrip.heading}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {logoStrip.logos.map((logo) => (
            <li
              key={logo}
              className="text-lg font-semibold text-ink-faint grayscale transition-colors duration-300 hover:text-white"
            >
              {logo}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
