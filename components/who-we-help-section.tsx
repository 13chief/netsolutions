const segments = [
  {
    industry: "Professional Services",
    outcome: "Automated intake that cuts admin time by 35%.",
  },
  {
    industry: "Healthcare Clinics",
    outcome: "Faster follow-ups with secure scheduling workflows.",
  },
  {
    industry: "Trades & Contractors",
    outcome: "Instant quote routing and on-site update alerts.",
  },
  {
    industry: "Scaling SaaS Teams",
    outcome: "Dashboards that surface KPIs in real time.",
  },
]

export function WhoWeHelpSection() {
  return (
    <section className="border-y border-border bg-card/40 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr,2fr]">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Who We Help</p>
            <h2 className="text-2xl font-semibold text-foreground">
              Industries we support with clear outcomes
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {segments.map((segment) => (
              <div key={segment.industry} className="rounded-lg border border-border bg-background/80 p-4">
                <p className="text-sm font-semibold text-foreground">{segment.industry}</p>
                <p className="mt-1 text-sm text-muted-foreground">{segment.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
