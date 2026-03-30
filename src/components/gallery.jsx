import { useLanguage } from "./language-context";

export default function Gallery({
  images = [
    { src: "/hockey.jpeg", alt: "Sports", span: "col-span-2 row-span-2" },
    { src: "/football2.jpeg", alt: "Sports", span: "col-span-1 row-span-1" },
    { src: "/manstyle1.jpeg", alt: "Fashion", span: "col-span-1 row-span-2" },
    { src: "/party.jpeg", alt: "Portrait", span: "col-span-1 row-span-1" },
    { src: "/marriage1.jpeg", alt: "Wedding", span: "col-span-2 row-span-1" },
    {
      src: "/football3.jpeg",
      alt: "Sports",
      span: "col-span-1 row-span-1",
      objectPosition: "center 20%",
    },
  ],
}) {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-3 md:mb-4">
          {t.gallery.title}
        </h2>
        <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground">{t.gallery.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg md:rounded-xl group cursor-pointer"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ objectPosition: image.objectPosition || "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-lg md:text-2xl text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.alt}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
