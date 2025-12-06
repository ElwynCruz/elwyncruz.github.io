"use client";

import { use, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import ContactSection from "@/components/sections/ContactSection";
import gsap from "gsap";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const selectedSection = use(searchParams).section;
  useEffect(() => {
    if (selectedSection === undefined) {
      return;
    }
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${selectedSection}`,
      position: "top",
    });
  }, [selectedSection]);
  return (
    <div className="w-full flex flex-col max-w-4xl mx-auto px-4 ">
      <HeroSection />
      <ExperienceSection />
      <HobbiesSection />
      <ContactSection />
    </div>
  );
}
