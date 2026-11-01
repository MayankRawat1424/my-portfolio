"use client";

import { useEffect, useState } from "react";

/** Tracks which of the given element ids most recently scrolled into view. */
export function useActiveSection(ids: readonly string[], threshold = 0.3) {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { threshold },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, threshold]);

  return [activeId, setActiveId] as const;
}
