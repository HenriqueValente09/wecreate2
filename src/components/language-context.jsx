import { createContext, useContext, useState } from "react"

const translations = {
  en: {
    nav: { home: "Home", gallery: "Gallery", services: "Services", about: "About", contact: "Contact" },
    hero: { subtitle: "Capturing moments that last forever" },
    gallery: { title: "Our Work", subtitle: "A glimpse into our creative vision" },
    services: {
      title: "Our Services",
      wecreate: {
        name: "wecreate",
        desc: "Creative photography that tells your unique story. From editorial shoots to brand campaigns, we bring artistic vision to every frame.",
        button: "Learn more",
      },
      ballersvision: {
        name: "ballersvision",
        desc: "Dynamic sports photography that freezes the intensity and passion of athletic excellence in stunning detail.",
        button: "Learn more",
      },
    },
    about: {
      title: "About Us",
      text: "We are a passionate team of photographers dedicated to capturing the essence of every moment. With years of experience across weddings, sports, and creative projects, we bring a unique perspective to every shoot.",
      stats: { years: "Years Experience", projects: "Projects Done", clients: "Happy Clients" },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you",
      socialTitle: "Follow Us",
      formTitle: "Send a Message",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    whatsapp: { placeholder: "Type your message...", send: "Send via WhatsApp" },
  },

  pt: {
    nav: { home: "Início", gallery: "Galeria", services: "Serviços", about: "Sobre", contact: "Contato" },
    hero: { subtitle: "Capturando momentos que duram para sempre" },
    gallery: { title: "Nosso Trabalho", subtitle: "Um vislumbre da nossa visão criativa" },
    services: {
      title: "Nossos Serviços",
      wecreate: {
        name: "wecreate",
        desc: "Fotografia criativa que conta sua história única. De ensaios editoriais a campanhas de marca, trazemos visão artística para cada quadro.",
        button: "Conhecer mais",
      },

      ballersvision: {
        name: "ballersvision",
        desc: "Fotografia esportiva dinâmica que congela a intensidade e paixão da excelência atlética em detalhes impressionantes.",
        button: "Conhecer mais",
      },
    },
    about: {
      title: "Sobre Nós",
      text: "Somos uma equipe apaixonada de fotógrafos dedicados a capturar a essência de cada momento. Com anos de experiência em casamentos, esportes e projetos criativos, trazemos uma perspectiva única para cada ensaio.",
      stats: { years: "Anos de Experiência", projects: "Projetos Realizados", clients: "Clientes Felizes" },
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Adoraríamos ouvir você",
      socialTitle: "Siga-nos",
      formTitle: "Envie uma Mensagem",
      name: "Seu Nome",
      email: "Seu Email",
      message: "Sua Mensagem",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Falha ao enviar mensagem. Tente novamente.",
    },
    whatsapp: { placeholder: "Digite sua mensagem...", send: "Enviar via WhatsApp" },
  },

  es: {
    nav: { home: "Inicio", gallery: "Galería", services: "Servicios", about: "Nosotros", contact: "Contacto" },
    hero: { subtitle: "Capturando momentos que duran para siempre" },
    gallery: { title: "Nuestro Trabajo", subtitle: "Un vistazo a nuestra visión creativa" },
    services: {
      title: "Nuestros Servicios",
      wecreate: {
        name: "wecreate",
        desc: "Fotografía creativa que cuenta tu historia única. Desde sesiones editoriales hasta campañas de marca, aportamos visión artística a cada toma.",
        button: "Conocer más",
      },
      ballersvision: {
        name: "ballersvision",
        desc: "Fotografía deportiva dinámica que congela la intensidad y pasión de la excelencia atlética en detalles impresionantes.",
        button: "Conocer más",
      },
    },
    about: {
      title: "Sobre Nosotros",
      text: "Somos un equipo apasionado de fotógrafos dedicados a capturar la esencia de cada momento. Con años de experiencia en bodas, deportes y proyectos creativos, aportamos una perspectiva única a cada sesión.",
      stats: { years: "Años de Experiencia", projects: "Proyectos Realizados", clients: "Clientes Felices" },
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Nos encantaría saber de ti",
      socialTitle: "Síguenos",
      formTitle: "Envía un Mensaje",
      name: "Tu Nombre",
      email: "Tu Email",
      message: "Tu Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Error al enviar el mensaje. Inténtalo de nuevo.",
    },
    whatsapp: { placeholder: "Escribe tu mensaje...", send: "Enviar por WhatsApp" },
  },

  fr: {
    nav: { home: "Accueil", gallery: "Galerie", services: "Services", about: "À propos", contact: "Contact" },
    hero: { subtitle: "Capturer des moments qui durent éternellement" },
    gallery: { title: "Notre Travail", subtitle: "Un aperçu de notre vision créative" },
    services: {
      title: "Nos Services",
      wecreate: {
        name: "wecreate",
        desc: "Photographie créative qui raconte votre histoire unique. Des séances éditoriales aux campagnes de marque, nous apportons une vision artistique à chaque image.",
        button: "En savoir plus",
      },
      ballersvision: {
        name: "ballersvision",
        desc: "Photographie sportive dynamique qui fige l'intensité et la passion de l'excellence athlétique dans des détails saisissants.",
        button: "En savoir plus",
      },
    },
    about: {
      title: "À Propos",
      text: "Nous sommes une équipe passionnée de photographes dédiés à capturer l'essence de chaque moment. Avec des années d'expérience dans les mariages, le sport et les projets créatifs, nous apportons une perspective unique à chaque séance.",
      stats: { years: "Années d'Expérience", projects: "Projets Réalisés", clients: "Clients Satisfaits" },
    },
    contact: {
      title: "Nous Contacter",
      subtitle: "Nous serions ravis de vous entendre",
      socialTitle: "Suivez-nous",
      formTitle: "Envoyez un Message",
      name: "Votre Nom",
      email: "Votre Email",
      message: "Votre Message",
      send: "Envoyer le Message",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Échec de l'envoi du message. Veuillez réessayer.",
    },
    whatsapp: { placeholder: "Tapez votre message...", send: "Envoyer via WhatsApp" },
  },

  de: {
    nav: { home: "Startseite", gallery: "Galerie", services: "Leistungen", about: "Über uns", contact: "Kontakt" },
    hero: { subtitle: "Momente einfangen, die ewig währen" },
    gallery: { title: "Unsere Arbeit", subtitle: "Ein Einblick in unsere kreative Vision" },
    services: {
      title: "Unsere Leistungen",
      wecreate: {
        name: "wecreate",
        desc: "Kreative Fotografie, die Ihre einzigartige Geschichte erzählt. Von Editorial-Shootings bis zu Markenkampagnen bringen wir künstlerische Vision in jedes Bild.",
        button: "Mehr erfahren",
      },
      ballersvision: {
        name: "ballersvision",
        desc: "Dynamische Sportfotografie, die die Intensität und Leidenschaft sportlicher Exzellenz in atemberaubenden Details einfängt.",
        button: "Mehr erfahren",
      },
    },
    about: {
      title: "Über Uns",
      text: "Wir sind ein leidenschaftliches Team von Fotografen, die sich der Erfassung der Essenz jedes Moments widmen. Mit jahrelanger Erfahrung in Hochzeiten, Sport und kreativen Projekten bringen wir eine einzigartige Perspektive in jedes Shooting.",
      stats: { years: "Jahre Erfahrung", projects: "Abgeschlossene Projekte", clients: "Zufriedene Kunden" },
    },
    contact: {
      title: "Kontaktieren Sie Uns",
      subtitle: "Wir würden gerne von Ihnen hören",
      socialTitle: "Folgen Sie Uns",
      formTitle: "Nachricht Senden",
      name: "Ihr Name",
      email: "Ihre Email",
      message: "Ihre Nachricht",
      send: "Nachricht Senden",
      sending: "Wird gesendet...",
      success: "Nachricht erfolgreich gesendet!",
      error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
    },
    whatsapp: { placeholder: "Nachricht eingeben...", send: "Über WhatsApp senden" },
  },

  it: {
    nav: { home: "Home", gallery: "Galleria", services: "Servizi", about: "Chi Siamo", contact: "Contatti" },
    hero: { subtitle: "Catturare momenti che durano per sempre" },
    gallery: { title: "Il Nostro Lavoro", subtitle: "Uno sguardo alla nostra visione creativa" },
    services: {
      title: "I Nostri Servizi",
      wecreate: {
        name: "wecreate",
        desc: "Fotografia creativa che racconta la tua storia unica. Dalle sessioni editoriali alle campagne di brand, portiamo visione artistica in ogni scatto.",
        button: "Scopri di più",
      },
      ballersvision: {
        name: "ballersvision",
        desc: "Fotografia sportiva dinamica che congela l'intensità e la passione dell'eccellenza atletica in dettagli mozzafiato.",
        button: "Scopri di più",
      },
    },
    about: {
      title: "Chi Siamo",
      text: "Siamo un team appassionato di fotografi dedicati a catturare l'essenza di ogni momento. Con anni di esperienza in matrimoni, sport e progetti creativi, portiamo una prospettiva unica in ogni sessione.",
      stats: { years: "Anni di Esperienza", projects: "Progetti Completati", clients: "Clienti Soddisfatti" },
    },
    contact: {
      title: "Contattaci",
      subtitle: "Ci farebbe piacere sentirti",
      socialTitle: "Seguici",
      formTitle: "Invia un Messaggio",
      name: "Il Tuo Nome",
      email: "La Tua Email",
      message: "Il Tuo Messaggio",
      send: "Invia Messaggio",
      sending: "Invio in corso...",
      success: "Messaggio inviato con successo!",
      error: "Invio del messaggio fallito. Riprova.",
    },
    whatsapp: { placeholder: "Scrivi il tuo messaggio...", send: "Invia via WhatsApp" },
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")
  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
