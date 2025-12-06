"use client";

import { useEffect } from "react";
import gsap from "gsap";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import ContactSection from "@/components/sections/ContactSection";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const selectedSection = searchParams.get("section");
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
