import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "next-themes";
import LenisProvider from "@/providers/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elwyn Cruz - Full Stack Engineer",
  description:
    "Elwyn Cruz is a Full Stack Engineer passionate about creating wonderful user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning for next-themes
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LenisProvider>
            <div className="w-full ">
              <Navigation />
              <main className="mt-16 min-h-[calc(100vh-64px)] transition-colors duration-200 bg-background text-foreground">
                {children}
              </main>
            </div>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
