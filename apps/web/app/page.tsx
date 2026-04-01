import { HeroSection } from "@/components/hero-section"
import { ProjectGrid } from "@/components/project-grid"
import { ThemeToggle } from "@/components/theme-toggle"
import { projects } from "@/lib/projects"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="mx-auto flex w-full max-w-lg flex-1 flex-col gap-12 px-8 py-12">
        <HeroSection />
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
              Projects
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <ProjectGrid projects={projects} />
        </section>
      </main>
    </div>
  )
}
