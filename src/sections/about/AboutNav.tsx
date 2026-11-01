import Button from "@/components/ui/Button";
import type { AboutSectionMeta } from "@/types";

interface AboutNavProps {
  sections: AboutSectionMeta[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function AboutNav({ sections, activeId, onSelect }: AboutNavProps) {
  return (
    <nav
      aria-label="About sections"
      className="col-span-1 hidden md:flex md:flex-col gap-3 sticky top-28 h-fit self-start"
    >
      {sections.map(({ id, title }) => {
        const isActive = activeId === id;
        return (
          <Button
            key={id}
            aria-current={isActive ? "true" : undefined}
            className={
              isActive ? "bg-fg text-bg shadow-lg border-fg" : "bg-bg/60 text-fg"
            }
            onClick={() => {
              onSelect(id);
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {title}
          </Button>
        );
      })}
    </nav>
  );
}
