import { Blog } from "@/types/blog";
import { TagBadge } from "./TagBadge";
import { RenderMarkdown } from "../ui/render-markdown";
import { SectionHeader, SectionSubheader } from "../sections/Headers";
import { ArrowBigLeft, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type BlogContainerProps = {
  blog: Blog;
};

export const BlogDetailContainer = ({ blog }: BlogContainerProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Link className="flex group" href="/blog">
        <ArrowLeft /> <span className="group-hover:underline">Back</span>
      </Link>
      <div className="flex gap-2">
        {blog.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
      <SectionHeader className="text-left mb-0">{blog.title}</SectionHeader>
      <SectionSubheader className="text-left mb-4">
        {blog.subheader}
      </SectionSubheader>
      <RenderMarkdown content={blog.content} />
      <div className="flex flex-col justify-center min-h-[600px] items-center gap-y-8 mt-16">
        <SectionHeader className="mt-8">Contact</SectionHeader>
        <SectionSubheader>
          Have a comment? Noticed a typo? Let me know your thoughts!
        </SectionSubheader>
        <div className="mx-auto">
          <Button asChild size="lg" variant="outline">
            <a href="mailto:elwyncruz@gmail.com">
              <Mail />
              Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
