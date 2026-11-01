import Image from "next/image";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/types";

function TechList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-lg mb-2 font-semibold">{title}</h4>
      <ul className="text-muted space-y-1">
        {items.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { name, image, description, repo, tech, achievement } = project;

  return (
    <article className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
      <div className="md:col-span-3 max-w-2xl space-y-6">
        <h2 className="text-3xl font-bold">{name}</h2>

        <Image
          src={image.src}
          alt={`${name} screenshot`}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1280px) 672px, 100vw"
          className="w-full h-auto object-contain shadow-xl rounded-lg border border-line"
        />

        <p className="text-lg leading-relaxed">
          <b>{name} </b>
          {description}
        </p>

        {achievement && <p className="text-lg italic">{achievement}</p>}
      </div>

      <div className="md:col-span-1 space-y-6 md:pt-14">
        <TechList title="Frontend" items={tech.frontend} />
        <TechList title="Backend" items={tech.backend} />

        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm underline underline-offset-4 text-muted transition-colors hover:text-fg"
        >
          GitHub Repo
          <SiGithub aria-hidden />
        </a>
      </div>
    </article>
  );
}
