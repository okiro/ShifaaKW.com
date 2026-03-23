"use client";

import { useI18n } from "@/lib/i18n";
import { PRODUCTS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const accentColors = {
  sky: {
    bg: "bg-sky/10",
    text: "text-sky",
    border: "border-sky/20",
  },
  gold: {
    bg: "bg-gold-tint",
    text: "text-gold",
    border: "border-[rgba(200,149,42,0.2)]",
  },
  navy: {
    bg: "bg-navy-tint",
    text: "text-navy",
    border: "border-[rgba(0,62,120,0.15)]",
  },
};

export function ProductsSection() {
  const { t } = useI18n();

  return (
    <section id="products" className="section-padding">
      <Container>
        <SectionHeading
          badge="Our Solutions"
          badgeAr="حلولنا"
          title="Three Products, One Mission"
          titleAr="ثلاثة منتجات، مهمة واحدة"
          description="Everything your healthcare facility needs to deliver exceptional patient experiences — from the waiting room to the exam room."
          descriptionAr="كل ما تحتاجه منشأتك الصحية لتقديم تجارب استثنائية للمرضى — من غرفة الانتظار إلى غرفة الفحص."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          {PRODUCTS.map((product) => {
            const colors = accentColors[product.accent];
            const isComingSoon = "comingSoon" in product && product.comingSoon;
            const isContactToEnroll = "contactToEnroll" in product && product.contactToEnroll;

            return (
              <StaggerItem key={product.id}>
                <GlassCard className={`h-full flex flex-col relative ${isComingSoon ? "opacity-75" : ""}`} hoverable={!isComingSoon}>
                  {/* Coming Soon overlay badge */}
                  {isComingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-[8px] text-fg-muted border-border-2">
                        {t("Coming Soon", "قريباً")}
                      </Badge>
                    </div>
                  )}

                  <div className={`p-6 flex-1 flex flex-col ${isComingSoon ? "select-none" : ""}`}>
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-[10px] ${colors.bg} border ${colors.border} flex items-center justify-center text-[22px] mb-5 ${isComingSoon ? "grayscale-[0.4]" : ""}`}
                    >
                      {product.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-semibold text-fg tracking-[-0.3px] mb-1">
                      {t(product.name.en, product.name.ar)}
                    </h3>

                    {/* Tagline */}
                    <p className={`text-[13px] font-medium ${isComingSoon ? "text-fg-muted" : colors.text} mb-3`}>
                      {t(product.tagline.en, product.tagline.ar)}
                    </p>

                    {/* Description */}
                    <p className="text-[14px] text-fg-muted leading-relaxed mb-5">
                      {t(product.description.en, product.description.ar)}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className={`flex items-start gap-2.5 text-[13px] ${isComingSoon ? "text-fg-muted" : "text-fg-2"}`}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={`shrink-0 mt-0.5 ${isComingSoon ? "text-fg-faint" : colors.text}`}
                          >
                            <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.1" />
                            <path
                              d="M5.5 8L7 9.5L10.5 6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {t(feature.en, feature.ar)}
                        </li>
                      ))}
                    </ul>

                    {/* CTA area */}
                    {isComingSoon ? (
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-fg-faint">
                        {t("Stay tuned", "ترقبونا")}
                      </span>
                    ) : isContactToEnroll ? (
                      <Button variant="navy" size="sm" href="#contact" className="self-start">
                        {t("Contact Us to Enroll", "تواصل معنا للتسجيل")}
                      </Button>
                    ) : (
                      <a
                        href="#"
                        className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${colors.text} hover:opacity-80 transition-opacity no-underline`}
                      >
                        {t("Learn more", "اعرف المزيد")}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
