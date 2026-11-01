import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  /** Heading shown in the left rail. Ignored when `aside` is provided. */
  title?: string;
  /** Custom left-rail content (e.g. the profile picture). */
  aside?: ReactNode;
  /** Extra classes for the left rail. */
  asideClassName?: string;
  /** Extra classes for the section. */
  className?: string;
  children: ReactNode;
}

/** Shared 5-column layout: a left rail with a divider, then the content columns. */
export default function SectionShell({
  id,
  title,
  aside,
  asideClassName = "",
  className = "",
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-x-12 px-4 py-16 md:py-24 max-w-7xl mx-auto scroll-mt-20 ${className}`}
    >
      <div
        className={`col-span-1 md:border-r md:border-line md:pr-8 ${asideClassName}`}
      >
        <div className="md:sticky md:top-28">
          {aside ?? <h1 className="text-4xl font-bold">{title}</h1>}
        </div>
      </div>
      {children}
    </section>
  );
}
