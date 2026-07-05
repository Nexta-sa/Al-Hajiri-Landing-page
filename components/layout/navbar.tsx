"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "@/content/site";
import { Logo } from "@/components/ui/logo";
import { DemoCta } from "@/components/demo/demo-cta";

/** Sticky glass navigation bar with responsive mobile menu. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        aria-label="Primary"
        className={cn(
          "flex w-full max-w-[1240px] items-center justify-between rounded-full border border-white/10 px-4 py-2.5 shadow-nav backdrop-blur-xl transition-colors duration-300 sm:px-6",
          scrolled ? "bg-surface/80" : "bg-white/[0.04]"
        )}
      >
        <a href="#home" className="focus-ring rounded-md" aria-label={`${"NEXTAIQ"} home`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="focus-ring rounded-md text-sm text-ink-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <DemoCta size="sm" className="hidden sm:inline-flex">
            {nav.cta.label}
          </DemoCta>
          <button
            type="button"
            className="focus-ring inline-flex size-9 items-center justify-center rounded-full text-ink-muted hover:text-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="absolute inset-x-4 top-[72px] rounded-3xl border border-white/10 bg-surface/95 p-4 shadow-nav backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-ink-muted hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <DemoCta size="md" className="mt-2 w-full" onClick={() => setMobileOpen(false)}>
            {nav.cta.label}
          </DemoCta>
        </div>
      )}
    </header>
  );
}
