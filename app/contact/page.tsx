"use client"

import type React from "react"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle, Phone, Clock } from "lucide-react"
import { HireMeModal } from "@/components/hire-me-modal"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/BYTECODENINJA",
    color: "from-gray-700 to-gray-900",
    username: "@BYTECODENINJA",
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/joseph-mulwa808",
    color: "from-blue-500 to-blue-700",
    username: "Joseph Mulwa",
    description: "Let's connect professionally",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com/users/josephmulwa8055",
    color: "from-indigo-500 to-purple-600",
    username: "josephmulwa8055",
    description: "Chat with me",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    href: "https://wa.me/+254708644969",
    color: "from-green-500 to-emerald-600",
    username: "+254 708 644 969",
    description: "Quick messages",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:josephmulwa8055@gmail.com",
    color: "from-pink-500 to-rose-600",
    username: "josephmulwa8055@gmail.com",
    description: "For formal inquiries",
  },
]

export default function ContactPage() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const mailtoLink = `mailto:josephmulwa8055@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`

    window.location.href = mailtoLink

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <PageLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Get In Touch</h1>
              <p className="text-gray-600 dark:text-gray-400">I'd love to hear from you</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="text-sm bg-white/60 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-500" />
              Nairobi, Kenya
            </span>
            <span className="text-sm bg-white/60 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-500" />
              Available for remote work
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">Send a Message</h2>

            {submitted && (
              <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-sm">
                Opening your email client...
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">Connect With Me</h2>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/50 dark:bg-white/10 rounded-2xl p-4 hover:bg-white/70 dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <social.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">{social.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{social.username}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{social.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Availability Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl shadow-xl p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Open for Opportunities</h3>
              <p className="text-white/80">
                I'm currently available for freelance projects and full-time positions. Let's build something amazing
                together!
              </p>
            </div>
            <button
              onClick={() => setIsHireModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors shrink-0 cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {/* Hire Me Modal */}
      <HireMeModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
    </PageLayout>
  )
}
