import { motion } from "framer-motion";
import { Cpu, Ruler, ShieldCheck, Wrench, Zap, Award } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [ShieldCheck, Ruler, Cpu, Wrench, Zap, Award];

const CapabilitiesSection = () => {
  const { t } = useI18n();

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-accent">{t.capabilities.sectionLabel}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            {t.capabilities.title}
          </h2>
          <p className="text-primary-foreground/70 leading-relaxed">{t.capabilities.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.capabilities.items.map((c, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-4 p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10"
              >
                <Icon className="w-8 h-8 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{c.title}</h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
