import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "ShieldRF delivered a flawless 3T MRI enclosure on a tight timeline. Their attenuation results exceeded our specifications by 15 dB.",
    name: "Dr. Helena Kessler",
    role: "Head of Radiology, Munich University Hospital",
  },
  {
    quote: "The modular panel system allowed us to retrofit our existing suite without major construction. Downtime was under 48 hours.",
    name: "James Thornton",
    role: "Facilities Director, Westfield Medical Center",
  },
  {
    quote: "From simulation to commissioning, their engineering team was outstanding. We've now specified ShieldRF for all our new MRI installations.",
    name: "Prof. Akira Tanaka",
    role: "Chief Medical Physicist, Osaka Imaging Institute",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32" style={{ background: "var(--section-gradient)" }}>
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-medium tracking-widest uppercase text-accent">Testimonials</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Trusted by Leading Institutions
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
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
              "{t.quote}"
            </blockquote>
            <div>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
