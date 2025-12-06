import { Button } from "@/components/ui/button";
import { SiRefinedgithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { LinkedInIcon } from "../icon/LinkedInIcon";
import { SectionHeader, SectionSubheader } from "./Headers";

export default function ContactSection() {
  return (
    <SectionContainer id="contact">
      <SectionHeader>Let&apos;s Connect</SectionHeader>
      <SectionSubheader>
        I&apos;m always interested in discussing new technologies, fun board
        game recommendations, or cool recipes!
      </SectionSubheader>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="icon" variant="outline">
          <a href="mailto:elwyncruz@gmail.com">
            <Mail />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a
            href="https://linkedin.com/in/elwyncruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </Button>
        <Button asChild variant="outline" size="icon">
          <a
            href="https://github.com/elwyncruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiRefinedgithub />
          </a>
        </Button>
      </div>
    </SectionContainer>
  );
}
