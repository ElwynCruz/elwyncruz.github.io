import Link from "next/link";
import Card from "../ui/card";
import { SectionHeader, SectionSubheader } from "./Headers";
import { SectionContainer } from "./SectionContainer";
import { blogs } from "@/constants/blogData";
import { TagBadge } from "../blog/TagBadge";
import { Button } from "../ui/button";

export default function HobbiesSection() {
  const recentBlogs = blogs.slice(0, 3);

  return (
    <SectionContainer id="hobbies">
      <SectionHeader>Hobbies & Interests</SectionHeader>
      <SectionSubheader>Thoughts, recipes, and ramblings</SectionSubheader>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentBlogs.map((blog, index) => (
          <Card key={index}>
            <Link
              href={`/blog/${blog.slug}`}
              className="flex flex-col group transition-all duration-300 h-full"
            >
              <div className="space-y-4 text-left h-full flex flex-col">
                <div className="flex gap-1">
                  {blog.tags.map((tag) => (
                    <TagBadge key={tag} tag={tag} />
                  ))}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-800 transition-colors">
                  {blog.title}
                </h3>
                <p className="">{blog.subheader}</p>
                <span className="mt-auto font-medium group-hover:underline">
                  Read more →
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
      <div className="mx-auto my-4">
        <Button variant="link" asChild>
          <Link href="/blog" scroll={false}>
            View more
          </Link>
        </Button>
      </div>
    </SectionContainer>
  );
}
