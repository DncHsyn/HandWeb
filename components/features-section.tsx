"use client"

import { useRef, useEffect, useState } from "react"
import { Brain, Eye, Zap, Monitor, Cpu, Joystick } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "El Takibi",
    description:
      "Kamera uzerinden el hareketlerini gercek zamanli olarak algilar ve izler.",
  },
  {
    icon: Brain,
    title: "Yapay Zeka",
    description:
      "Makine ogrenimi ile el pozisyonlarini taniyan akilli algilama sistemi.",
  },
  {
    icon: Zap,
    title: "Anlik Tepki",
    description:
      "El hareketiyle karakter kontrolu milisaniye icinde gerceklesir.",
  },
  {
    icon: Monitor,
    title: "Gorsel Kodlama",
    description:
      "Scratch blok yapisinda kolay anlasilir ve duzenlenebilir kod yapisi.",
  },
  {
    icon: Cpu,
    title: "Kamera Entegrasyonu",
    description:
      "Bilgisayar kamerasi uzerinden canli goruntu isleme yetenegine sahip.",
  },
  {
    icon: Joystick,
    title: "Eglenceli Oynanis",
    description:
      "Engelleri atlat, puanlari topla. Kolsuz, tusuz sadece elini kullan!",
  },
]

export function FeaturesSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(features.length).fill(false)
  )
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
          }
        },
        { threshold: 0.2 }
      )
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  return (
    <section id="features" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Ozellikler
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-foreground text-balance">
            Proje Ozellikleri
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`group relative p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-mono text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
