"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const QUERY = "(prefers-color-scheme: dark)";

function readSaved(): string | null {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

/**
 * Switches between light and dark. Until the visitor picks one, the site
 * follows the OS setting (see the inline script in layout.tsx).
 */
export default function ThemeToggle() {
  // Null until mounted: the server can't know the theme.
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    // Keep following the OS while no explicit choice is saved.
    const media = matchMedia(QUERY);
    const onChange = (e: MediaQueryListEvent) => {
      if (readSaved()) return;
      document.documentElement.classList.toggle("dark", e.matches);
      setIsDark(e.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    setIsDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage unavailable (private mode): the choice lasts for this page view.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid place-items-center size-9 rounded-full border border-line text-fg transition-colors duration-200 hover:cursor-pointer hover:bg-fg hover:text-bg"
    >
      {isDark === null ? (
        <span className="size-4" />
      ) : isDark ? (
        <FiSun aria-hidden className="size-4" />
      ) : (
        <FiMoon aria-hidden className="size-4" />
      )}
    </button>
  );
}
