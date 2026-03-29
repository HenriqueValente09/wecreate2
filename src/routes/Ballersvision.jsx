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
  { src: "/ballersvision/ballersvision-1.jpg", alt: "Sports", span: "col-span-2 row-span-2" },
  { src: "/ballersvision/ballersvision-2.jpg", alt: "Sports", span: "col-span-1 row-span-1" },
  { src: "/ballersvision/ballersvision-3.jpg", alt: "Sports", span: "col-span-1 row-span-2" },
  { src: "/ballersvision/ballersvision-4.jpg", alt: "Sports", span: "col-span-1 row-span-1" },
  { src: "/ballersvision/ballersvision-5.jpg", alt: "Sports", span: "col-span-2 row-span-1" },
  { src: "/ballersvision/ballersvision-6.jpg", alt: "Sports", span: "col-span-1 row-span-1" },
  { src: "/ballersvision/ballersvision-7.jpg", alt: "Sports", span: "col-span-1 row-span-1" },
  { src: "/ballersvision/ballersvision-8.jpg", alt: "Sports", span: "col-span-2 row-span-2" },
  { src: "/ballersvision/ballersvision-9.jpg", alt: "Sports", span: "col-span-1 row-span-2" },
]

function Ballersvision() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageProvider>
        <main className="min-h-screen w-full bg-black">
          <Navbar />
          <HeroSection />
          <Gallery images={images} />
          <ServicesCarousel />
          <ContactSection />
          <Footer />
          <WhatsAppButton />
        </main>
      </LanguageProvider>
    </>
  )
}

export default Ballersvision
