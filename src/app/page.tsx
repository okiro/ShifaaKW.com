"use client";

import { useI18n, I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

function LandingPage() {
  const { dir, locale } = useI18n();

  return (
    <div
      dir={dir}
      className={locale === "ar" ? "font-[var(--font-almarai)]" : ""}
      style={locale === "ar" ? { fontFamily: "var(--font-almarai), 'Almarai', sans-serif" } : undefined}
    >
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <LandingPage />
    </I18nProvider>
  );
}
