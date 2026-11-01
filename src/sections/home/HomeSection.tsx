import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import { CERT_BADGES, HOME_HIGHLIGHTS, PHOTOS } from "@/data/site";

export default function HomeSection() {
  return (
    <SectionShell
      id="home"
      aside={
        <Image
          src="/MRawat2.jpeg"
          alt="Mayank Rawat"
          width={150}
          height={150}
          className="w-[150px] h-[150px] object-cover object-top rounded-lg"
          priority
        />
      }
    >
      <div className="col-span-1 md:col-span-3 max-w-2xl space-y-6">
        <p className="font-bold text-3xl">Hi, I&apos;m Mayank Rawat</p>
        <p className="text-3xl leading-snug">
          Systems Engineer at Infosys, with a passion for building clean, fast,
          and accessible interfaces for the web.
        </p>
        <p className="text-xl leading-relaxed tracking-wide text-muted">
          I graduated in 2026 with a B.Tech in Computer Science from Graphic
          Era Hill University. Before joining Infosys, I spent five months as a
          Junior Front-end Developer at Gig Healthcare, migrating a production
          app to Next.js and TypeScript and shipping it on AWS.
        </p>
        <p className="text-xl leading-relaxed tracking-wide text-muted">
          Explore my work and learn more about me: see projects I&apos;m proud
          of, or get in touch to collaborate.
        </p>
        <Image
          src={PHOTOS.home.src}
          alt={PHOTOS.home.alt}
          width={PHOTOS.home.width}
          height={PHOTOS.home.height}
          sizes="(min-width: 1280px) 672px, 100vw"
          className="mt-10 w-full aspect-video object-cover rounded-lg border border-line shadow-xl"
        />
      </div>

      <div className="col-span-1 space-y-10">
        <dl className="space-y-6">
          {HOME_HIGHLIGHTS.map(({ title, description }) => (
            <div key={title}>
              <dt className="mb-1 font-semibold">{title}</dt>
              <dd className="text-muted leading-relaxed">{description}</dd>
            </div>
          ))}
        </dl>

        <div>
          <ul className="flex flex-col items-center gap-10">
            {CERT_BADGES.map(({ name, src, width, height, href }) => {
              const badge = (
                <Image
                  src={src}
                  alt={name}
                  title={name}
                  width={width}
                  height={height}
                  className="h-36 w-auto transition-transform duration-300 hover:scale-105"
                />
              );
              return (
                <li key={name}>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {badge}
                    </a>
                  ) : (
                    badge
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
