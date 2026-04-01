type Project = {
  slug: string
  name: string
  description: string
  tech: string[]
  href: string
}

const projects: Project[] = [
  {
    slug: "resume-bot",
    name: "ResumeBot",
    description:
      "Interactive resume chatbot — ask questions about my background and experience, powered by Google Gemini.",
    tech: ["React", "Fastify", "Gemini"],
    href: "https://aaron-edwards-resumebot.web.app/",
  },
]

export { projects }
export type { Project }
