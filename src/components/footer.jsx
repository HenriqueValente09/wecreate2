export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-[100vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8 flex flex-col md:flex-row">
          <span className="text-2xl font-bold text-primary">wecreate</span>
          <span className="text-2xl font-bold text-foreground/60">wemoment</span>
          <span className="text-2xl font-bold text-foreground/60">ballersvision</span>
        </div>
        <p className="text-muted-foreground text-lg">© {new Date().getFullYear()} wecreate. All rights reserved.</p>
      </div>
    </footer>
  )
}
