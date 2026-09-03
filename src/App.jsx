import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import About from './components/About.jsx'
import Chairman from './components/Chairman.jsx'
import WhyUs from './components/WhyUs.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FAB from './components/FAB.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <HowItWorks />
        <About />
        <Chairman />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FAB />
    </>
  )
}
