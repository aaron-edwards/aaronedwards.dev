import { render, screen } from "@testing-library/react"
import { ProjectCard } from "../components/project-card"
import type { Project } from "../lib/projects"

const project: Project = {
  slug: "test-project",
  name: "Test Project",
  description: "A test project description.",
  tech: ["React", "TypeScript"],
  href: "https://example.com",
}

describe("ProjectCard", () => {
  it("renders the project name", () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText("Test Project")).toBeInTheDocument()
  })

  it("renders the project description", () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText("A test project description.")).toBeInTheDocument()
  })

  it("renders the tech stack", () => {
    render(<ProjectCard project={project} />)
    expect(screen.getByText(/React/)).toBeInTheDocument()
  })

  it("links to the project href in a new tab", () => {
    render(<ProjectCard project={project} />)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "https://example.com")
    expect(link).toHaveAttribute("target", "_blank")
  })
})
