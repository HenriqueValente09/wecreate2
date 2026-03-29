export default function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <span className="text-xl sm:text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-diplay)" }}>wecreate</span>
          <span className="text-lg sm:text-2xl font-bold text-foreground/60" style={{ fontFamily: "var(--font-diplay)" }}>ballersvision</span>
        </div>
        <p className="text-sm md:text-base text-muted-foreground text-center">© {new Date().getFullYear()} wecreate. All rights reserved.</p>
      </div>
    </footer>
  )
}
