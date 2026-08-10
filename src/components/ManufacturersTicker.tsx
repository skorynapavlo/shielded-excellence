import siemensLogo from "@/assets/siemens-healthineers-logo.svg.asset.json";
import geLogo from "@/assets/ge-healthcare-logo.svg.asset.json";
import philipsLogo from "@/assets/philips-logo.svg.asset.json";
import canonLogo from "@/assets/canon-wordmark.svg.asset.json";
import fujifilmLogo from "@/assets/fujifilm-logo.svg.asset.json";

const logos = [
  { src: siemensLogo.url, alt: "Siemens Healthineers" },
  { src: geLogo.url, alt: "GE HealthCare" },
  { src: philipsLogo.url, alt: "Philips" },
  { src: canonLogo.url, alt: "Canon Medical Systems" },
  { src: fujifilmLogo.url, alt: "Fujifilm Healthcare" },
];

const ManufacturersTicker = () => {
  const track = [...logos, ...logos];

  return (
    <div
      className="relative w-full overflow-hidden py-6 mb-10 border-y border-border/40"
      aria-label="MRI manufacturer partners"
    >
      <div className="flex w-max min-w-full flex-nowrap animate-marquee [transform:translate3d(0,0,0)] [backface-visibility:hidden]">
        {track.map((logo, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center justify-center px-8 md:px-12 h-10 md:h-12"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              aria-hidden={i >= logos.length}
              className="h-full w-auto max-w-[120px] md:max-w-[160px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              loading="eager"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturersTicker;
