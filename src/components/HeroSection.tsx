import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import heroImage from "@/assets/hero-rf-cage.jpg";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="RF shielding cage for MRI" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {t.hero.badge && (
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium tracking-widest uppercase text-accent">
                {t.hero.badge}
              </span>
            </div>
          )}

          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            {t.hero.titleStart}{" "}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-xl leading-relaxed text-justify">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="#products">
                {t.hero.viewProducts} <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-muted-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="#contact">{t.hero.requestQuote}</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
