import { TagBadge } from "@/components/blog/TagBadge";
import { SectionSubheader } from "@/components/sections/Headers";
import Card from "@/components/ui/card";
import { blogs } from "@/constants/blogData";
import Link from "next/link";

export default function BlogList() {
  return (
    <div className="flex flex-col w-full px-4 gap-4">
      {blogs.map((blog, index) => (
        <Card key={index} className="group">
          <Link
            href={`/blog/${blog.slug}`}
            className="flex flex-col group transition-all duration-300 h-full"
          >
            <div className="space-y-4 text-left h-full flex flex-col">
              <h3 className="text-xl font-semibold group-hover:text-text-800 group-hover:underline transition-colors">
                {blog.title}
              </h3>
              <p className="">{blog.subheader}</p>
              <div className="flex gap-1">
                {blog.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>
            </div>
          </Link>
        </Card>
      ))}
      <SectionSubheader className="mt-16">
        More thoughts coming eventually!
      </SectionSubheader>
    </div>
  );
}
