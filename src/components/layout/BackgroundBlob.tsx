"use client";

import { useEffect, useState } from "react";

/** Blob colour for each top-level section, keyed by section id. */
const SECTION_COLORS: Record<string, string> = {
  home: "#818cf8", // indigo
  about: "#2dd4bf", // teal
  projects: "#fbbf24", // amber
  contact: "#f472b6", // pink
};

const SECTION_IDS = Object.keys(SECTION_COLORS);

/**
 * A blurred vector blob fixed behind the page. Its colour follows whichever
 * section is crossing the middle of the viewport.
 */
export default function BackgroundBlob() {
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    // A zero-height band at the viewport's centre line: works for sections of
    // any height, unlike a visibility-ratio threshold.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="blob-drift absolute top-1/2 left-1/2 w-[min(90vw,850px)] -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 200 200"
          className="blob-wobble w-full h-auto opacity-50 dark:opacity-25 blur-[120px]"
        >
          <path
            d="M44.7,-58.1C57.6,-49.6,67.2,-35.6,71.6,-19.9C76,-4.2,75.2,13.2,68.4,27.6C61.6,42,48.8,53.4,34.3,61.3C19.8,69.2,3.6,73.6,-13.4,72.6C-30.4,71.6,-48.2,65.2,-59.5,52.6C-70.8,40,-75.6,21.2,-74.3,3.3C-73,-14.6,-65.6,-31.6,-53.6,-40.6C-41.6,-49.6,-25,-50.6,-9.6,-55.6C5.8,-60.6,31.8,-66.6,44.7,-58.1Z"
            transform="translate(100 100)"
            fill={SECTION_COLORS[activeId]}
            className="transition-[fill] duration-1000 ease-in-out"
          />
        </svg>
      </div>
    </div>
  );
}
