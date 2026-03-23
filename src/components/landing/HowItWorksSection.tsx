"use client";

import { useI18n } from "@/lib/i18n";
import { STEPS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function HowItWorksSection() {
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="section-padding">
      <Container>
        <SectionHeading
          badge="Getting Started"
          badgeAr="البداية"
          title="Up and Running in Four Steps"
          titleAr="جاهز للعمل في أربع خطوات"
          description="From sign-up to going live — we've made the onboarding process as smooth as possible."
          descriptionAr="من التسجيل إلى الانطلاق — جعلنا عملية الإعداد سلسة قدر الإمكان."
        />

        <AnimateIn>
          {/* Desktop — horizontal stepper */}
          <div className="hidden md:flex items-start">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex items-start flex-1">
                <div className="flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="w-10 h-10 rounded-full bg-sky text-white border-2 border-sky flex items-center justify-center text-[14px] font-bold relative z-10 shadow-[0_0_0_4px_rgba(0,136,204,0.12)]">
                    {step.number}
                  </div>
                  {/* Label */}
                  <h4 className="text-[14px] font-semibold text-fg mt-4 mb-1.5">
                    {t(step.title.en, step.title.ar)}
                  </h4>
                  <p className="text-[12.5px] text-fg-muted leading-relaxed max-w-[180px]">
                    {t(step.description.en, step.description.ar)}
                  </p>
                </div>
                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="flex-1 h-0.5 bg-sky/20 mt-5 mx-2 relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-sky rounded-full"
                      style={{ width: "100%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile — vertical stepper */}
          <div className="md:hidden flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <div key={step.number} className="flex gap-4">
                {/* Left column: dot + line */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-sky text-white border-2 border-sky flex items-center justify-center text-[12px] font-bold shrink-0 shadow-[0_0_0_4px_rgba(0,136,204,0.12)]">
                    {step.number}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[24px] bg-sky/30 my-1" />
                  )}
                </div>
                {/* Right column: content */}
                <div className="pb-8">
                  <h4 className="text-[14px] font-semibold text-fg mb-1">
                    {t(step.title.en, step.title.ar)}
                  </h4>
                  <p className="text-[13px] text-fg-muted leading-relaxed">
                    {t(step.description.en, step.description.ar)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
