"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Card from "@/components/ui/card";
import TypingText from "../ui/typing-text";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./SectionContainer";
import Link from "next/link";

export default function HeroSection() {
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const onTextComplete = () => {
    setIsDoneTyping(true);
  };
  return (
    <SectionContainer id="about">
      <Card className="flex flex-col md:flex-row gap-4 w-full space-y-0">
        <div className="flex flex-col gap-2 items-center min-w-32 grow-0">
          <Image
            className="hidden md:inline rounded-full w-32 h-32 mx-auto shadow-2xl"
            src="/smiley-crop.png"
            alt="Elwyn Cruz"
            width={128}
            height={128}
          />
        </div>
        <div className="flex flex-col items-center md:items-start grow gap-2 ml-2">
          <TypingText
            text={["Hi, I'm Elwyn"]}
            typingSpeed={75}
            startOnVisible
            className="text-xl md:text-3xl font-semibold"
            cursorClassName="h-5 md:h-7"
            showCursor={!isDoneTyping}
            onSentenceVisible={onTextComplete}
          />
          <div
            className={cn(
              "flex flex-col items-center md:items-start gap-2",
              "transition-[opacity,transform] duration-1000 opacity-0 translate-y-1",
              isDoneTyping && "opacity-100 translate-y-0",
            )}
          >
            <p className={"text-center md:text-left"}>
              I&apos;m an engineer passionate about creating wonderful user
              experiences. I love bringing ideas to life through clean,
              efficient code and intuitive design.
            </p>
            <p className="text-center md:text-left">
              Currently, I work at{" "}
              <Button variant="link" className="h-fit underline">
                <a
                  href="https://www.techempower.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TechEmpower
                </a>
              </Button>{" "}
              as a Lead Developer, where I spend my time designing full stack
              solutions and leading development teams to deliver exceptional
              software.
            </p>
            <p className="text-center md:text-left">
              When I&apos;m not coding, I&apos;m usually experimenting with new
              recipes, enjoying board games with friends, or diving into a game
              of League of Legends.
            </p>
            <Button size="lg" className="font-semibold mx-auto md:ml-0 mt-2">
              <Link href="/?section=experience">Learn More</Link>
            </Button>
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
}
