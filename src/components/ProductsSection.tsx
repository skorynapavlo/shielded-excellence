import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import ManufacturersTicker from "@/components/ManufacturersTicker";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
import siemensLogo from "@/assets/siemens-healthineers-logo.svg";
import geLogo from "@/assets/ge-healthcare-logo.svg";
import philipsLogo from "@/assets/philips-logo.svg";
import fujifilmLogo from "@/assets/fujifilm-logo.svg";

const images = [window1, cage1, doorT];
const galleries: Record<number, string[]> = {
  0: [window1, window2, window3, window4],
  1: [cage1, cage2, cage3, cage4, cage5],
  2: [doorT, doorA, doorB, doorC],
};

const manufacturerLogos: Record<string, { src: string; alt: string }> = {
  siemens: { src: siemensLogo, alt: "Siemens Healthineers" },
  ge: { src: geLogo, alt: "GE HealthCare" },
  philips: { src: philipsLogo, alt: "Philips" },
  fujifilm: { src: fujifilmLogo, alt: "Fujifilm Healthcare" },
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const activeGallery = openIndex !== null ? galleries[openIndex] : null;
  const projects = openIndex === 1 ? t.products.items[1].projects : null;

  useEffect(() => {
    if (!carouselApi || openIndex === null) {
      setShowProjectInfo(false);
      return;
    }

    let timeoutId: number | undefined;

    const revealProjectInfo = () => {
      setShowProjectInfo(false);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setShowProjectInfo(true), 1000);
    };

    revealProjectInfo();
    carouselApi.on("select", revealProjectInfo);

    return () => {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      carouselApi.off("select", revealProjectInfo);
    };
  }, [carouselApi, openIndex]);

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
        <DialogContent className="w-[92vw] max-w-[90vw] h-auto max-h-[90vh] md:w-[80vh] md:h-[80vh] md:max-h-[90vw] p-0 gap-0 overflow-hidden border-0">
          <DialogTitle className="sr-only">
            {openIndex !== null ? t.products.items[openIndex].title : ""}
          </DialogTitle>
          <Carousel setApi={setCarouselApi} className="w-full h-auto md:h-full">
            <CarouselContent className="ml-0 h-auto md:h-full">
              {(activeGallery ?? []).map((src, idx) => {
                const project = projects?.[idx];
                const logo = project ? manufacturerLogos[project.mriManufacturer] : null;

                const projectName = project?.name ?? "";
                const isBorderGuardProject =
                  projectName.includes("Державної прикордонної служби України") ||
                  projectName.includes("State Border Guard Service of Ukraine");
                const isUkrainian = projectName.includes("Державної прикордонної служби України");
                const displayName = isBorderGuardProject
                  ? isUkrainian
                    ? "Головний військово-медичний клінічний центр"
                    : "Main Military Medical Clinical Center"
                  : projectName;
                const secondLine = isBorderGuardProject
                  ? isUkrainian
                    ? "Державної прикордонної служби України"
                    : "State Border Guard Service of Ukraine"
                  : null;

                return (
                  <CarouselItem
                    key={idx}
                    className="h-auto pl-0 relative flex min-h-0 flex-col md:h-full md:block"
                  >
                    <div className="relative flex h-auto min-h-0 w-full flex-col md:h-full md:block">
                      <div className="relative flex w-full aspect-[4/3] items-center justify-center bg-black/[0.02] md:h-full md:aspect-auto md:block">
                        <img
                          src={src}
                          alt={`${openIndex !== null ? t.products.items[openIndex].title : ""} ${idx + 1}`}
                          className="block w-full h-full object-contain md:h-full md:w-full md:max-h-none md:object-cover"
                        />

                        {project && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: showProjectInfo ? 1 : 0, y: showProjectInfo ? 0 : 8 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="hidden md:block absolute left-4 right-4 bottom-4 md:left-6 md:right-6 z-10 pointer-events-none"
                          >
                            <div className="inline-block max-w-full rounded-lg bg-white/60 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 shadow-lg">
                              <p className="text-sm md:text-base font-semibold leading-snug text-foreground">
                                {displayName}
                                {secondLine && <span className="block">{secondLine}</span>}
                              </p>
                              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                                {project.location}
                              </p>
                              {logo && (
                                <div className="mt-3 h-7 md:h-9 flex items-center">
                                  <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-full w-auto max-w-[110px] object-contain"
                                  />
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </div>

                      {project && (
                        <div className="md:hidden flex-none bg-white px-5 py-4 shadow-sm">
                          <p className="text-base font-semibold leading-snug text-foreground">
                            {displayName}
                            {secondLine && <span className="block">{secondLine}</span>}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {project.location}
                          </p>
                          {logo && (
                            <div className="mt-3 h-9 flex items-center">
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-full w-auto max-w-[130px] object-contain"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="!left-2 z-20" />
            <CarouselNext className="!right-2 z-20" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
