"use client";

import { useI18n } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function CTASection() {
  const { t } = useI18n();

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #003E78 0%, #002A52 100%)",
      }}
    >
      {/* Decorative gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,136,204,0.12),transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[radial-gradient(ellipse,rgba(200,149,42,0.08),transparent_70%)]" />
      </div>

      <Container className="relative text-center">
        <AnimateIn>
          <h2 className="text-[32px] md:text-[42px] font-bold text-white tracking-[-0.8px] leading-[1.1] mb-4">
            {t(
              "Ready to Transform Your Practice?",
              "مستعد لتحويل ممارستك؟"
            )}
          </h2>
          <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
            {t(
              "Join hundreds of healthcare providers across Kuwait and the Gulf region who trust Shifaa.",
              "انضم إلى مئات مقدمي الرعاية الصحية في الكويت ومنطقة الخليج الذين يثقون بشفاء."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="gold" size="xl" href="#">
              {t("Start Free Trial", "ابدأ التجربة المجانية")}
            </Button>
            <Button
              size="xl"
              href="#"
              className="bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50"
            >
              {t("Schedule a Demo", "احجز عرضاً توضيحياً")}
            </Button>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
