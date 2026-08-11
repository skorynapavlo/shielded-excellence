import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/i18n/I18nProvider";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: t.contact.toastTitle, description: t.contact.toastDescription });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-accent">{t.contact.sectionLabel}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t.contact.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-lg border border-border shadow-[var(--card-shadow)] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.nameLabel}</label>
                  <Input placeholder={t.contact.namePlaceholder} required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.companyLabel}</label>
                  <Input placeholder={t.contact.companyPlaceholder} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.emailLabel}</label>
                <Input type="email" placeholder={t.contact.emailPlaceholder} required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.detailsLabel}</label>
                <Textarea placeholder={t.contact.detailsPlaceholder} rows={5} required />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? t.contact.sending : <>{t.contact.send} <Send className="ml-2 w-4 h-4" /></>}
              </Button>
            </form>

            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <a
                href={`mailto:${t.contact.email}`}
                className="text-foreground text-sm hover:text-accent transition-colors"
              >
                {t.contact.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
