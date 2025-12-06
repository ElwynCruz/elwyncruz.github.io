import { cn } from "@/lib/utils";
import React from "react";

export const SectionContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "min-h-[calc(100vh-64px)] h-full flex flex-col justify-center items-center text-center gap-y-6",
        className,
      )}
      {...props}
    />
  );
});
