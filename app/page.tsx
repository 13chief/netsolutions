import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HurricaneTrafficSection } from "@/components/hurricane-traffic-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TrustedBySection />
      <TestimonialsSection />
      <HurricaneTrafficSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
