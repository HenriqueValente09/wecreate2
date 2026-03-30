import { useLanguage } from "./language-context";

const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const SoccerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
    <path d="M12 2v20" />
  </svg>
);

const TimelapseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
  </svg>
);

const services = [
  {
    key: "wecreate",
    Icon: CameraIcon,
    gradient: "linear-gradient(135deg, #646cff 0%, #9b59b6 100%)",
    glowColor: "rgba(100, 108, 255, 0.15)",
    accentColor: "#646cff",
  },
  {
    key: "wesports",
    Icon: SoccerIcon,
    gradient: "linear-gradient(135deg, #e67e22 0%, #e74c3c 100%)",
    glowColor: "rgba(230, 126, 34, 0.15)",
    accentColor: "#e67e22",
  },
  {
    key: "welapse",
    Icon: TimelapseIcon,
    gradient: "linear-gradient(135deg, #00b894 0%, #0984e3 100%)",
    glowColor: "rgba(0, 184, 148, 0.15)",
    accentColor: "#00b894",
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4" style={{ color: "#d39f17" }}>
          {t.services.title}
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {services.map((service) => {
          const serviceData = t.services[service.key];
          const { Icon } = service;

          return (
            <div
              key={service.key}
              className="group relative rounded-2xl border border-white/[0.06] p-6 sm:p-8 transition-all duration-500 cursor-default"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = service.glowColor;
                e.currentTarget.style.borderColor = `${service.accentColor}44`;
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 60px -15px ${service.accentColor}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Gradient accent line at top */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: service.gradient }}
              />

              {/* Icon */}
              <div
                className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-xl transition-all duration-500"
                style={{
                  background: `${service.accentColor}15`,
                  color: service.accentColor,
                }}
              >
                <Icon />
              </div>

              {/* Title */}
              <h3
                className="text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)", color: "#d39f17" }}
              >
                {serviceData.name}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#ffffff" }}>
                {serviceData.desc}
              </p>

              {/* Bottom gradient decorative element */}
              <div
                className="mt-6 h-[1px] w-12 rounded-full opacity-40 group-hover:w-full transition-all duration-700"
                style={{ background: service.gradient }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
