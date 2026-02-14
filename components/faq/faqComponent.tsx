import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { MoveRight } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface SideCard {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
}

interface FaqComponentProps {
  heading: string;
  subheadingLines: string[];
  faqs: FaqItem[];
  sideCards: SideCard[];
}

export function FaqComponent({
  heading,
  subheadingLines,
  faqs,
  sideCards,
}: FaqComponentProps) {
  return (
    <div className="flex xl:gap-12 gap-4 container flex-col xl:flex-row xl:w-[72%] md:w-[80%] w-[90%] m-auto">
      <div
        className="
          flex flex-col
          w-full
          xl:max-w-[640px]
          2xl:max-w-[780px]
          md:text-center
          justify-center
          gap-10 md:gap-2
        "
      >
        <div className="md:text-left flex flex-col">
          <div className="text-2xl font-semibold md:text-4xl md:mb-2">
            {heading}
          </div>
          <div className="md:text-base md:mb-8 text-gray-400 font-normal">
            {subheadingLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        <div className="flex m-auto text-left w-full">
          <Accordion
            type="single"
            collapsible
            className="bg-gray-100 w-full dark:bg-black px-4 rounded-xl dark:border-2 dark:border-zinc-800"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="border-t-2 xl:w-1/2 xl:border-l-2 xl:border-t-0 flex flex-col gap-6 dark:border-gray-600/40 border-gray-300/60 flex-1">
        {sideCards.map((card, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center xl:items-end mt-4"
          >
            <div className="w-full xl:w-[80%] h-[120px] relative border-3 dark:border-gray-600/20 border-gray-300/60 rounded-md">
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div className="mt-2 flex flex-col items-start w-full xl:w-[80%] gap-1">
              <div className="flex flex-col gap-2">
                <div>{card.title}</div>
                <div className="text-xs text-gray-500">
                  {card.description}
                  <div className="text-sm flex gap-1 text-black">
                    {card.ctaText} <MoveRight size={16} className="mt-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
