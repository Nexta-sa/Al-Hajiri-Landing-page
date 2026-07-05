import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { LogoStrip } from "@/components/sections/logo-strip";
import { Challenges } from "@/components/sections/challenges";
import { AICapabilities } from "@/components/sections/ai-capabilities";
import { PromoBanner } from "@/components/sections/promo-banner";
import { Newsletter } from "@/components/sections/newsletter";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Challenges />
        <AICapabilities />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
