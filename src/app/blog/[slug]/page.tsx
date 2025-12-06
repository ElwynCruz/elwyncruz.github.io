import { BlogDetailContainer } from "@/components/blog/BlogDetailContainer";
import { blogs } from "@/constants/blogData";

export const dynamicParams = false;
export function generateStaticParams() {
  const slugs = ["react-query-merchant", "chili-oil", "m24-tbd-1"];
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlog(slug);

  return <BlogDetailContainer blog={blog!} />;
}

const getBlog = (slug: string) => {
  return blogs.find((blog) => blog.slug === slug);
};
