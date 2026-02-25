import Image from "next/image"

export function GameplaySection() {
  return (
    <section id="gameplay" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Oynanis
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-foreground text-balance">
            Oyun Ekrani
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed text-pretty">
            Sol tarafta Scratch blok kodlari, sag tarafta canli kamera goruntusu ve oyun alani.
            Tobi karakteri ve engeller gercek zamanli olarak calisir.
          </p>
        </div>

        {/* Full width screenshot */}
        <div className="relative max-w-6xl mx-auto group">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202026-02-19%20135727-K5iT3kXJmXYuhNODn5J81KqLaCQ1QC.png"
              alt="Scratch IDE ve oyun ekrani - Tobi karakteri ve el takibi ile canli oynanis"
              width={1400}
              height={700}
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          {/* Feature callouts */}
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold font-mono text-primary mb-1">AI</div>
              <p className="text-sm text-muted-foreground">El Algilama Teknolojisi</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold font-mono text-primary mb-1">60fps</div>
              <p className="text-sm text-muted-foreground">Gercek Zamanli Tepki</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold font-mono text-primary mb-1">Scratch</div>
              <p className="text-sm text-muted-foreground">Blok Kodlama Platformu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
