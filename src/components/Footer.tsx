import { useI18n } from "@/i18n/I18nProvider";
import emigliLogo from "@/assets/emigli-logo.png";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <img src={emigliLogo} alt="EMIgli" className="h-10 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/60 mt-1">
              {t.footer.tagline}
            </p>
          </div>
          <div className="flex gap-8 text-sm text-primary-foreground/60">
            <a href="#products" className="hover:text-primary-foreground transition-colors">{t.nav.products}</a>
            <a href="#capabilities" className="hover:text-primary-foreground transition-colors">{t.nav.capabilities}</a>
            <a href="#testimonials" className="hover:text-primary-foreground transition-colors">{t.nav.testimonials}</a>
            <a href="#contact" className="hover:text-primary-foreground transition-colors">{t.nav.contact}</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} EMIGLI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
