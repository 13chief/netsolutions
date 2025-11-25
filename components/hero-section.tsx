import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[800px] w-[1400px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Trusted by Canadian Businesses
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
            Network Solutions for Smarter Business
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground lg:text-xl">
            We help Canadian companies save time, reduce costs, and scale efficiently with AI-driven workflow
            automation.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="#contact">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          {/* Decorative element */}
          <div className="mt-16 lg:mt-24">
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
              <img
                src="/modern-dashboard-workflow-automation-interface.jpg"
                alt="Workflow Automation Dashboard"
                className="w-full rounded-xl border border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
