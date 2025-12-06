import React from "react";
import Markdown, { Components } from "react-markdown";
import { Anchor } from "./anchor";
import { Header } from "./header";
import { Code } from "./code";
import { rehypeInlineCodeProperty } from "react-shiki";
import { cn } from "@/lib/utils";

const components: Partial<Components> = {
  a: Anchor,
  h1: (props) => <Header size="h1" {...props} />,
  h2: (props) => <Header size="h2" variant="muted" {...props} />,
  h3: (props) => <Header size="h3" {...props} />,
  h4: (props) => <Header size="h4" {...props} />,
  h5: (props) => <Header size="h5" {...props} />,
  code: (props) => <Code {...props} />,
  ul: ({ className, ...props }) => (
    <ul className={cn("list-disc ml-4", className)} {...props} />
  ),
};

export const RenderMarkdown = ({ content }: { content: string }) => {
  return (
    <Markdown
      rehypePlugins={[rehypeInlineCodeProperty]}
      components={components}
    >
      {content}
    </Markdown>
  );
};
