import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/i18n/I18nProvider";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/info@emigli.com";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.set("_subject", "New EMIGLI website inquiry");
    formData.set("_captcha", "true");
    formData.set("_template", "table");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      (window as Window & {
        gtag?: (...args: unknown[]) => void;
      }).gtag?.("event", "generate_lead");

      toast({ title: t.contact.toastTitle, description: t.contact.toastDescription });
      form.reset();
    } catch {
      toast({
        title: t.contact.errorTitle,
        description: t.contact.errorDescription,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
                  <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.nameLabel}</label>
                  <Input id="contact-name" name="name" autoComplete="name" placeholder={t.contact.namePlaceholder} required />
                </div>
                <div>
                  <label htmlFor="contact-company" className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.companyLabel}</label>
                  <Input id="contact-company" name="company" autoComplete="organization" placeholder={t.contact.companyPlaceholder} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.emailLabel}</label>
                <Input id="contact-email" name="email" type="email" autoComplete="email" placeholder={t.contact.emailPlaceholder} required />
              </div>
              <div>
                <label htmlFor="contact-details" className="text-sm font-medium text-foreground mb-1.5 block">{t.contact.detailsLabel}</label>
                <Textarea id="contact-details" name="message" placeholder={t.contact.detailsPlaceholder} rows={5} required />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? t.contact.sending : <>{t.contact.send} <Send className="ml-2 w-4 h-4" /></>}
              </Button>
            </form>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
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

              <div className="hidden flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{t.contact.followUs}</span>
                <a
                  href="https://instagram.com/emigli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/emigli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-accent hover:bg-accent hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
