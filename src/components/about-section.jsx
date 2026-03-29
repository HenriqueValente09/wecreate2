import { useLanguage } from "./language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden">
            <img
              src="/camera.png"
              alt="Photographer at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl bg-[#646cff]">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold">10+</span>
            <p className="text-sm sm:text-base md:text-lg">{t.about.stats.years}</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 md:mb-8">{t.about.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">{t.about.text}</p>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">500+</span>
              <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2">{t.about.stats.projects}</p>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">300+</span>
              <p className="text-sm md:text-base text-muted-foreground mt-1 md:mt-2">{t.about.stats.clients}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
