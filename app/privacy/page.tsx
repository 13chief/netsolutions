import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

type PolicySection = {
  title: string
  description: string
  points?: string[]
}

const policySections: PolicySection[] = [
  {
    title: "Information We Collect",
    description: "We collect information you provide directly to us and data that is collected automatically when you use our site.",
    points: [
      "Contact details such as name, email, and phone number when you submit a form or request a consultation.",
      "Business context you share about your project needs, goals, or existing systems.",
      "Usage data such as browser type, pages viewed, and access times to help us improve site performance.",
    ],
  },
  {
    title: "How We Use Information",
    description: "We use your information to provide and improve our services, communicate with you, and maintain site security.",
    points: [
      "Responding to inquiries, scheduling consultations, and delivering project proposals.",
      "Operating, analyzing, and enhancing our website and service offerings.",
      "Sending service updates or notices related to your requests or engagements.",
    ],
  },
  {
    title: "Cookies and Analytics",
    description:
      "We may use cookies and similar technologies to understand site usage and improve user experience. You can adjust your browser settings to refuse cookies.",
    points: [
      "Analytics tools help us measure site traffic and understand which pages are most useful.",
      "Disabling cookies may affect certain site features or functionality.",
    ],
  },
  {
    title: "Sharing of Information",
    description: "We do not sell your personal information. Limited sharing occurs only to support our services or when required by law.",
    points: [
      "Service providers that assist with hosting, analytics, communications, or project delivery, under confidentiality obligations.",
      "Compliance with legal obligations, court orders, or to protect our rights and the security of our users.",
    ],
  },
  {
    title: "Data Security",
    description: "We implement reasonable technical and organizational measures to protect your information from unauthorized access or misuse.",
    points: [
      "Access to personal data is limited to personnel who need it to perform their roles.",
      "No security measure is perfect; please use caution when transmitting sensitive information online.",
    ],
  },
  {
    title: "Data Retention",
    description: "We retain personal information only as long as necessary for the purposes described in this Policy or as required by law.",
    points: [
      "If you request deletion, we will remove or anonymize your information unless legal or contractual obligations require retention.",
      "Aggregate or de-identified data may be kept for analytics and service improvement.",
    ],
  },
  {
    title: "Your Choices and Rights",
    description: "You can request access, updates, or deletion of your personal information, subject to applicable laws.",
    points: [
      "To exercise these rights, contact us using the email below; we may need to verify your identity before processing requests.",
      "You may opt out of non-essential communications at any time.",
    ],
  },
  {
    title: "International Data Transfers",
    description:
      "Our services are based in Canada, but service providers may process data in other regions. We take steps to ensure appropriate safeguards are in place.",
  },
  {
    title: "Policy Updates",
    description:
      "We may update this Privacy Policy periodically. Material changes will be noted by updating the date below and, where appropriate, by providing additional notice.",
  },
]

export const metadata: Metadata = {
  title: "Privacy Policy | NetSolutions",
  description: "Learn how NetSolutions collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#2563eb1a,transparent_35%),radial-gradient(circle_at_bottom_right,#22c55e1a,transparent_30%)]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Privacy
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              This Policy explains what information we collect, how we use it, and the choices you have. Your trust is important to us, and we aim to be clear about our practices.
            </p>
            <div className="rounded-xl border border-border/70 bg-card/60 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">Last updated: March 1, 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-6">
            {policySections.map((section, index) => (
              <div
                key={section.title}
                className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-xl font-semibold text-card-foreground">{section.title}</h2>
                    <p className="text-muted-foreground">{section.description}</p>
                    {section.points?.length ? (
                      <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-primary/5 p-6">
            <h3 className="text-lg font-semibold text-card-foreground">Questions about this Policy?</h3>
            <p className="mt-2 text-muted-foreground">
              Reach our team at{" "}
              <a
                className="text-primary underline-offset-4 hover:underline"
                href="mailto:contact.networksmartsolutions@gmail.com"
              >
                contact.networksmartsolutions@gmail.com
              </a>{" "}
              for questions or to submit a privacy request.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
