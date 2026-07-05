"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsletter } from "@/content/site";

/** Newsletter signup with lightweight client-side validation. */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("done");
  }

  return (
    <section aria-label="Newsletter" className="pb-8">
      <Container>
        <div className="glass-card flex flex-col items-center gap-6 overflow-hidden rounded-4xl px-6 py-10 text-center md:px-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-white">{newsletter.title}</h2>
            <p className="text-sm text-ink-muted">{newsletter.subtitle}</p>
          </div>

          {status === "done" ? (
            <p className="inline-flex items-center gap-2 text-sm font-medium text-success">
              <Check className="size-4" aria-hidden />
              You&apos;re subscribed — check your inbox.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "newsletter-error" : undefined}
                />
                {status === "error" && (
                  <p id="newsletter-error" className="mt-1.5 text-left text-xs text-traffic-red">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <Button type="submit" size="md">
                {newsletter.cta}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
