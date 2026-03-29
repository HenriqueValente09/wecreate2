import { useState } from 'react'
import '../App.css'
import { LanguageProvider } from '../components/language-context'
import Navbar from '../components/navbar'
import HeroSection from '../components/hero-section'
import Gallery from '../components/gallery'
import ServicesCarousel from '../components/services-carousel'
import AboutSection from '../components/about-section'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'
import WhatsAppButton from '../components/whatsapp-button'

const images = [
  { src: "/wemoment/wemoment-1.jpg", alt: "Wedding", span: "col-span-2 row-span-2" },
  { src: "/wemoment/wemoment-2.jpg", alt: "Wedding", span: "col-span-1 row-span-1" },
  { src: "/wemoment/wemoment-3.jpg", alt: "Wedding", span: "col-span-1 row-span-2" },
  { src: "/wemoment/wemoment-4.jpg", alt: "Wedding", span: "col-span-1 row-span-1" },
  { src: "/wemoment/wemoment-5.jpg", alt: "Wedding", span: "col-span-2 row-span-2" },
]

function Wemoment() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
        <main className="min-h-screen w-full bg-black">
          <Navbar />
          <HeroSection />
          <Gallery images={images}/>
          <ServicesCarousel />
          <ContactSection />
          <Footer />
          <WhatsAppButton />
        </main>
      </LanguageProvider>
    </>
  )
}

export default Wemoment
