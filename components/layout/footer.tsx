import Link from "next/link";
import { Twitter, Linkedin, Github, Youtube, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { footer } from "@/content/site";

const socialIcons: Record<string, LucideIcon> = {
  Twitter,
  Linkedin,
  Github,
  Youtube,
};

/** Site footer: brand blurb, link columns, socials, and legal row. */
export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface/60">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              {footer.description}
            </p>
            <ul className="mt-2 flex items-center gap-2">
              {footer.socials.map((social) => {
                const Icon = socialIcons[social];
                return (
                  <li key={social}>
                    <a
                      href="#"
                      aria-label={social}
                      className="focus-ring inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-muted transition-colors hover:border-brand-500/40 hover:text-white"
                    >
                      {Icon && <Icon className="size-4" aria-hidden />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="focus-ring rounded-sm text-sm text-ink-muted transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-ink-dim">{footer.copyright}</p>
          <ul className="flex flex-wrap items-center gap-6">
            {footer.legal.map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="focus-ring rounded-sm text-sm text-ink-dim transition-colors hover:text-white"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
