import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyChoose from './components/sections/WhyChoose'
import Technologies from './components/sections/Technologies'
import Approach from './components/sections/Approach'
import Industries from './components/sections/Industries'
import CTABanner from './components/sections/CTABanner'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Technologies />
        <Approach />
        <Industries />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
