import { render, screen } from "@testing-library/react"
import Page from "../page"

vi.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme: "dark", setTheme: vi.fn() }),
}))

describe("Page", () => {
  it("renders the name heading", () => {
    render(<Page />)
    expect(
      screen.getByRole("heading", { name: "Aaron Edwards" })
    ).toBeInTheDocument()
  })

  it("renders the ResumeBot project card", () => {
    render(<Page />)
    expect(screen.getByText("ResumeBot")).toBeInTheDocument()
  })

  it("renders the theme toggle button", () => {
    render(<Page />)
    expect(
      screen.getByRole("button", { name: "Toggle theme" })
    ).toBeInTheDocument()
  })
})
