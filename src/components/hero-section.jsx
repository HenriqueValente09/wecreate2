import { useLanguage } from "./language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero_image.jpeg"
        alt="wecreate hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-6">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          wecreate
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/70" style={{ fontFamily: "var(--font-body)" }}>
          {t.hero.subtitle}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
