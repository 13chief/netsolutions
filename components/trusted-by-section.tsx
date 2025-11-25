"use client"

const companies = [
  { name: "Rogers Law", logo: "Rogers Law" },
  { name: "Maple Realty Group", logo: "Maple Realty" },
  { name: "Northern Health Clinic", logo: "Northern Health" },
  { name: "NetLogistics", logo: "NetLogistics" },
  { name: "Montréal Immigration Services", logo: "MIS" },
  { name: "Pacific Consulting", logo: "Pacific Consulting" },
  { name: "Venture Capital Partners", logo: "VCP" },
  { name: "Alberta Manufacturing Co.", logo: "AMC" },
]

export function TrustedBySection() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by innovative teams across Canada
        </p>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex h-16 min-w-[180px] items-center justify-center rounded-lg bg-card px-8 shadow-sm"
              >
                <span className="whitespace-nowrap text-lg font-semibold text-muted-foreground">{company.logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
