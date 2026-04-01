import type { Project } from "@/lib/projects"
import { render, screen } from "@testing-library/react"
import { ProjectGrid } from "../project-grid"

const oneProject: Project[] = [
  {
    slug: "project-one",
    name: "Project One",
    description: "First project.",
    tech: ["React"],
    href: "https://one.example.com",
  },
]

const twoProjects: Project[] = [
  ...oneProject,
  {
    slug: "project-two",
    name: "Project Two",
    description: "Second project.",
    tech: ["Vue"],
    href: "https://two.example.com",
  },
]

describe("ProjectGrid", () => {
  it("renders all project cards", () => {
    render(<ProjectGrid projects={oneProject} />)
    expect(screen.getByText("Project One")).toBeInTheDocument()
  })

  it("renders a ghost card when project count is odd", () => {
    render(<ProjectGrid projects={oneProject} />)
    expect(screen.getByText("coming soon")).toBeInTheDocument()
  })

  it("does not render a ghost card when project count is even", () => {
    render(<ProjectGrid projects={twoProjects} />)
    expect(screen.queryByText("coming soon")).not.toBeInTheDocument()
  })
})
