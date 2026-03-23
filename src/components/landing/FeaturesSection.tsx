"use client";

import { useI18n } from "@/lib/i18n";
import { FEATURES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

export function FeaturesSection() {
  const { t } = useI18n();

  return (
    <section id="features" className="section-padding">
      <Container>
        <SectionHeading
          badge="Why Shifaa"
          badgeAr="لماذا شفاء"
          title="Built for Healthcare, Designed for People"
          titleAr="مصمم للرعاية الصحية، مبني للناس"
          description="Every feature is crafted to simplify workflows, reduce friction, and improve outcomes for clinics across Kuwait."
          descriptionAr="كل ميزة مصممة لتبسيط سير العمل وتقليل الاحتكاك وتحسين النتائج للعيادات في الكويت."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 h-full">
                <div className="w-10 h-10 rounded-[8px] bg-surface-2/80 border border-border flex items-center justify-center text-[18px] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-fg tracking-[-0.2px] mb-2">
                  {t(feature.title.en, feature.title.ar)}
                </h3>
                <p className="text-[13.5px] text-fg-muted leading-relaxed">
                  {t(feature.description.en, feature.description.ar)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
