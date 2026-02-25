import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { CodeShowcase } from "@/components/code-showcase"
import { GameplaySection } from "@/components/gameplay-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <CodeShowcase />
      <GameplaySection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
