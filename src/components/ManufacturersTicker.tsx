import siemensLogo from "@/assets/siemens-healthineers-logo.svg";
import geLogo from "@/assets/ge-healthcare-logo.svg";
import philipsLogo from "@/assets/philips-logo.svg";
import canonLogo from "@/assets/canon-wordmark.svg";
import fujifilmLogo from "@/assets/fujifilm-logo.svg";

const logos = [
  { src: siemensLogo, alt: "Siemens Healthineers" },
  { src: geLogo, alt: "GE HealthCare" },
  { src: philipsLogo, alt: "Philips" },
  { src: canonLogo, alt: "Canon Medical Systems" },
  { src: fujifilmLogo, alt: "Fujifilm Healthcare" },
];

const ManufacturersTicker = () => {
  const Group = ({ hidden }: { hidden?: boolean }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {logos.map((logo, i) => (
        <div
          key={i}
          className="flex shrink-0 items-center justify-center px-8 md:px-12 h-10 md:h-12"
        >
          <img
            src={logo.src}
            alt={hidden ? "" : logo.alt}
            className="h-full w-auto max-w-[120px] md:max-w-[160px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            loading="eager"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="relative w-full overflow-hidden py-6 mb-10 border-y border-border/40"
      aria-label="MRI manufacturer partners"
    >
      <div className="flex w-max flex-nowrap animate-marquee [backface-visibility:hidden] [will-change:transform]">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
};

export default ManufacturersTicker;
