import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { ExperienceEntry } from "@/types";

export default function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pl-6 border-l border-line">
      {/* Timeline dot */}
      <span
        aria-hidden
        className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-fg"
      />
      <div className="flex items-start gap-4 mb-4">
        {entry.logo ? (
          <Image
            src={entry.logo}
            alt={`${entry.company} logo`}
            width={56}
            height={56}
            className="size-14 shrink-0 rounded-lg object-contain"
          />
        ) : (
          <ImagePlaceholder
            label="Logo"
            aspect="aspect-square"
            className="size-14 shrink-0"
          />
        )}
        <div>
          <h3 className="text-2xl font-semibold">{entry.company}</h3>
          <p className="text-lg">{entry.role}</p>
          <p className="text-sm text-muted">{entry.duration}</p>
        </div>
      </div>
      {entry.description && <p className="text-lg">{entry.description}</p>}
      {entry.highlights && (
        <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed marker:text-muted">
          {entry.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
