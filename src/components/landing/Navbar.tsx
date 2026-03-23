"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Navbar() {
  const { locale, toggleLocale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-[rgba(255,255,255,0.82)] backdrop-blur-[24px] [backdrop-filter:blur(24px)_saturate(1.5)] border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline shrink-0">
          <div className="w-8 h-8 rounded-lg bg-sky flex items-center justify-center text-white font-bold text-sm">
            ش
          </div>
          <span className="text-[15px] font-bold text-fg tracking-[-0.2px]">
            Shifaa
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] text-fg-muted px-3 py-1.5 rounded-[6px] transition-all duration-150 hover:text-fg hover:bg-[rgba(10,37,64,0.05)] no-underline"
            >
              {t(link.en, link.ar)}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="h-8 px-3 text-[12px] font-semibold text-fg-muted bg-white/60 border border-border rounded-[6px] backdrop-blur-[8px] hover:bg-white/90 hover:text-fg transition-all cursor-pointer"
          >
            {locale === "en" ? "عربي" : "EN"}
          </button>
          <Button variant="primary" size="sm" href="#contact">
            {t("Get Started", "ابدأ الآن")}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-[6px] hover:bg-[rgba(10,37,64,0.05)] transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(255,255,255,0.95)] backdrop-blur-[24px] border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[14px] text-fg-muted py-2.5 px-3 rounded-[8px] hover:bg-[rgba(10,37,64,0.05)] hover:text-fg transition-colors no-underline"
              >
                {t(link.en, link.ar)}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
              <button
                onClick={toggleLocale}
                className="h-9 px-4 text-[13px] font-semibold text-fg-muted bg-white/60 border border-border rounded-[6px] hover:bg-white/90 transition-all cursor-pointer"
              >
                {locale === "en" ? "عربي" : "EN"}
              </button>
              <Button variant="primary" size="md" href="#contact" className="flex-1">
                {t("Get Started", "ابدأ الآن")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
