import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Thank You | NetSolutions",
  description: "Thanks for reaching out to NetSolutions. We will be in touch shortly.",
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#2563eb1a,transparent_35%),radial-gradient(circle_at_bottom_right,#22c55e1a,transparent_30%)]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Thank You
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              We received your request
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Thanks for booking a demo. Our team will review your message and get back to you within one business day.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/70 bg-card/70 shadow-sm backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-card-foreground">What happens next?</h2>
                <p className="mt-3 text-muted-foreground">
                  We will reach out to confirm the best time for a demo and learn more about your workflow goals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/70 bg-card/70 shadow-sm backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-card-foreground">Need something sooner?</h2>
                <p className="mt-3 text-muted-foreground">
                  Call us at +1 (226) 246-0193 or email{" "}
                  <a
                    className="text-primary underline-offset-4 hover:underline"
                    href="mailto:contact.networksmartsolutions@gmail.com"
                  >
                    contact.networksmartsolutions@gmail.com
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
