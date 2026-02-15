"use client";

import HeroSection from "@/components/cotohero/heroComponent";

export default function Home() {
  return (
    <div className="m-auto bg-zinc-50 w-full font-sans flex flex-col md:gap-30 gap-20  dark:bg-black overflow-hidden">
      <HeroSection></HeroSection>
    </div>
  );
}
