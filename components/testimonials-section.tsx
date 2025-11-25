import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "NetSolutions automated our intake and reporting — we now save hours every week. The ROI was immediate.",
    author: "A. Reyes",
    role: "Immigration Consultant",
    location: "Toronto",
    initials: "AR",
  },
  {
    quote: "Their AI chatbot handles 80% of our customer inquiries automatically. Game changer for our small team.",
    author: "M. Chen",
    role: "Operations Manager",
    location: "Vancouver",
    initials: "MC",
  },
  {
    quote:
      "Professional, fast, and exactly what we needed. The custom dashboard gives us insights we never had before.",
    author: "J. Dubois",
    role: "Managing Partner",
    location: "Montréal",
    initials: "JD",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Real results from real Canadian businesses
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <blockquote className="mb-6 text-pretty leading-relaxed text-card-foreground">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
