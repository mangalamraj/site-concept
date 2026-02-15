"use client";
import Footer from "@/components/common/footer/footer";
import { CTA } from "@/components/cta/cta";
import DisplayImage from "@/components/displayImage/displayImage";
import EmailSection from "@/components/email/emailSection";
import { FaqComponent } from "@/components/faq/faqComponent";
import Features from "@/components/features/features";
import HeroSection from "@/components/hero/heroSection";
import MarketingSection from "@/components/marketing/marketingSection";
import { NavbarComponent } from "@/components/navbar/navbar";
import Process from "@/components/process/process";
import StakeHolders from "@/components/stakeholders/stakeholders";
import TextReveal from "@/components/textReveal/textReveal";
import TrustedBy from "@/components/trustedBy/trustedBy";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Separator } from "@/components/ui/separator";
import { Zap, ClockCheck, Smartphone, Cog } from "lucide-react";

export default function Home() {
  return (
    <div className="m-auto bg-zinc-50 w-full font-sans flex flex-col md:gap-30 gap-20  dark:bg-black overflow-hidden">
      <div className="relative w-full">
        <NavbarComponent />
      </div>
      <BackgroundRippleEffect rows={80} cols={40} />
      <HeroSection
        badgeText="YC Backed"
        title="Retail Ready"
        subtitleLines={[
          "Meet the system enabling brands and 3PLs to achieve zero chargebacks",
          "while helping retailers process inbound shipments faster.",
        ]}
        ctaText="Meet With Us"
      />
      <Features
        heading="The Challenge of Retail Compliance"
        subheading="Retailers have complex shipping requirements that lead to costly chargebacks. Here’s how RetailReady solves this."
        features={[
          {
            icon: Zap,
            title: "Lightning Fast Setup",
            description:
              "Deploy across your warehouse network in days, not months. Immediate impact on operations.",
          },
          {
            icon: ClockCheck,
            title: "Real-time Updates",
            description:
              "Stay ahead with instant notifications about compliance changes and requirements.",
          },
          {
            icon: Smartphone,
            title: "Mobile First",
            description:
              "Intuitive mobile interface designed for warehouse operations and on-the-go management.",
          },
          {
            icon: Cog,
            title: "Automated Workflows",
            description:
              "Streamline operations with AI-powered task management and compliance checks.",
          },
        ]}
      />
      <MarketingSection
        titleLines={[
          "Make your retail operations AI-ready.",
          "No heavy setup required.",
        ]}
        descriptionParagraphs={[
          "Traditional retail systems move slow. Decisions come later than they should.",
          "With RetailReadyAI, you get real-time intelligence across inventory, orders, compliance, and workflows—powered by AI that understands your data instantly. Automate rule checks, catch issues before they escalate, and scale operations without adding manual overhead. No complex integrations, no rigid workflows—just faster, smarter retail execution.",
        ]}
        ctaText="Meet With Us"
        onCtaClick={() => console.log("CTA clicked")}
      />
      <div className="container m-auto md:w-[60%] ">
        <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
      </div>
      <StakeHolders
        heading="Value for every stakeholder"
        subheading="We value all of our stakeholders"
        footerText="Many warehouses have already transformed their operations with RetailReady."
        footerCta="Know More"
        stakeholders={[
          {
            title: "For 3PLs.",
            subtitle: "Streamline Your Operations",
            badges: [
              "Smart Packout Flow",
              "Task Management",
              "EDI Services",
              "Automated ASN",
            ],
            imageSrc: "/threepl.webp",
          },
          {
            title: "For Brands.",
            subtitle: "Maximize Your Performance",
            badges: [
              "AI Chargeback Processing",
              "Analytics Dashboard",
              "Vendor Scorecard",
              "Dispute Analytics",
            ],
            imageSrc: "/brandnew.webp",
          },
          {
            title: "For Retailers.",
            subtitle: "Optimize Your Receiving Process",
            badges: [
              "Requirements Control",
              "Inbound Automation",
              "Vendor Management",
            ],
            imageSrc: "/form.webp",
          },
        ]}
      />
      <Process
        heading="Order Processing"
        subheadingLines={[
          "Explore our intelligent order processing flow. ",
          "Built to reduce errors, accelerate decisions, and scale with your business.",
        ]}
        steps={[
          {
            title: "Smart Order Processing",
            desc: "Start your fulfillment journey with our intuitive mobile interface. Directed packout workflows ensure accuracy from the first step.",
            image: "/p1.webp",
          },
          {
            title: "Proactive Compliance Checks",
            desc: "Prevent costly mistakes before they happen. Our system automatically validates retailer requirements, ensuring every SKU meets compliance standards before shipping.",
            image: "/p2.webp",
          },
          {
            title: "Guided Packaging Process",
            desc: "Follow clear, step-by-step instructions for proper labeling and packaging. Our system ensures every box is correctly labeled and ready for shipment.",
            image: "/p3.webp",
          },
          {
            title: "Verified Success",
            desc: "Celebrate each perfectly packed order! Our system confirms successful completion, giving you confidence that every shipment meets the highest standards.",
            image: "/p4.webp",
          },
        ]}
      />
      <div className="container m-auto md:w-[60%] ">
        <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
      </div>
      <FaqComponent
        heading="FAQs"
        subheadingLines={[
          "Everything you need to know about RetailReadyAI and",
          "how it simplifies compliance.",
        ]}
        faqs={[
          {
            question: "What is RetailReadyAI and who is it for?",
            answer:
              "RetailReadyAI is an AI-powered compliance and automation platform designed for brands, manufacturers, and sellers to ensure their products meet retailer and marketplace requirements before launch.",
          },
          {
            question: "How does RetailReadyAI help with retailer compliance?",
            answer:
              "RetailReadyAI validates product data against retailer guidelines, GS1 standards, and marketplace rules, flagging issues early and suggesting fixes.",
          },
          {
            question:
              "Does RetailReadyAI support GTIN, barcode, and GS1 standards?",
            answer:
              "Yes. RetailReadyAI supports GTIN validation, barcode checks, and GS1 data requirements across global retailers.",
          },
        ]}
        sideCards={[
          {
            imageSrc: "/r1.svg",
            title: "What is Retail Ready?",
            description:
              "RetailReadyAI is an AI-powered operations layer that understands your retail data and turns it into real-time, actionable decisions.",
            ctaText: "Read more",
          },
          {
            imageSrc: "/r2.svg",
            title: "From Manual Ops to AI-Driven Ops",
            description:
              "Eliminate spreadsheets and manual checks. RetailReadyAI monitors operations in real time and escalates only what needs attention.",
            ctaText: "Read more",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
