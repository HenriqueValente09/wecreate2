import { useLanguage } from "./language-context"

export default function HeroSection(title = "wecreate") {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/dark-cinematic-photography-studio.jpg"
      >
        <source src="/wecreatevideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4">
        <h1 className="!text-[7rem] !md:max-md:text-[30rem] !lg:max-md:text-[30rem] mx-auto font-bold text-foreground tracking-tight animate-fade-in">
          wecreate
        </h1>
        <p className="mt-6 text-2xl md:text-3xl text-foreground/70">{t.hero.subtitle}</p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
