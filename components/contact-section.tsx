import { Mail, MapPin, Send, Github, Linkedin, MessageCircle, Phone } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
    color: "from-gray-700 to-gray-900",
    username: "@yourusername",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    color: "from-blue-500 to-blue-700",
    username: "Your Name",
  },
  {
    name: "Discord",
    icon: MessageCircle,
    href: "https://discord.com/users/yourusername",
    color: "from-indigo-500 to-purple-600",
    username: "yourusername#0000",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    href: "https://wa.me/254700000000",
    color: "from-green-500 to-emerald-600",
    username: "+254 700 000 000",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your.email@example.com",
    color: "from-pink-500 to-rose-600",
    username: "your.email@example.com",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-xl font-bold text-gray-800">Get In Touch</h2>
        <span className="text-sm bg-white/60 text-gray-600 px-3 py-1 rounded-full flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          Kenya
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="bg-white/50 rounded-2xl p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Message</label>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 placeholder:text-gray-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Connect With Me</h3>
          <div className="space-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{social.name}</h4>
                  <p className="text-sm text-gray-500">{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
