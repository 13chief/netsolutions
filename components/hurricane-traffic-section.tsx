import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  "High-intent lead funnels built for service businesses",
  "Paid traffic tuned for quality conversions, not just clicks",
  "CRM-ready delivery with transparent reporting",
  "Rapid launch playbooks to start seeing leads fast",
]

export function HurricaneTrafficSection() {
  return (
    <section id="hurricane-traffic" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#2563eb14,transparent_35%),radial-gradient(circle_at_bottom_right,#22c55e14,transparent_30%)]" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Lead Generation
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
              Need qualified leads fast? Meet HurricaneTraffic
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Our sister site, HurricaneTraffic.today, specializes in high-intent campaigns that bring in leads and
              steady traffic for growth-focused teams.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-border/70 bg-card/60 p-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" asChild>
                <a href="https://hurricanetraffic.today" target="_blank" rel="noreferrer">
                  Visit HurricaneTraffic.today
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/#contact">Talk to our team</Link>
              </Button>
            </div>
          </div>

          <Card className="border-primary/10 bg-card/70 shadow-lg backdrop-blur-sm">
            <CardContent className="p-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Why HurricaneTraffic
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">Lead engines built for momentum</h3>
              <p className="text-muted-foreground">
                We pair paid traffic strategy with conversion-focused landing pages and follow-up sequences to keep
                your pipeline full of qualified prospects.
              </p>
              <div className="rounded-lg border border-border bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">
                  Want to see how it works? Tap the button above to explore HurricaneTraffic and get a plan for your
                  niche.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
