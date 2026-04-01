import { ProjectCard } from "@/components/project-card"
import type { Project } from "@/lib/projects"

interface ProjectGridProps {
  projects: Project[]
}

function ProjectGrid({ projects }: ProjectGridProps) {
  const showGhost = projects.length % 2 !== 0

  return (
    <div className="grid grid-cols-2 gap-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
      {showGhost && (
        <div className="flex items-center justify-center rounded-lg border border-dashed border-border p-5">
          <span className="font-mono text-xs text-muted-foreground/30">
            coming soon
          </span>
        </div>
      )}
    </div>
  )
}

export { ProjectGrid }
