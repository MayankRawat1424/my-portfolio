import Image from "next/image";
import { FaAward, FaCalendarAlt } from "react-icons/fa";
import type { CertificationEntry } from "@/types";

export default function CertificationCard({
  entry,
}: {
  entry: CertificationEntry;
}) {
  return (
    <div className="flex gap-5 p-5 md:p-6 rounded-lg border border-line bg-bg/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      {entry.logo && (
        <Image
          src={entry.logo}
          alt=""
          width={64}
          height={64}
          className="size-14 md:size-16 shrink-0 rounded-lg object-contain bg-white p-2"
        />
      )}
      <div className="min-w-0 space-y-2">
        <div className="flex items-baseline gap-3">
          {!entry.logo && <FaAward aria-hidden className="shrink-0 text-muted" />}
          <h3 className="text-xl font-semibold">{entry.title}</h3>
        </div>
        <p className="text-muted">{entry.issuer}</p>
        <div className="flex items-center gap-3 text-muted">
          <FaCalendarAlt aria-hidden className="shrink-0" />
          <p>{entry.year}</p>
        </div>
        {entry.detail && (
          <p className="pt-1 text-lg font-bold">{entry.detail}</p>
        )}
      </div>
    </div>
  );
}
