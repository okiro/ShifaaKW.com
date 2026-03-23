"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Locale = "en" | "ar";

interface I18nContextType {
  locale: Locale;
  dir: "ltr" | "rtl";
  toggleLocale: () => void;
  t: (en: string, ar: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  dir: "ltr",
  toggleLocale: () => {},
  t: (en) => en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const dir = locale === "ar" ? "rtl" : "ltr";

  const t = useCallback(
    (en: string, ar: string) => (locale === "en" ? en : ar),
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, dir, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
