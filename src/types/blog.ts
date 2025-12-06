export enum BlogTag {
  CODING = "coding",
  GAMING = "gaming",
  COOKING = "cooking",
}

export type BlogPreview = {
  slug: string;
  title: string;
  subheader: string;
  tags: BlogTag[];
  createdOn: string;
};

export interface Blog extends BlogPreview {
  content: string;
}
