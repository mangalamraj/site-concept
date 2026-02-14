"use client";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../ui/animated-shiny-text";

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeaturesProps {
  heading: string;
  subheading: string;
  features: FeatureItem[];
}

const Features = ({ heading, subheading, features }: FeaturesProps) => {
  return (
    <div className="max-w-380 m-auto md:text-center z-10">
      <div className="md:text-4xl w-[90%] md:w-full m-auto text-2xl font-medium mb-1">
        {heading}
      </div>

      <div className="text-base md:text-lg w-[90%] md:w-full m-auto text-gray-400 font-normal mb-10">
        {subheading}
      </div>

      <div className="flex gap-4 flex-col xl:flex-row w-[90%] md:w-[80%] justify-center m-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="bg-gray-300/20 dark:bg-zinc-950 border-zinc-800 dark:border rounded-xl flex xl:w-1/4 bg-[url(/cardeffect.svg)] bg-cover bg-center"
            >
              <div className="flex flex-col md:gap-12 m-4 text-left">
                <div className="group flex m-2 gap-2 text-white p-1 rounded-full items-center duration-300 cursor-pointer">
                  <div className="rounded-full bg-black group-hover:rotate-180 duration-300">
                    <div className="p-3 rounded-full border-2 border-gray-700">
                      <Icon size={18} />
                    </div>
                  </div>
                </div>

                <div className="py-4 px-2">
                  <div className="text-lg pb-2">{feature.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
