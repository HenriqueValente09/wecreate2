import { useLanguage } from "./language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="relative overflow-hidden">
          <div className="aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden">
            <img
              src="/camera.png"
              alt="Photographer at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-4 rounded-xl bg-[#646cff] p-4 text-primary-foreground shadow-lg sm:bottom-6 sm:right-6 sm:p-6">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">10+</span>
            <p className="text-sm sm:text-base md:text-lg">{t.about.stats.years}</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:mb-8 md:text-7xl" style={{ color: "#d39f17" }}>{t.about.title}</h2>
          <p className="mb-6 text-base leading-relaxed sm:text-lg md:mb-8 md:text-xl" style={{ color: "#ffffff" }}>{t.about.text}</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#d39f17" }}>500+</span>
              <p className="text-sm md:text-base mt-1 md:mt-2" style={{ color: "#ffffff" }}>{t.about.stats.projects}</p>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#d39f17" }}>300+</span>
              <p className="text-sm md:text-base mt-1 md:mt-2" style={{ color: "#ffffff" }}>{t.about.stats.clients}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
