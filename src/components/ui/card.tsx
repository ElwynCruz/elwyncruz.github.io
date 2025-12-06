import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  const classes = cn(
    "bg-card p-6 rounded-lg border text-center space-y-4 hover:shadow-lg text-card-foreground transition-shadow",
    className,
  );
  return <div className={classes}>{children}</div>;
}
