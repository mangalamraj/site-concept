"use client";

import { Button } from "../ui/button";
import TrustedBy from "../trustedBy/trustedBy";
import DisplayImage from "../displayImage/displayImage";
import { TextAnimate } from "../ui/text-animate";
import { BlurFade } from "../ui/blur-fade";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import BackgroundVideo from "./videoComponent";

interface HeroSectionProps {
  badgeText: string;
  title: string;
  subtitleLines: string[];
  ctaText: string;
  onCtaClick?: () => void;
}

const HeroSection = () => {
  return (
    <div className="">
      <BackgroundVideo />
    </div>
  );
};

export default HeroSection;
