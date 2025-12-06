"use client";

import React from "react";
import ShikiHighlighter from "react-shiki";
import { ExtraProps } from "react-markdown";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"code"> & ExtraProps & { inline?: boolean };

export const Code = ({
  children,
  className,
  node,
  inline,
  ...props
}: Props) => {
  const code = String(children?.toString()).trim();
  const match = className?.match(/language-(\w+)/);
  const language = match ? match[1] : undefined;
  return !inline ? (
    <ShikiHighlighter
      showLineNumbers
      language={language}
      theme={{
        light: "material-theme-palenight",
        dark: "material-theme-darker",
      }}
      defaultColor="light-dark()"
      {...props}
    >
      {code}
    </ShikiHighlighter>
  ) : (
    <code
      className={cn("bg-muted text-muted-foreground", className)}
      {...props}
    >
      {children}
    </code>
  );
};
