interface ImagePlaceholderProps {
  /** Suggests what kind of photo belongs here. */
  label: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-video" or "aspect-square". */
  aspect?: string;
  className?: string;
}

/**
 * An empty, thin-bordered frame that reserves space for a future photo.
 * Swap it for `next/image` with the same aspect class once the image exists.
 */
export default function ImagePlaceholder({
  label,
  aspect = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <figure
      className={`${aspect} grid place-items-center rounded-lg border border-dashed border-line p-2 ${className}`}
    >
      <figcaption className="text-center text-xs font-mono text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
