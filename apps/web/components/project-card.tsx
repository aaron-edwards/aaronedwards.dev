import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const initials = project.slug.slice(0, 2)

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-border bg-card p-5 transition-colors hover:border-emerald-900/50"
    >
      <div className="mb-3.5 flex h-8 w-8 items-center justify-center rounded-md border border-emerald-900 bg-emerald-950">
        {project.icon ? (
          <img src={project.icon} alt="" className="h-5 w-5" />
        ) : (
          <span className="font-mono text-xs text-emerald-400">{initials}</span>
        )}
      </div>
      <p className="mb-1.5 text-sm font-semibold text-foreground">
        {project.name}
      </p>
      <p className="mb-3.5 text-xs leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <p className="font-mono text-[10px] text-muted-foreground/50">
        {project.tech.join(" · ")} →
      </p>
    </a>
  )
}

export { ProjectCard }
