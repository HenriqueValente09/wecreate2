import { useState } from 'react'
import './App.css'
import { LanguageProvider } from './components/language-context'
import Navbar from './components/navbar'
import HeroSection from './components/hero-section'
import Gallery from './components/gallery'
import ServicesSection from './components/services-carousel'
import AboutSection from './components/about-section'
import ContactSection from './components/contact-section'
import Footer from './components/footer'
import WhatsAppButton from './components/whatsapp-button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
        <main className="min-h-screen w-full bg-black">
          <Navbar />
          <HeroSection />
          <Gallery />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
          <Footer />
          <WhatsAppButton />
        </main>
      </LanguageProvider>
    </>
  )
}

export default App
