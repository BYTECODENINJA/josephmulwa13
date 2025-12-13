"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Code2, FolderOpen, MessageSquare, Heart, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { icon: User, label: "About Me", href: "/" },
  { icon: Code2, label: "Skills", href: "/skills" },
  { icon: FolderOpen, label: "Projects", href: "/projects" },
  { icon: Heart, label: "Interests", href: "/interests" },
  { icon: MessageSquare, label: "Contact", href: "/contact" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-white/30 dark:bg-gray-800/60 backdrop-blur-xl border border-white/40 dark:border-gray-700/40"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Updated dark mode colors */}
      <aside
        className={cn(
          "fixed lg:sticky lg:top-6 z-40 w-72 lg:w-64 h-[calc(100vh-3rem)] lg:h-[calc(100vh-3rem)]",
          "bg-white/30 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-gray-700/40 shadow-xl",
          "p-6 flex flex-col transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">DevPortfolio</span>
          </div>
          <ThemeToggle />
        </div>

        {/* Navigation - Updated dark mode text and hover colors */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-white/60 dark:bg-gray-700/60 shadow-md text-gray-800 dark:text-white font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-700/40 hover:text-gray-800 dark:hover:text-white",
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Social Links - Updated dark mode styles */}
        <div className="pt-6 border-t border-white/40 dark:border-gray-700/40">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Connect with me</p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/40 dark:bg-gray-700/50 hover:bg-white/60 dark:hover:bg-gray-600/60 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/40 dark:bg-gray-700/50 hover:bg-white/60 dark:hover:bg-gray-600/60 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </a>
            <a
              href="mailto:josephmulwa8055@gmail.com"
              className="p-2 rounded-xl bg-white/40 dark:bg-gray-700/50 hover:bg-white/60 dark:hover:bg-gray-600/60 transition-colors"
            >
              <Mail className="w-5 h-5 text-gray-700 dark:text-gray-200" />
            </a>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 flex items-center gap-1">
            <span>Based in Kenya</span>
          </p>
        </div>
      </aside>
    </>
  )
}
