"use client"

import { useRef, useEffect, useState } from "react"
import { Camera, Scan, Gamepad2 } from "lucide-react"

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Kamera Acilir",
    description:
      "Oyun basladiginda bilgisayarinizin kamerasi aktif olur ve goruntuyu analiz etmeye baslar.",
  },
  {
    icon: Scan,
    number: "02",
    title: "El Algilanir",
    description:
      "Yapay zeka destekli el takip sistemi, kamera goruntusu uzerinde elinizi tespit eder ve hareketlerinizi izler.",
  },
  {
    icon: Gamepad2,
    number: "03",
    title: "Karakter Hareket Eder",
    description:
      "Elinizi kaldiriniz, Tobi ziplar! Elinizi indirdiginizde Tobi tekrar yere iner. Engelleri atlatmak icin zamanlamaniz onemli!",
  },
]

export function HowItWorks() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false])
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
        { threshold: 0.3 }
      )
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-widest uppercase">
            Nasil Calisir
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-foreground text-balance">
            Uc Basit Adim
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`group relative p-8 rounded-2xl bg-card border border-border transition-all duration-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step Number */}
              <span className="absolute -top-4 -left-2 text-6xl font-bold font-mono text-primary/10 select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative z-10 mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <step.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold font-mono text-foreground mb-3">
                {step.title}
              </h3>
              <p className="relative z-10 text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
