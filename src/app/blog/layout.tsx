export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8">{children}</div>;
}
