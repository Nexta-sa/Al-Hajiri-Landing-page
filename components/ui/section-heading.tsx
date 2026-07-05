import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  titleLead: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

/** Reusable section header: eyebrow label, gradient-accented title, subtitle. */
export function SectionHeading({
  eyebrow,
  titleLead,
  titleAccent,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="text-eyebrow font-semibold uppercase text-brand-500">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-h2">
          {titleLead}
          {titleAccent && <span className="text-brand-gradient">{titleAccent}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-balance text-[15px] leading-relaxed text-ink-muted",
              align === "left" && "mx-0"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
