import SectionShell from "@/components/layout/SectionShell";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <SectionShell id="projects" title="Projects">
      <div className="col-span-1 md:col-span-4 space-y-24">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
