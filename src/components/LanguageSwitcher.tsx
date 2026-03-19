import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/translations";

const flags: Record<Locale, string> = { en: "🇬🇧", uk: "🇺🇦" };

const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n();
  const next: Locale = locale === "en" ? "uk" : "en";

  return (
    <button
      onClick={() => setLocale(next)}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-secondary"
      aria-label={`Switch to ${next === "en" ? "English" : "Українська"}`}
    >
      <span className="text-base">{flags[locale]}</span>
      <span className="hidden sm:inline">{locale === "en" ? "EN" : "UA"}</span>
    </button>
  );
};

export default LanguageSwitcher;
