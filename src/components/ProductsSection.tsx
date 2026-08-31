import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import ManufacturersTicker from "@/components/ManufacturersTicker";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cage1 from "@/assets/cage-t.jpg";
import cage2 from "@/assets/cage-a.jpg";
import cage3 from "@/assets/cage-b.jpg";
import cage4 from "@/assets/cage-c.jpg";
import cage5 from "@/assets/cage-d.jpg";
import window1 from "@/assets/win-0_title.jpg";
import window2 from "@/assets/win-1.jpg";
import window3 from "@/assets/win-3.jpg";
import window4 from "@/assets/win-4.jpg";
import doorT from "@/assets/door-t.jpg";
import doorA from "@/assets/door-a.jpg";
import doorB from "@/assets/door-b.jpg";
import doorC from "@/assets/door-c4.png";

const images = [window1, cage1, doorT];
const galleries: Record<number, string[]> = {
  0: [window1, window2, window3, window4],
  1: [cage1, cage2, cage3, cage4, cage5],
  2: [doorT, doorA, doorB, doorC],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const ProductsSection = () => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const activeGallery = openIndex !== null ? galleries[openIndex] : null;
  const project = openIndex === 1 ? t.products.items[1].project : null;

  return (
    <section id="products" className="py-24 md:py-32" style={{ background: "var(--section-gradient)" }}>
      <div className="container">
      <div className="text-center mx-auto mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          {t.products.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {t.products.description}
        </p>
     </div>
        <ManufacturersTicker />

        <div className="grid md:grid-cols-3 gap-8">
          {t.products.items.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-[var(--card-shadow-hover)] transition-shadow duration-300"
            >
              <div
                className={`aspect-square overflow-hidden ${galleries[i] ? "cursor-zoom-in" : ""}`}
                onClick={galleries[i] ? () => setOpenIndex(i) : undefined}
              >
                <img
                  src={images[i]}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.specs.map((s) => s && (
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

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="w-[80vh] max-w-[90vw] h-[80vh] max-h-[90vw] p-0 gap-0 overflow-hidden border-0">
          <DialogTitle className="sr-only">
            {openIndex !== null ? t.products.items[openIndex].title : ""}
          </DialogTitle>
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full ml-0">
              {(activeGallery ?? []).map((src, idx) => (
                <CarouselItem key={idx} className="h-full pl-0 relative">
                  <img
                    src={src}
                    alt={`${openIndex !== null ? t.products.items[openIndex].title : ""} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {project && project.name && project.location && (
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/45 to-transparent text-white pointer-events-none">
                      <div className="max-w-3xl">
                        <p className="text-sm md:text-base font-medium tracking-wide">{project.name}</p>
                        <p className="text-xs md:text-sm text-white/80 mt-1">{project.location}</p>
                      </div>
                    </div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
