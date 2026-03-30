export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 md:px-8 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 text-center md:flex-row md:gap-6 md:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <span className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>wecreate</span>
          <span className="text-lg sm:text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>wesports</span>
          <span className="text-lg sm:text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>welapse</span>
        </div>
        <p className="text-sm md:text-base text-center" style={{ color: "#ffffff" }}>© {new Date().getFullYear()} wecreate. All rights reserved.</p>
      </div>
    </footer>
  )
}
