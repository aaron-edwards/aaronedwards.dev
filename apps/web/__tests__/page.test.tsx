import { render, screen } from "@testing-library/react"
import Page from "../app/page"

describe("Page", () => {
  it("renders the heading", () => {
    render(<Page />)
    expect(
      screen.getByRole("heading", { name: "Project ready!" })
    ).toBeInTheDocument()
  })

  it("renders the getting started text", () => {
    render(<Page />)
    expect(
      screen.getByText("You may now add components and start building.")
    ).toBeInTheDocument()
  })

  it("renders a button", () => {
    render(<Page />)
    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument()
  })
})
