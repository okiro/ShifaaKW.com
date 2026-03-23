"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex items-center pt-14">
      <Container className="py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              <Badge variant="sky" dot className="mb-6">
                {t("Healthcare Technology", "تكنولوجيا الرعاية الصحية")}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="text-[40px] sm:text-[48px] lg:text-[64px] font-extrabold tracking-[-1.5px] text-fg leading-[1.05] mb-6"
            >
              {t(
                "Transforming Healthcare in Kuwait",
                "نُحَوِّل الرعاية الصحية في الكويت"
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              className="text-[18px] text-fg-muted leading-relaxed mb-8 max-w-lg"
            >
              {t(
                "One platform to manage appointments, queues, and clinic operations — empowering healthcare providers with modern technology.",
                "منصة واحدة لإدارة المواعيد والطوابير وعمليات العيادة — نمكّن مقدمي الرعاية الصحية بالتكنولوجيا الحديثة."
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              className="flex flex-wrap gap-3"
            >
              <Button variant="primary" size="lg" href="#contact">
                {t("Get Started Free", "ابدأ مجاناً")}
              </Button>
              <Button variant="secondary" size="lg" href="#products">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                {t("Watch Demo", "شاهد العرض")}
              </Button>
            </motion.div>
          </div>

          {/* Right — Abstract product showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main glass card — dashboard mockup */}
              <div className="glass-card p-6 rounded-[18px]">
                {/* Mini topbar */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <div className="flex-1 mx-6 h-5 bg-surface-2 rounded-full" />
                </div>

                {/* Mock dashboard content */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: t("Patients Today", "مرضى اليوم"), value: "127", color: "bg-sky" },
                    { label: t("Avg Wait", "متوسط الانتظار"), value: "8 min", color: "bg-gold" },
                    { label: t("Satisfaction", "الرضا"), value: "96%", color: "bg-success" },
                  ].map((stat) => (
                    <div key={stat.value} className="bg-surface-2/60 rounded-[10px] p-3.5">
                      <div className={`w-6 h-1 ${stat.color} rounded-full mb-2 opacity-60`} />
                      <div className="text-[20px] font-bold text-fg tracking-[-0.5px] leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-fg-muted">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mock chart area */}
                <div className="bg-surface-2/40 rounded-[10px] p-4 h-[140px] flex items-end gap-1.5">
                  {[40, 65, 45, 80, 60, 90, 70, 85, 55, 75, 95, 68].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-sky/20 rounded-t-[3px] transition-all relative"
                        style={{ height: `${h}%` }}
                      >
                        <div
                          className="absolute bottom-0 inset-x-0 bg-sky rounded-t-[3px]"
                          style={{ height: `${h * 0.7}%` }}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, y: 10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8, ease }}
                className="absolute -bottom-4 -left-6 glass-card p-3.5 rounded-[12px] flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center text-[16px]">
                  ✓
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-fg">
                    {t("New Appointment", "موعد جديد")}
                  </div>
                  <div className="text-[11px] text-fg-muted">
                    {t("Dr. Ahmad — 2:30 PM", "د. أحمد — 2:30 م")}
                  </div>
                </div>
              </motion.div>

              {/* Floating queue badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1, ease }}
                className="absolute -top-3 -right-3 glass-card px-4 py-2.5 rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <div className="text-[11px] text-fg-muted mb-0.5">
                  {t("Queue Position", "موقع الدور")}
                </div>
                <div className="text-[22px] font-bold text-sky tracking-[-0.5px] leading-none">
                  #3
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
