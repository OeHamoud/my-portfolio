"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="container mx-auto text-center relative z-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span
            className="inline-block text-sm md:text-base uppercase tracking-[0.3em] text-[#0EA5E9] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="gradient-text text-glow">Ahmed Saheb Ettabaa</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-[#7DD3FC]/80 max-w-3xl mx-auto mb-12 text-balance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Student • Developer • Athlete
        </motion.p>

        {/* Animated tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {["Next.js", "TypeScript", "Next.js", "Python"].map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 rounded-full text-sm bg-[#1E3A5F]/50 text-[#7DD3FC] border border-[#1E40AF]/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: "#38BDF8",
                boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)"
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="inline-flex flex-col items-center text-[#7DD3FC]/60 hover:text-[#38BDF8] transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ y: 5 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#38BDF8]"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-[#0EA5E9]"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-1.5 h-1.5 rounded-full bg-[#7DD3FC]"
        animate={{ 
          x: [0, -15, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </section>
  )
}
