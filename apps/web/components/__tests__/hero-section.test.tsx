import { render, screen } from "@testing-library/react"
import { HeroSection } from "../hero-section"

describe("HeroSection", () => {
  it("renders the name as a heading", () => {
    render(<HeroSection />)
    expect(
      screen.getByRole("heading", { name: "Aaron Edwards" })
    ).toBeInTheDocument()
  })

  it("renders the role label", () => {
    render(<HeroSection />)
    expect(screen.getByText("Full-Stack Engineer")).toBeInTheDocument()
  })

  it("renders the bio", () => {
    render(<HeroSection />)
    expect(screen.getByText(/Building tools and products/)).toBeInTheDocument()
  })
})
