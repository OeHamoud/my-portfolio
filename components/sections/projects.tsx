"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Folder } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { features, title } from "process"
import { Description } from "@radix-ui/react-toast"

const projects = [
  {
    title: "Descriptium",
    description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "Python"],
    github: "https://github.com/OeHamoud/Descriptium",
    live: "https://github.com/OeHamoud/Descriptium",
    featured: true
  },
  {
    title: "Klarzo",
    description: "An Upcomming CV Generator and enhancer",
    tags: ["Next.js", "TypeScript", "Stripe", "Python"],
    github: "https://github.com/OeHamoud/Descriptium",
    live: "https://github.com/OeHamoud/Descriptium",
    featured: true
  },
  {
    title: "Antivirus",
    description: "CLI tool that generates beautiful portfolio websites from a simple configuration file.",
    tags: ["Node.js", "CLI", "Templates"],
    github: "https://github.com/OeHamoud/Antivirus",
    featured: false
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/10 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-[#0EA5E9]">My work</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 gradient-text">Projects</h2>
          </div>
        </ScrollReveal>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.div
                className="group relative h-full p-8 rounded-2xl bg-gradient-to-br from-[#0C1425]/90 to-[#0D2847]/70 border border-[#1E40AF]/30 overflow-hidden"
                whileHover={{ 
                  borderColor: "#38BDF8",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/0 to-[#0EA5E9]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#38BDF8]/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-[#1E3A5F]/50 flex items-center justify-center"
                      whileHover={{ rotate: -10 }}
                    >
                      <Folder className="w-6 h-6 text-[#38BDF8]" />
                    </motion.div>
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          className="text-[#7DD3FC]/60 hover:text-[#38BDF8] transition-colors"
                          whileHover={{ y: -3 }}
                          aria-label="View source code on GitHub"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          className="text-[#7DD3FC]/60 hover:text-[#38BDF8] transition-colors"
                          whileHover={{ y: -3 }}
                          aria-label="View live project"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#7DD3FC] mb-3 group-hover:text-[#38BDF8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#7DD3FC]/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-[#1E3A5F]/50 text-[#7DD3FC] border border-[#1E40AF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other Projects */}
        <ScrollReveal>
          <h3 className="text-xl font-bold text-[#38BDF8] mb-8 text-center">Other Noteworthy Projects</h3>
        </ScrollReveal>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div
                className="group p-6 rounded-xl bg-[#0C1425]/60 border border-[#1E40AF]/20 h-full"
                whileHover={{ 
                  y: -5,
                  borderColor: "#38BDF8",
                  boxShadow: "0 10px 30px rgba(56, 189, 248, 0.15)"
                }}
              >
                <div className="flex justify-between items-start mb-3">
                  <Folder className="w-8 h-8 text-[#38BDF8]" />
                  <motion.a
                    href={project.github}
                    className="text-[#7DD3FC]/50 hover:text-[#38BDF8] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    aria-label="View source code on GitHub"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
                <h4 className="text-lg font-semibold text-[#7DD3FC] mb-2 group-hover:text-[#38BDF8] transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-[#7DD3FC]/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#0EA5E9]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
