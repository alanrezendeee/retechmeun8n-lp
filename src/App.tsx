import { LiveVisitorsBadge } from './components/LiveVisitorsBadge'
import { Benefits } from './sections/Benefits'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { Pricing } from './sections/Pricing'
import { Problem } from './sections/Problem'
import { SocialProof } from './sections/SocialProof'
import { Solution } from './sections/Solution'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <SocialProof />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
      <LiveVisitorsBadge />
    </>
  )
}
