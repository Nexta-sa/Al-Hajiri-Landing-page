import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { IconTile } from "@/components/ui/icon-tile";
import { challenges } from "@/content/site";

/** "Are You Facing These Challenges?" — 6 pain-point cards. */
export function Challenges() {
  return (
    <section id="challenges" className="section">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow={challenges.eyebrow}
          titleLead={challenges.titleLead}
          titleAccent={challenges.titleAccent}
          subtitle={challenges.subtitle}
        />

        <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06} className="h-full">
              <li className="glass-card glass-card-hover flex h-full items-start gap-4 p-5">
                <IconTile name={item.icon} />
                <p className="pt-1.5 text-[15px] font-medium leading-snug text-white">
                  {item.title}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
