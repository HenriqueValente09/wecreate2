import { useState } from "react"
import { Send, Instagram, Linkedin, MessageCircle, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "./language-context"

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/valentin.pittard/",
  linkedin: "https://www.linkedin.com/in/SEU-LINKEDIN",
  whatsapp: "41797088102",
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("idle")
  const [errors, setErrors] = useState({})
  const { t } = useLanguage()

  const validate = () => {
    const newErrors = {}
    if (!formData.email.trim()) {
      newErrors.email = true
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true
    }
    if (!formData.message.trim()) {
      newErrors.message = true
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus("sending")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", formData)
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 4000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: SOCIAL_LINKS.instagram,
      color: "hover:border-pink-500/50 hover:shadow-pink-500/10",
      iconColor: "group-hover:text-pink-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: SOCIAL_LINKS.linkedin,
      color: "hover:border-blue-500/50 hover:shadow-blue-500/10",
      iconColor: "group-hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/${SOCIAL_LINKS.whatsapp}`,
      color: "hover:border-green-500/50 hover:shadow-green-500/10",
      iconColor: "group-hover:text-green-400",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-3 md:mb-4">{t.contact.title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">{t.contact.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">{t.contact.socialTitle}</h3>
          <div className="flex flex-col gap-3 md:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 bg-card p-4 md:p-5 rounded-xl border border-border transition-all duration-300 hover:shadow-lg ${social.color}`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center transition-colors">
                  <social.icon className={`w-5 h-5 md:w-6 md:h-6 text-foreground/70 transition-colors ${social.iconColor}`} />
                </div>
                <span className="text-lg md:text-xl font-medium text-foreground">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 md:mb-6">{t.contact.formTitle}</h3>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <input
              type="text"
              placeholder={t.contact.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 md:px-6 md:py-4 bg-card border border-border rounded-xl text-foreground text-base md:text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            />
            <input
              type="email"
              placeholder={t.contact.email}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (errors.email) setErrors({ ...errors, email: false })
              }}
              className={`w-full px-4 py-3 md:px-6 md:py-4 bg-card border rounded-xl text-foreground text-base md:text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
                errors.email ? "border-red-500" : "border-border"
              }`}
            />
            <textarea
              placeholder={t.contact.message}
              rows={5}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value })
                if (errors.message) setErrors({ ...errors, message: false })
              }}
              className={`w-full px-4 py-3 md:px-6 md:py-4 bg-card border rounded-xl text-foreground text-base md:text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-colors ${
                errors.message ? "border-red-500" : "border-border"
              }`}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full md:w-auto px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-xl text-base md:text-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.contact.sending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t.contact.send}
                </>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 animate-in fade-in duration-300">
                <CheckCircle className="w-5 h-5" />
                <span className="text-base md:text-lg">{t.contact.success}</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 animate-in fade-in duration-300">
                <AlertCircle className="w-5 h-5" />
                <span className="text-base md:text-lg">{t.contact.error}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
