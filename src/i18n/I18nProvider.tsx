import { createContext, useContext, useState, useCallback, useMemo, type Context, type ReactNode } from "react";
import { translations, Locale, Translations } from "./translations";

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

// Store the context on globalThis so hot-module-reload duplicates share one instance.
const g = globalThis as unknown as { __EMIGLI_I18N_CTX__?: Context<I18nContextType | undefined> };
const I18nContext =
  g.__EMIGLI_I18N_CTX__ ?? createContext<I18nContextType | undefined>(undefined);
I18nContext.displayName = "I18nContext";
g.__EMIGLI_I18N_CTX__ = I18nContext;

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    return saved === "en" ? "en" : "uk";
  });

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  }, []);

  const value = useMemo(
    () => ({ locale, t: translations[locale], setLocale }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (ctx) return ctx;
  // Fallback keeps the UI rendering (e.g. during HMR) instead of blanking the screen.
  const saved = typeof localStorage !== "undefined" ? localStorage.getItem("locale") : null;
  const locale: Locale = saved === "en" ? "en" : "uk";
  return {
    locale,
    t: translations[locale],
    setLocale: (l: Locale) => localStorage.setItem("locale", l),
  };
};
