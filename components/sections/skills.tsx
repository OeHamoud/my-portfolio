"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

const codingSkills = [
  { name: "Python", level: 90 },
  { name: "React", level: 85 },
  { name: "Javascript", level: 88 },
  { name: "Next.js", level: 85 },
  { name: "SQL", level: 80 },
  { name: "Docker", level: 75 },
]

const languages = [
  { name: "English", level: "Fluent" },
  { name: "French", level: "Fluent" },
  { name: "Arabic", level: "Native" },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-[#7DD3FC] font-medium">{name}</span>
        <span className="text-[#0EA5E9] text-sm">{level}%</span>
      </div>
      <div className="h-3 bg-[#0C1425] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#22D3EE]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          style={{
            boxShadow: "0 0 10px rgba(56, 189, 248, 0.5)"
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E3A5F]/10 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-[#0EA5E9]">What I know</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 gradient-text">Skills</h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Coding Skills */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-bold text-[#38BDF8] mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full" />
                Coding Skills
              </h3>
              <div className="space-y-6">
                {codingSkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal direction="right">
            <div>
              <h3 className="text-2xl font-bold text-[#38BDF8] mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full" />
                Languages
              </h3>
              <div className="grid gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    className="p-5 rounded-xl bg-gradient-to-r from-[#0C1425]/80 to-[#0D2847]/60 border border-[#1E40AF]/30 flex justify-between items-center group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      borderColor: "#38BDF8",
                      boxShadow: "0 0 25px rgba(56, 189, 248, 0.2)"
                    }}
                  >
                    <span className="text-lg text-[#7DD3FC] font-medium">{lang.name}</span>
                    <span className="px-4 py-1.5 rounded-full text-sm bg-[#1E3A5F]/50 text-[#38BDF8] border border-[#1E40AF]/50 group-hover:border-[#38BDF8]/50 transition-colors">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Additional skills */}
              <h3 className="text-2xl font-bold text-[#38BDF8] mt-12 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] rounded-full" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Git", "VS Code", "PostgreSQL", "OpenAI Whisper", "Linux", "Vercel", "FastAPI", "MicroPython"].map((tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-4 py-2 rounded-full text-sm bg-[#1E3A5F]/30 text-[#7DD3FC] border border-[#1E40AF]/40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "#38BDF8",
                      boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)"
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
