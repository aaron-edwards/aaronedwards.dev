function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
        <span className="font-mono text-lg text-muted-foreground">AE</span>
      </div>
      <h1 className="mb-1.5 text-2xl font-bold tracking-tight text-foreground">
        Aaron Edwards
      </h1>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-teal-400">
        Full-Stack Engineer
      </p>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        Building tools and products I believe in. Currently focused on
        AI-augmented developer workflows.
      </p>
    </div>
  )
}

export { HeroSection }
