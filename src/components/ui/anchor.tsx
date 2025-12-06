import { cn } from "@/lib/utils";
import React from "react";

export const Anchor = React.forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return <a className={cn("underline", className)} ref={ref} {...props} />;
});

Anchor.displayName = "Anchor";
