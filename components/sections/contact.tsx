"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/OeHamoud" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-saheb-ettabaa/" },
  { name: "Email", icon: Mail, href: "mailto:sahebettabaaahmed@gmail.com" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-[0.3em] text-[#0EA5E9]">Get in touch</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 gradient-text">Contact Me</h2>
            <p className="text-[#7DD3FC]/70 mt-6 max-w-xl mx-auto text-pretty">
              {"Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#7DD3FC] mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0C1425]/80 border border-[#1E40AF]/30 text-[#7DD3FC] placeholder-[#7DD3FC]/40 focus:outline-none focus:border-[#38BDF8] transition-colors"
                  placeholder="Your name"
                  whileFocus={{ borderColor: "#38BDF8" }}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#7DD3FC] mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-[#0C1425]/80 border border-[#1E40AF]/30 text-[#7DD3FC] placeholder-[#7DD3FC]/40 focus:outline-none focus:border-[#38BDF8] transition-colors"
                  placeholder="your@email.com"
                  whileFocus={{ borderColor: "#38BDF8" }}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#7DD3FC] mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-[#0C1425]/80 border border-[#1E40AF]/30 text-[#7DD3FC] placeholder-[#7DD3FC]/40 focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                  placeholder="Your message..."
                  whileFocus={{ borderColor: "#38BDF8" }}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] text-[#0F172A] font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-[#0F172A] border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#38BDF8] mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#0C1425]/60 border border-[#1E40AF]/20 text-[#7DD3FC] group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      x: 10,
                      borderColor: "#38BDF8",
                      boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)"
                    }}
                  >
                    <div className="p-2 rounded-lg bg-[#1E3A5F]/50 group-hover:bg-[#38BDF8]/20 transition-colors">
                      <link.icon size={20} className="text-[#38BDF8]" />
                    </div>
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-[#1E3A5F]/30 to-[#0C1425]/50 border border-[#1E40AF]/20">
                <p className="text-sm text-[#7DD3FC]/70 leading-relaxed">
                  {"I'm currently open to freelance projects and full-time opportunities. Feel free to reach out if you think we'd be a great fit!"}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
