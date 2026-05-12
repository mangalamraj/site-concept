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
        <NavbarComponent
          navItems={[
            {
              name: "Platform",
              link: "#platform",
            },
            {
              name: "Solutions",
              link: "#solutions",
            },
            {
              name: "About",
              link: "#about",
            },
          ]}
          logoText="Cohesion"
          logoLight="/logo.svg"
          logoDark="/logo.svg"
          buttonText="Book a Demo"
          buttonHref="#contact"
        />
      </div>
      <BackgroundRippleEffect rows={80} cols={40} />
      <HeroSection
        badgeText="YC Backed"
        title="Cohesion"
        subtitleLines={[
          "Connect workflows, systems, and teams into one AI-powered",
          "operational platform built for real-time execution.",
        ]}
        ctaText="Book a Demo"
      />
      <Features
        heading="Built for Intelligent Operations"
        subheading="Unify fragmented systems, automate workflows, and operate with real-time AI-driven visibility."
        features={[
          {
            icon: Zap,
            title: "AI Workflow Orchestration",
            description:
              "Coordinate complex operational workflows across teams, systems, and processes automatically.",
          },
          {
            icon: ClockCheck,
            title: "Real-Time Operational Visibility",
            description:
              "Monitor infrastructure, workflows, and operational health from a centralized control layer.",
          },
          {
            icon: Smartphone,
            title: "Connected Enterprise Systems",
            description:
              "Integrate internal tools, APIs, databases, and operational platforms into one unified ecosystem.",
          },
          {
            icon: Cog,
            title: "Autonomous Operations",
            description:
              "Deploy AI agents that automate repetitive decisions, escalations, and operational tasks.",
          },
        ]}
      />
      <MarketingSection
        titleLines={[
          "AI infrastructure for operational execution.",
          "Built for modern enterprise teams.",
        ]}
        descriptionParagraphs={[
          "Most enterprise operations still rely on disconnected tools, manual coordination, and delayed decision-making.",
          "Our platform unifies operational data, orchestrates workflows, and enables AI-powered execution across systems, infrastructure, and teams. Automate operations, improve visibility, and scale execution without operational complexity.",
        ]}
        ctaText="Schedule a Demo"
        onCtaClick={() => console.log("CTA clicked")}
      />
      <div className="container m-auto md:w-[60%] ">
        <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
      </div>
      <StakeHolders
        heading="Operational intelligence for every team"
        subheading="Designed for modern operational organizations"
        footerText="Teams use the platform to automate execution, improve coordination, and scale operational efficiency."
        footerCta="Learn More"
        stakeholders={[
          {
            title: "For Operations Teams.",
            subtitle: "Automate Execution",
            badges: [
              "Workflow Automation",
              "Real-Time Monitoring",
              "AI Task Routing",
              "Operational Dashboards",
            ],
            imageSrc: "/operations.webp",
          },
          {
            title: "For Engineering Teams.",
            subtitle: "Unify Infrastructure",
            badges: [
              "System Integrations",
              "Infrastructure Visibility",
              "API Orchestration",
              "Event Automation",
            ],
            imageSrc: "/engineering.webp",
          },
          {
            title: "For Leadership.",
            subtitle: "Drive Operational Efficiency",
            badges: [
              "AI Insights",
              "Performance Analytics",
              "Operational Reporting",
              "Predictive Intelligence",
            ],
            imageSrc: "/leadership.webp",
          },
        ]}
      />
      <Process
        heading="Operational Workflow Engine"
        subheadingLines={[
          "Connect systems, orchestrate workflows, and automate execution",
          "through AI-powered operational infrastructure.",
        ]}
        steps={[
          {
            title: "Centralize Operational Data",
            desc: "Connect infrastructure, workflows, and enterprise systems into a unified operational layer.",
            image: "/p1.svg",
          },
          {
            title: "Automate Workflow Coordination",
            desc: "Trigger intelligent workflows, routing, escalations, and actions across teams and systems.",
            image: "/p2.svg",
          },
          {
            title: "Monitor Operations in Real Time",
            desc: "Track operational performance, infrastructure health, and execution metrics through live dashboards.",
            image: "/p3.svg",
          },
          {
            title: "Scale Autonomous Operations",
            desc: "Deploy AI-powered operational agents that continuously optimize workflows and execution.",
            image: "/p4.svg",
          },
        ]}
      />
      <div className="container m-auto md:w-[60%] ">
        <Separator className="bg-gradient-to-r dark:from-black dark:via-gray-400 dark:to-black from-white via-gray-300 to-white" />
      </div>
      <FaqComponent
        heading="FAQs"
        subheadingLines={[
          "Everything you need to know about the",
          "AI-native operations platform.",
        ]}
        faqs={[
          {
            question: "What is Cohesion-style operational infrastructure?",
            answer:
              "It is a unified operational platform that connects systems, workflows, and teams into one AI-powered execution layer for real-time coordination and automation.",
          },
          {
            question: "How does the platform improve operations?",
            answer:
              "The platform automates repetitive workflows, centralizes operational visibility, and enables faster decision-making through AI-powered orchestration.",
          },
          {
            question: "Can the platform integrate with our existing systems?",
            answer:
              "Yes. The platform is designed to integrate with internal tools, APIs, databases, operational software, and enterprise infrastructure.",
          },
          {
            question: "What kind of workflows can be automated?",
            answer:
              "Teams can automate approvals, routing, escalations, monitoring, reporting, task coordination, and operational decision workflows.",
          },
          {
            question: "Does the platform support real-time monitoring?",
            answer:
              "Yes. Real-time operational monitoring and live infrastructure visibility are core parts of the platform experience.",
          },
        ]}
        sideCards={[
          {
            imageSrc: "/dummy1.svg",
            title: "Unified Operational Intelligence",
            description:
              "Bring workflows, infrastructure, and operational systems together into one centralized AI-powered platform.",
            ctaText: "Read more",
          },
          {
            imageSrc: "/dummy2.svg",
            title: "Autonomous Workflow Execution",
            description:
              "Deploy intelligent operational agents that automate execution, coordination, and real-time decision making.",
            ctaText: "Read more",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
