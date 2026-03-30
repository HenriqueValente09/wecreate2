import { useLanguage } from "./language-context"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <img
        src="/hero_image.jpeg"
        alt="wecreate hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20">
        <h1
          className="text-[clamp(3.5rem,18vw,9rem)] font-bold leading-none text-foreground tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          wecreate
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl" style={{ fontFamily: "var(--font-body)" }}>
          {t.hero.subtitle}
        </p>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-8">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
