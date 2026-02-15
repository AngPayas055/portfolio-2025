import { projects } from "@/app/data/projects";
import { ProjectCard } from "@/app/components/cards/ProjectCard";

export function ProjectList() {
  return (
    <div className="space-y-6">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}
