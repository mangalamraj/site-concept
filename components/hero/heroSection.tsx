"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { AuroraBackground } from "../ui/aurora-background";
import TrustedBy from "../trustedBy/trustedBy";
import DisplayImage from "../displayImage/displayImage";
import { TextAnimate } from "../ui/text-animate";
import { BlurFade } from "../ui/blur-fade";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  badgeText: string;
  title: string;
  subtitleLines: string[];
  ctaText: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  badgeText,
  title,
  subtitleLines,
  ctaText,
}: HeroSectionProps) => {
  return (
    <div className="max-w-380 w-[90%] m-auto flex flex-col gap-5 md:gap-10 justify-center md:items-center">
      <div className="relative m-auto flex flex-col md:gap-4 gap-2 items-start md:items-center md:text-center mt-36 md:mt-60">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex gap-1.5 items-center justify-center px-4 py-1 text-sm">
            <svg
              width="19"
              height="19"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-full"
            >
              <path d="M47.9985 47.9994H0V0H47.9985V47.9994Z" fill="#FF6600" />
              <path
                d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z"
                fill="white"
              />
            </svg>
            <div className="mt-0.5">{badgeText}</div>
          </AnimatedShinyText>
        </div>

        <TextAnimate
          animation="blurInUp"
          duration={0.6}
          once
          by="word"
          segmentClassName="
            text-6xl md:text-7xl lg:text-9xl
            text-left md:text-center
            font-bold tracking-tight
            bg-gradient-to-b
            from-gray-800 to-zinc-600/90
            dark:from-gray-200 dark:to-gray-800
            bg-clip-text text-transparent
          "
        >
          {title}
        </TextAnimate>

        <div className="text-lg md:text-center text-left md:text-2xl text-gray-400">
          {subtitleLines.map((line, index) => (
            <TextAnimate
              key={index}
              animation="blurInUp"
              once
              delay={1 + index * 0.2}
            >
              {line}
            </TextAnimate>
          ))}
        </div>
      </div>

      <BlurFade
        delay={1.25}
        className="md:m-auto md:flex md:justify-center z-4"
      >
        <div className="group relative w-fit overflow-hidden rounded-full shadow-2xl cursor-pointer">
          <div className="h-20 w-10 -top-4 bg-linear-to-r from-white/10 via-white/50 to-white/10 absolute -left-16 group-hover:left-[150%] duration-700 blur-sm -rotate-45" />
          <div
            className="rounded-full p-[1.5px]"
            style={{
              background:
                "linear-gradient(90deg, rgb(30,30,30) 0%, rgb(51,51,51) 18%, rgb(156,156,156) 66%, rgb(30,30,30) 100%)",
              boxShadow: "rgba(255,255,255,0.25) 0px 4px 32px",
            }}
          >
            <Button className="rounded-full bg-black px-8 py-6 text-white hover:bg-black border-none">
              {ctaText}
            </Button>
          </div>
        </div>
      </BlurFade>

      <DisplayImage />
      <TrustedBy />
    </div>
  );
};

export default HeroSection;
