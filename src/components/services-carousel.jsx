import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./language-context";

const services = [
  {
    key: "wecreate",
    image: "/creative-editorial-photography-artistic-portrait.jpg",
    gradient: "from-purple-900/80 to-indigo-900/80",
    href: "#contact",
  },

  {
    key: "ballersvision",
    image: "/soccer-player-celebrating-sports-photography.jpg",
    gradient: "from-orange-900/80 to-red-900/80",
    href: "/ballersvision",
  },
];

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const { t } = useLanguage();

  const next = () => setCurrent((prev) => (prev + 1) % services.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + services.length) % services.length);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="services" className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4">
          {t.services.title}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="relative h-[440px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl md:rounded-2xl">
          {services.map((service, index) => {
            const serviceData = t.services[service.key];
            return (
              <div
                key={service.key}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === current
                    ? "opacity-100 translate-x-0"
                    : index < current
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                }`}
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={serviceData.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center px-5 py-8 text-center sm:px-10 md:px-16">
                  <h3 className="mb-4 text-[clamp(2.75rem,12vw,8rem)] font-bold leading-none text-foreground md:mb-6">
                    {serviceData.name}
                  </h3>
                  <p className="max-w-[34rem] text-sm leading-relaxed text-foreground/90 sm:text-lg md:text-xl lg:text-2xl">
                    {serviceData.desc}
                  </p>
                  <a
                    href={service.href}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#222222] px-5 py-3 text-base font-medium leading-relaxed text-foreground/90 transition-colors hover:bg-[#333333] sm:mt-5 sm:w-auto sm:px-6 sm:py-4 sm:text-lg md:text-xl"
                  >
                    {serviceData.button}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            prev();
            handleInteraction();
          }}
          className="absolute hidden sm:flex left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/50 backdrop-blur-sm rounded-full items-center justify-center text-foreground hover:bg-primary transition-colors"
        >
          <ChevronLeft className="m-auto" />
        </button>

        <button
          onClick={() => {
            next();
            handleInteraction();
          }}
          className="absolute hidden sm:flex right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/50 backdrop-blur-sm rounded-full items-center justify-center text-foreground hover:bg-primary transition-colors"
        >
          <ChevronRight className="m-auto" />
        </button>

        <div className="flex justify-center gap-3 mt-6 md:mt-8">
          {services.map((service, index) => (
            <button
              key={service.key}
              onClick={() => {
                setCurrent(index);
                handleInteraction();
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-12 bg-primary"
                  : "w-3 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
