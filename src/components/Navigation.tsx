"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = ({ target }: MouseEvent) => {
    if (!isMenuOpen) {
      return;
    }
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (navRef.current && !navRef.current.contains(target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link scroll={false} href="/" className="flex items-center space-x-2">
            <Image
              className="w-8 h-8 rounded-full"
              src="/smiley-crop.png"
              alt="Elwyn Cruz"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold">Elwyn Cruz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link scroll={false} href="/?section=about">
                About
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link scroll={false} href="/?section=experience">
                Experience
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link scroll={false} href="/?section=hobbies">
                Hobbies
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link scroll={false} href="/?section=contact">
                Contact
              </Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button
                asChild
                onClick={closeMenu}
                variant="ghost"
                className="w-full justify-start"
              >
                <Link scroll={false} href="/?section=about">
                  About
                </Link>
              </Button>
              <Button
                asChild
                onClick={closeMenu}
                variant="ghost"
                className="w-full justify-start"
              >
                <Link scroll={false} href="/?section=experience">
                  Experience
                </Link>
              </Button>
              <Button
                asChild
                onClick={closeMenu}
                variant="ghost"
                className="w-full justify-start"
              >
                <Link scroll={false} href="/?section=hobbies">
                  Hobbies
                </Link>
              </Button>
              <Button
                asChild
                onClick={closeMenu}
                variant="ghost"
                className="w-full justify-start"
              >
                <Link scroll={false} href="/?section=contact">
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
