import { BlogTag } from "@/types/blog";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type TagBadgeProps = {
  tag: BlogTag;
};

// TODO: make tags different colors
export const TagBadge = ({ tag }: TagBadgeProps) => {
  return <Badge>{tag}</Badge>;
};
