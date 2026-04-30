"use client"

import { motion } from "framer-motion"
import { MapPin, GraduationCap, Heart } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const infoCards = [
  {
    icon: MapPin,
    title: "Location",
    description: "Lille, France",
    detail: "Born and raised in the city that never sleeps"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Epil",
    detail: "Computer Science Major, Class of 2025"
  },
  {
    icon: Heart,
    title: "Interests",
    description: "Tech & Sports",
    detail: "Building apps and competing on the field"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-[#0EA5E9]">Get to know me</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 gradient-text">About Me</h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[#7DD3FC]/90 leading-relaxed">
                {"I'm a passionate student developer with a love for creating elegant solutions to complex problems. When I'm not coding, you'll find me on the field pursuing my athletic goals."}
              </p>
              <p className="text-lg md:text-xl text-[#7DD3FC]/90 leading-relaxed">
                My journey in tech started with curiosity about how things work, and has evolved into a deep passion for building products that make a difference. I believe in the power of technology to transform ideas into reality.
              </p>
              <p className="text-lg md:text-xl text-[#7DD3FC]/90 leading-relaxed">
                {"Balancing academics, athletics, and development has taught me the value of discipline, time management, and perseverance – skills that I bring to every project I work on."}
              </p>
            </div>
          </ScrollReveal>

          {/* Info cards */}
          <div className="space-y-4">
            {infoCards.map((card, index) => (
              <ScrollReveal key={card.title} direction="right" delay={index * 0.15}>
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-r from-[#0C1425]/80 to-[#0D2847]/60 border border-[#1E40AF]/30 group cursor-pointer"
                  whileHover={{ 
                    x: 10,
                    borderColor: "#38BDF8",
                    boxShadow: "0 0 30px rgba(56, 189, 248, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#1E3A5F]/50 group-hover:bg-[#38BDF8]/20 transition-colors">
                      <card.icon className="w-6 h-6 text-[#38BDF8]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#7DD3FC] mb-1">{card.title}</h3>
                      <p className="text-[#38BDF8] font-medium">{card.description}</p>
                      <p className="text-[#7DD3FC]/60 text-sm mt-1">{card.detail}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
