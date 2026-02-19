import { motion } from "framer-motion";
import productPanel from "@/assets/product-panel.jpg";
import productRoom from "@/assets/product-room.jpg";
import productDoor from "@/assets/product-door.jpg";

const products = [
  {
    title: "RF Shielded Windows",
    description:
      "Multi-layer laminated RF shielded windows with copper mesh interlayer, providing clear visibility into the MRI suite without compromising electromagnetic integrity.",
    image: productPanel,
    specs: ["Up to 100 dB attenuation", "Anti-glare coating", "Custom sizes"],
  },
  {
    title: "Complete RF Enclosures",
    description:
      "Turnkey shielded room solutions engineered for 1.5T, 3T, and 7T MRI systems. Full installation and commissioning included.",
    image: productRoom,
    specs: ["1.5T – 7T compatible", "Turnkey delivery", "IEC 61000 compliant"],
  },
  {
    title: "RF Shielded Doors",
    description:
      "Pneumatic-sealed doors with continuous copper-beryllium finger stock gaskets ensuring consistent shielding performance.",
    image: productDoor,
    specs: ["Pneumatic seal", "ADA compliant", "250K+ cycle rated"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const ProductsSection = () => (
  <section id="products" className="py-24 md:py-32" style={{ background: "var(--section-gradient)" }}>
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-medium tracking-widest uppercase text-accent">Portfolio</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Our Product Range
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Each solution is precision-engineered to meet the most demanding electromagnetic shielding requirements in modern MRI environments.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.specs.map((s) => (
                  <span key={s} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
