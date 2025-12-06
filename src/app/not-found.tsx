import { SectionContainer } from "@/components/sections/SectionContainer";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import Link from "next/link";

export default function NotFound() {
  return (
    <SectionContainer>
      <Header size="h2">Doesn't seem like we have that here...</Header>
      <p>You might've gotten lost.</p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </SectionContainer>
  );
}
