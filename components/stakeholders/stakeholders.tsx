"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";

interface StakeholderItem {
  title: string;
  subtitle: string;
  badges: string[];
  imageSrc: string;
}

interface StakeHoldersProps {
  heading: string;
  subheading: string;
  footerText: string;
  footerCta: string;
  stakeholders: StakeholderItem[];
}

const StakeHolders = ({
  heading,
  subheading,
  footerText,
  footerCta,
  stakeholders,
}: StakeHoldersProps) => {
  const [hover, setHover] = useState(true);

  return (
    <div className="md:container w-[90%] m-auto md:text-center">
      <div className="md:text-4xl text-2xl font-medium">{heading}</div>
      <div className="text-base md:text-lg text-gray-400 font-normal mt-1">
        {subheading}
      </div>

      <div className="flex flex-col xl:flex-row gap-4 md:w-[80%] w-full m-auto mt-10 text-white">
        {stakeholders.map((item, index) => (
          <div
            key={index}
            className={`relative h-[400px] bg-black dark:bg-zinc-950 rounded-xl border cursor-pointer overflow-hidden text-left flex p-5 hover:p-8 duration-400 ${
              index === 0
                ? hover
                  ? "xl:w-2/3"
                  : "xl:w-1/4"
                : "xl:w-1/4 xl:hover:w-2/3"
            }`}
            onMouseOver={() => index !== 0 && setHover(false)}
            onMouseLeave={() => index !== 0 && setHover(true)}
          >
            <div className="flex flex-col justify-end h-full w-full">
              <div className="text-2xl font-medium">{item.title}</div>
              <div
                className={`text-base overflow-hidden duration-300 ${
                  index === 0 && hover
                    ? "w-full h-fit text-white"
                    : "md:w-0 md:h-0 md:group-hover:w-full md:group-hover:h-fit"
                }`}
              >
                {item.subtitle}
              </div>
              <div
                className={`flex gap-2 text-xs font-bold overflow-hidden duration-300 ${
                  index === 0 && hover
                    ? "md:w-full md:h-fit mt-4"
                    : "md:w-0 md:h-0 md:group-hover:w-full md:group-hover:h-fit md:group-hover:mt-4"
                }`}
              >
                {item.badges.map((badge, i) => (
                  <Badge
                    key={i}
                    className="border border-zinc-600 dark:border-0 text-gray-400 dark:text-black"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-auto rounded-full bg-gray-700 p-2 border border-gray-600 hover:-translate-y-1.5 hover:translate-x-1.5 duration-300">
              <ArrowRight size={20} className="-rotate-45" />
            </div>

            <div
              className={`absolute w-[480px] h-[300px] rounded-2xl -top-4 -right-4 ${
                index === 0
                  ? hover
                    ? "opacity-75 md:blur-none"
                    : "opacity-40 md:blur-sm"
                  : "md:opacity-40 md:blur-sm md:group-hover:opacity-75 md:group-hover:blur-none"
              }`}
            >
              <Image
                src={item.imageSrc}
                fill
                alt={item.title}
                className="rounded-md fixed"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-gray-400 font-semibold">
        {footerText}{" "}
        <span className="dark:text-white text-zinc-600 hover:underline cursor-pointer">
          {footerCta}
        </span>
      </div>
    </div>
  );
};

export default StakeHolders;
