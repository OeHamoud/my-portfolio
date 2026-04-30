"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 px-6 border-t border-[#1E40AF]/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#7DD3FC]/60 text-sm flex items-center gap-2">
            Built with <Heart size={14} className="text-[#0EA5E9]" /> using Next.js & Framer Motion
          </p>
          <p className="text-[#7DD3FC]/60 text-sm">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
