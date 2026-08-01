"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { IconMoon, IconSun } from "@/components/icons";

const storageKey = "disi-theme";

function setTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  localStorage.setItem(storageKey, theme);
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = saved ?? systemTheme;

    setThemeState(initialTheme);
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => {
        const nextTheme = isDark ? "light" : "dark";
        setThemeState(nextTheme);
        setTheme(nextTheme);
      }}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40",
        !mounted && "opacity-0"
      )}
    >
      {isDark ? <IconSun className="h-4.5 w-4.5" /> : <IconMoon className="h-4.5 w-4.5" />}
    </button>
  );
}
