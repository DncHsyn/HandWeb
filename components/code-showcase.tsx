import Image from "next/image"
import { Code2, Puzzle } from "lucide-react"

export function CodeShowcase() {
  return (
    <section id="code" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Kodlama
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-foreground text-balance">
            Pictoblox ile Blok Kodlama
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Code Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202026-02-19%20140039-G55l0csZJJMLg13ExlulTkMZaPicLn.png"
                alt="Pictoblox blok kodlama - el algılama ve karakter kontrol kodları"
                width={500}
                height={600}
                className="w-full object-cover"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 -z-10 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Puzzle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-mono text-foreground mb-2">
                  Blok Tabanli Programlama
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scratch&apos;in gorsel blok kodlama yapisini kullanarak,
                  karmasik el algilama mantigi basit ve anlasilir hale getirildi.
                  Her blok bir islevi temsil ediyor.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-mono text-foreground mb-2">
                  Olay Odakli Mantik
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;El algilandi mi?&quot; sorusuna gore karakter ya ziplar
                  ya da yere iner. Surekli tekrar dongusu icinde kamera
                  goruntusu analiz edilir ve anlik tepki verilir.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg font-mono">AI</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-mono text-foreground mb-2">
                  Yapay Zeka Entegrasyonu
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pictoblox eklentisi sayesinde yapay zeka tabanli el tanima
                  teknolojisi dogrudan blok kodlama ortamina entegre edildi.
                  Kamera goruntusunu analiz eden AI modeli el tespiti yapar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
