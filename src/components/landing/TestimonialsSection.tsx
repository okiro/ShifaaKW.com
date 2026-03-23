"use client";

import { useI18n } from "@/lib/i18n";
import { TESTIMONIALS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimateIn";

const avatarColors = {
  sky: "bg-sky",
  gold: "bg-gold",
  navy: "bg-navy",
};

export function TestimonialsSection() {
  const { t } = useI18n();

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          badge="Trusted by Healthcare Providers"
          badgeAr="موثوق من مقدمي الرعاية الصحية"
          title="What Our Partners Say"
          titleAr="ماذا يقول شركاؤنا"
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="glass-card p-6 h-full flex flex-col">
                {/* Quote */}
                <div className="flex-1 mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-sky/30 mb-3"
                  >
                    <path
                      fill="currentColor"
                      d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                    />
                  </svg>
                  <p className="text-[14px] text-fg-2 leading-relaxed">
                    {t(testimonial.quote.en, testimonial.quote.ar)}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/50">
                  <div
                    className={`w-10 h-10 rounded-full ${avatarColors[testimonial.color]} flex items-center justify-center text-white text-[13px] font-semibold shrink-0`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-fg">
                      {t(testimonial.name.en, testimonial.name.ar)}
                    </div>
                    <div className="text-[12px] text-fg-muted">
                      {t(testimonial.title.en, testimonial.title.ar)} · {t(testimonial.clinic.en, testimonial.clinic.ar)}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
