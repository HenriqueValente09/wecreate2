import { useState } from "react"
import { Send } from "lucide-react"
import { useLanguage } from "./language-context"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const { t } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">{t.contact.title}</h2>
      </div>

      <a className="flex justify-center items-center pointer" href="https://www.instagram.com/valentin.pittard/">
        <img src="instagram.png" alt=""  className="max-w-[10rem]"/>
      </a>

      {/* <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder={t.contact.name}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 bg-card border border-border rounded-xl text-foreground text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder={t.contact.email}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 bg-card border border-border rounded-xl text-foreground text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <textarea
          placeholder={t.contact.message}
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-6 py-4 bg-card border border-border rounded-xl text-foreground text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl text-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {t.contact.send}
        </button>
      </form> */}
    </section>
  )
}
