import { useEffect, useState } from "react"
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

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b-[0.5px] border-white/20 bg-black/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="max-w-[12rem] text-[1.75rem] sm:text-3xl font-bold text-white hover:text-[#646cff] transition-colors"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            wecreate
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#home" className="text-base lg:text-lg text-white hover:text-primary transition-colors">
              {t.nav.home}
            </a>
            <a href="#gallery" className="text-base lg:text-lg text-white hover:text-primary transition-colors">
              {t.nav.gallery}
            </a>
            <a href="#services" className="text-base lg:text-lg text-white hover:text-primary transition-colors">
              {t.nav.services}
            </a>
            <a href="#about" className="text-base lg:text-lg text-white hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-base lg:text-lg text-white hover:text-primary transition-colors">
              {t.nav.contact}
            </a>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm uppercase lg:hidden">{currentLang?.code}</span>
                <span className="hidden text-sm lg:inline lg:text-base">{currentLang?.name}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangOpen(false)
                      }}
                      className={`w-full flex items-center !rounded-none pointer gap-3 px-4 py-3 text-left transition-colors ${
                        language === lang.code ? "bg-gray-100 text-black font-semibold" : "text-black hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-base">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground md:hidden rounded-lg border border-white/10 bg-white/5"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border py-4 md:hidden max-h-[calc(100svh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-primary transition-colors px-3 py-3 rounded-lg hover:bg-secondary/50">
                {t.nav.home}
              </a>
              <a href="#gallery" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-primary transition-colors px-3 py-3 rounded-lg hover:bg-secondary/50">
                {t.nav.gallery}
              </a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-primary transition-colors px-3 py-3 rounded-lg hover:bg-secondary/50">
                {t.nav.services}
              </a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-primary transition-colors px-3 py-3 rounded-lg hover:bg-secondary/50">
                {t.nav.about}
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-primary transition-colors px-3 py-3 rounded-lg hover:bg-secondary/50">
                {t.nav.contact}
              </a>

              <div className="pt-4 mt-2 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3 px-3">Language</p>
                <div className="grid grid-cols-1 gap-2 px-3 pb-2 sm:grid-cols-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`flex w-full min-w-0 items-center gap-2 px-3 py-2.5 rounded-lg transition-colors ${
                        language === lang.code ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="truncate text-left text-sm">{lang.name}</span>
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
