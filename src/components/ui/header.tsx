import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.ComponentProps<"h1"> {
  size: "h1" | "h2" | "h3" | "h4" | "h5";
  variant?: "default" | "muted";
}

const variantStyles = {
  default: "text-primary-foreground",
  muted: "text-muted-foreground",
};

const sizeStyles = {
  h1: "text-4xl md:text-5xl font-bold",
  h2: "text-xl md:text-2xl font-semibold",
  h3: "text-lg md:text-xl font-semibold",
  h4: "text-md md:text-lg font-semibold",
  h5: "text-sm md:text-md font-semibold",
};

export const Header = ({
  variant = "default",
  size,
  className,
  ...props
}: Props) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const element = React.createElement(size, {
    className: cn(sizeStyle, variantStyle, className),
    ...props,
  });

  return element;
};
