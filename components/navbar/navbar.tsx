"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

import { useState } from "react";
import { ModeToggle } from "../common/modetoggler";

interface NavbarComponentProps {
  navItems: {
    name: string;
    link: string;
  }[];

  logoText?: string;

  logoLight?: string;
  logoDark?: string;

  buttonText?: string;
  buttonHref?: string;
}

export function NavbarComponent({
  navItems,
  logoText,
  logoLight,
  logoDark,
  buttonText,
  buttonHref,
}: NavbarComponentProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo text={logoText} lightLogo={logoLight} darkLogo={logoDark} />

        <NavItems items={navItems} />

        <div className="flex flex-col md:flex-row items-center gap-4 z-50">
          <NavbarButton
            href={buttonHref}
            className="rounded-2xl bg-white md:bg-black text-white"
          >
            {buttonText}
          </NavbarButton>

          <ModeToggle />
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo
            text={logoText}
            lightLogo={logoLight}
            darkLogo={logoDark}
          />

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}

          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              href={buttonHref}
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              {buttonText}
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
