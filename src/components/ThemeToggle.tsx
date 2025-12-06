"use client";

import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { Theme } from "@/constants/theme";

interface ThemeToggleProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({
  size = "icon",
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDark = theme === Theme.DARK;

  const cycleTheme = () => {
    if (isDark) {
      setTheme(Theme.LIGHT);
    } else {
      setTheme(Theme.DARK);
    }
  };

  const getIcon = () => {
    return isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />;
  };

  const getLabel = () => {
    return isDark ? "Light" : "Dark";
  };

  const getAriaLabel = () => {
    return isDark ? "Switch to light mode" : "Switch to dark mode";
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="w-9 h-9 bg-muted" />;
  }

  if (showLabel) {
    return (
      <Button
        variant={"ghost"}
        size={size}
        onClick={cycleTheme}
        className={`flex items-center space-x-2 ${className}`}
        aria-label={getAriaLabel()}
      >
        {getIcon()}
        <span>{getLabel()}</span>
      </Button>
    );
  }

  return (
    <Button
      variant={"ghost"}
      size={size}
      onClick={cycleTheme}
      className={className}
      aria-label={getAriaLabel()}
      title={`Current: ${isDark ? "Dark" : "Light"} mode`}
    >
      {getIcon()}
    </Button>
  );
}
