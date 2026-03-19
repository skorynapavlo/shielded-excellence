import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const TestimonialsSection = () => {
  const { t } = useI18n();

  return (
    <section id="testimonials" className="py-24 md:py-32" style={{ background: "var(--section-gradient)" }}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-accent">{t.testimonials.sectionLabel}</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-card rounded-lg p-8 border border-border shadow-[var(--card-shadow)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{item.quote}"
              </blockquote>
              <div>
                <p className="font-display font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
