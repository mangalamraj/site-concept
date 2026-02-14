import Image from "next/image";
import { Button } from "../ui/button";
import { DottedMap } from "../ui/dotted-map";

interface MarketingSectionProps {
  titleLines: string[];
  descriptionParagraphs: string[];
  ctaText: string;
  onCtaClick?: () => void;
}

const MarketingSection = ({
  titleLines,
  descriptionParagraphs,
  ctaText,
  onCtaClick,
}: MarketingSectionProps) => {
  return (
    <div className="relative xl:w-[60%] w-[90%] m-auto flex justify-center">
      <DottedMap dotRadius={0.1} className="absolute" width={150} />

      <div className="z-10">
        <div className="md:text-4xl md:w-full m-auto text-2xl font-medium text-left md:text-center md:mb-20">
          {titleLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Description */}
        <div className="mb-10 text-base md:text-lg md:w-[80%] m-auto md:mt-0 mt-10">
          {descriptionParagraphs.map((para, index) => (
            <div key={index} className="md:w-[70%] m-auto mb-5 last:mb-0">
              {para}
            </div>
          ))}
        </div>

        <div className="md:w-[70%] m-auto flex justify-center z-20">
          <div className="group relative overflow-hidden rounded-full shadow-2xl cursor-pointer">
            <div className="h-20 w-10 -top-4 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute -left-16 group-hover:left-[150%] duration-700 blur-sm -rotate-45" />
            <div
              className="rounded-full p-[1.5px]"
              style={{
                background:
                  "linear-gradient(90deg, rgb(30,30,30) 0%, rgb(51,51,51) 18%, rgb(156,156,156) 66%, rgb(30,30,30) 100%)",
                boxShadow: "rgba(255,255,255,0.25) 0px 4px 32px",
              }}
            >
              <Button
                onClick={onCtaClick}
                className="rounded-full bg-black text-white hover:bg-black border-none"
                style={{
                  padding: "25px 35px",
                }}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[120%] m-auto flex items-center">
        <div className="w-full h-[420px] m-auto z-0">
          <Image
            src="/line2.svg"
            alt="transition line"
            fill
            className="object-contain m-auto dark:opacity-95 opacity-25"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
