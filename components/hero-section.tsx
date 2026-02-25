"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Hand, ChevronDown } from "lucide-react"

export function HeroSection() {
  const handRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (handRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20
        const y = (e.clientY / window.innerHeight - 0.5) * 20
        handRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-accent/30 animate-pulse delay-300" />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-primary/20 animate-pulse delay-700" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse delay-500" />
        <div className="absolute bottom-1/4 right-10 w-2.5 h-2.5 rounded-full bg-primary/30 animate-pulse delay-200" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
            <Hand className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Scratch + El Takibi Teknolojisi
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tight text-balance">
            <span className="text-foreground">Elini Hareket Ettir,</span>
            <br />
            <span className="text-primary">Tobi&apos;yi Kontrol Et</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            Kamera ile el hareketlerini algilayan ve oyun karakterini
            kontrol eden interaktif bir Scratch projesi. Elini kaldir, Tobi
            ziplar!
          </p>

          {/* Hero Image */}
          <div ref={handRef} className="relative mt-4 transition-transform duration-300 ease-out">
            <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl shadow-primary/10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202026-02-19%20140025-rGftGfTridnoch8WPGAotfODrOfZp7.png"
                alt="Tobi Hand Game - Kamera ile el takibi ve oyun karakteri kontrolu"
                width={700}
                height={500}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating labels */}
            <div className="absolute -top-4 -right-4 md:-right-8 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold shadow-lg animate-bounce">
              El Algilandi!
            </div>
            <div className="absolute -bottom-3 -left-4 md:-left-8 px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-sm font-bold shadow-lg">
              Tobi Zipliyor!
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
