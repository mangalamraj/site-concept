"use client";

import Image from "next/image";
import { useState } from "react";

interface ProcessStep {
  title: string;
  desc: string;
  image: string;
}

interface ProcessProps {
  heading: string;
  subheadingLines: string[];
  steps: ProcessStep[];
}

const Process = ({ heading, subheadingLines, steps }: ProcessProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="xl:w-[72%] md:w-[80%] w-[90%] m-auto md:mt-10 md:mb-10 z-10">
      <div className="flex flex-col xl:flex-row gap-20 md:gap-10 m-auto md:justify-between">
        <div className="flex h-[600px] xl:w-[55%] flex-col md:justify-between">
          <div className="flex flex-col md:mb-0 mb-10">
            <div className="md:text-4xl font-medium text-2xl mb-1">
              {heading}
            </div>
            <div className="md:text-lg text-gray-400 font-normal">
              {subheadingLines.map((line, index) => (
                <span key={index}>{line} </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-4 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gray-200/40 dark:bg-zinc-950 dark:border"
                    : "hover:scale-[1.01]"
                }`}
              >
                <div className="text-base dark:text-white">{step.title}</div>
                <div
                  className={`text-sm font-semibold ${
                    activeIndex === index
                      ? "dark:text-gray-400 text-gray-500"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-full flex items-center">
          <div key={activeIndex} className="animate-[fadeUp_0.5s_ease-out]">
            <Image
              src={steps[activeIndex].image}
              alt={steps[activeIndex].title}
              width={420}
              height={420}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
