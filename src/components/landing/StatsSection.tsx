"use client";

import { useI18n } from "@/lib/i18n";
import { STATS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

export function StatsSection() {
  const { t } = useI18n();

  return (
    <section className="bg-navy py-20 md:py-24 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,136,204,0.15),transparent)]" />

      <Container className="relative">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <div className="text-[40px] md:text-[48px] font-extrabold text-white tracking-[-1px] leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-[14px] text-white/60 font-medium">
                  {t(stat.label.en, stat.label.ar)}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
