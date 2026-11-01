import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { EducationEntry } from "@/types";

export default function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <div className="flex gap-5 p-5 md:p-6 rounded-lg border border-line bg-bg/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      {entry.media &&
        (entry.media.src ? (
          <Image
            src={entry.media.src}
            alt={entry.media.label}
            width={64}
            height={64}
            className="size-14 md:size-16 shrink-0 rounded-lg object-contain bg-white p-1"
          />
        ) : (
          <ImagePlaceholder
            label={entry.media.label}
            aspect="aspect-square"
            className="size-14 md:size-16 shrink-0"
          />
        ))}
      <div className="min-w-0 space-y-2">
        <h3 className="text-xl font-semibold">{entry.degree}</h3>
        <div className="flex items-center gap-3 text-muted">
          <FaBuildingColumns aria-hidden className="shrink-0" />
          <p>{entry.institute}</p>
        </div>
        <div className="flex items-center gap-3 text-muted">
          <FaCalendarAlt aria-hidden className="shrink-0" />
          <p>{entry.duration}</p>
        </div>
        <p className="pt-1 text-lg font-bold">{entry.performance}</p>
      </div>
    </div>
  );
}
