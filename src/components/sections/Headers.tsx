import { cn } from "@/lib/utils";
import React from "react";

interface SectionHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const SectionHeader = ({ className, children }: SectionHeaderProps) => {
  return (
    <h1 className={cn("text-4xl md:text-5xl font-bold text-center", className)}>
      {children}
    </h1>
  );
};

const SectionSubheader = ({ className, children }: SectionHeaderProps) => {
  return (
    <h2
      className={cn(
        "text-xl md:text-2xl font-semibold text-center text-muted-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export { SectionHeader, SectionSubheader };
