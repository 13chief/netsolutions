import type { Metadata } from "next"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

type TermSection = {
  title: string
  description: string
  points?: string[]
}

const termsSections: TermSection[] = [
  {
    title: "Acceptance of Terms",
    description:
      "By accessing the NetSolutions website, booking a consultation, or using any services we provide, you confirm that you have the authority to enter into these Terms on behalf of yourself or your organization.",
    points: [
      "If you do not agree with these Terms, do not use the site or services.",
      "We may update these Terms from time to time; continued use constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "Use of Website and Services",
    description:
      "You may use our site to learn about our services and to engage with our team for legitimate business purposes.",
    points: [
      "You agree not to misuse, disrupt, or attempt to gain unauthorized access to the site or its underlying systems.",
      "You will provide accurate, current information when submitting inquiries or requests.",
      "You are responsible for complying with applicable laws when using our website or services.",
    ],
  },
  {
    title: "Engagements and Scope",
    description:
      "Project work (including consulting, development, and support) is defined in written proposals or statements of work (SOWs).",
    points: [
      "Each SOW will describe scope, deliverables, responsibilities, pricing, and timelines.",
      "If there is a conflict between an SOW and these Terms, the SOW controls for that engagement.",
      "Change requests may adjust scope, delivery dates, or fees by mutual agreement in writing.",
    ],
  },
  {
    title: "Fees, Invoicing, and Taxes",
    description: "Unless an SOW states otherwise, invoices are due within fifteen (15) days of the invoice date.",
    points: [
      "Late payments may result in suspension of work until balances are resolved.",
      "Fees exclude applicable taxes, duties, or government charges, which you are responsible for paying.",
      "Deposits or milestone payments may be required for project work and will be noted in the applicable SOW.",
    ],
  },
  {
    title: "Intellectual Property",
    description:
      "We respect each party's intellectual property. Pre-existing materials remain the property of the originating party.",
    points: [
      "Upon full payment, you receive a license to use project deliverables for your internal business purposes unless an SOW states otherwise.",
      "We retain ownership of our tools, templates, and know-how, and may reuse generalized learnings that do not include your confidential information.",
      "You are responsible for ensuring you have rights to any assets or data you provide for use in a project.",
    ],
  },
  {
    title: "Confidentiality and Data",
    description:
      "Both parties agree to protect confidential information disclosed during an engagement and to use it only for performing the services.",
    points: [
      "Do not transmit regulated or sensitive data (such as PHI or PCI data) through this site unless explicitly agreed in writing.",
      "Each party will limit access to confidential information to personnel and subcontractors who need to know and are bound by similar obligations.",
      "We process personal data in line with applicable law and our privacy practices.",
    ],
  },
  {
    title: "Warranties and Disclaimers",
    description:
      "Except as expressly stated in an SOW, the website and services are provided on an \"as is\" and \"as available\" basis.",
    points: [
      "We do not warrant that the site or services will be uninterrupted or error free.",
      "To the fullest extent permitted by law, we disclaim implied warranties including merchantability, fitness for a particular purpose, and non-infringement.",
    ],
  },
  {
    title: "Liability and Indemnity",
    description: "We each aim to limit risk to what is reasonable for both parties.",
    points: [
      "Neither party is liable for indirect, incidental, special, or consequential damages.",
      "Our aggregate liability arising from the services is limited to the fees you paid to us for the services giving rise to the claim in the six (6) months before the event.",
      "You agree to indemnify us against third-party claims arising from your misuse of the services or any content or data you provide.",
    ],
  },
  {
    title: "Termination",
    description:
      "Either party may terminate an engagement as permitted in the applicable SOW or with written notice where allowed by law.",
    points: [
      "You remain responsible for fees incurred up to the effective termination date.",
      "Obligations related to payment, confidentiality, intellectual property, and limitation of liability survive termination.",
    ],
  },
  {
    title: "Governing Law and Disputes",
    description:
      "These Terms are governed by the laws of the Province of Ontario, Canada, without regard to its conflict of law principles.",
    points: [
      "The parties agree to the exclusive jurisdiction and venue of the courts located in Ontario for any disputes arising from these Terms.",
      "Nothing prevents either party from seeking injunctive relief in any jurisdiction to protect its confidential information or intellectual property.",
    ],
  },
]

export const metadata: Metadata = {
  title: "Terms & Conditions | NetSolutions",
  description: "Read the terms and conditions governing the NetSolutions website, consultations, and client engagements.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#2563eb1a,transparent_35%),radial-gradient(circle_at_bottom_right,#22c55e1a,transparent_30%)]" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Legal
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground">
              These Terms explain how you may use the NetSolutions website and how we work together during consultations
              and client projects. Please read them carefully before engaging with us.
            </p>
            <div className="rounded-xl border border-border/70 bg-card/60 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">
                Last updated: March 1, 2025. By continuing to use our site or services, you acknowledge and agree to
                these Terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-6">
            {termsSections.map((section, index) => (
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
            <h3 className="text-lg font-semibold text-card-foreground">Questions about these Terms?</h3>
            <p className="mt-2 text-muted-foreground">
              Reach our team at{" "}
              <a
                className="text-primary underline-offset-4 hover:underline"
                href="mailto:contact.networksmartsolutions@gmail.com"
              >
                contact.networksmartsolutions@gmail.com
              </a>{" "}
              for clarifications or to request a signed copy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
