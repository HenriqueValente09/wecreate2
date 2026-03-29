import { useState } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "./language-context"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const currentLang = languages.find((l) => l.code === language)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b-[0.5px] border-white/20 bg-black/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-3xl font-bold text-white hover:text-[#646cff]">
            wecreate
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-xl text-white text-foreground/80 hover:text-primary transition-colors">
              {t.nav.home}
            </a>
            <a href="#gallery" className="text-xl text-foreground/80 hover:text-primary transition-colors">
              {t.nav.gallery}
            </a>
            <a href="#services" className="text-xl text-foreground/80 hover:text-primary transition-colors">
              {t.nav.services}
            </a>
            <a href="#about" className="text-xl text-foreground/80 hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-xl text-foreground/80 hover:text-primary transition-colors">
              {t.nav.contact}
            </a>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-foreground"
              >
                <Globe className="w-4 h-4" />
                <span className="text-lg">{currentLang?.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-xl overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangOpen(false)
                      }}
                      className={`w-full flex items-center !rounded-none pointer gap-3 px-4 py-3 text-left hover:bg-secondary transition-colors ${
                        language === lang.code ? "bg-primary/20 text-primary" : "text-foreground"
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-lg">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-xl text-foreground/80 hover:text-primary transition-colors">
                {t.nav.home}
              </a>
              <a href="#gallery" className="text-xl text-foreground/80 hover:text-primary transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#services" className="text-xl text-foreground/80 hover:text-primary transition-colors">
                {t.nav.services}
              </a>
              <a href="#about" className="text-xl text-foreground/80 hover:text-primary transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-xl text-foreground/80 hover:text-primary transition-colors">
                {t.nav.contact}
              </a>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        language === lang.code ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
