"use client"

import type { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-purple-100 to-cyan-200 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950 p-4 md:p-6 transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 dark:from-purple-800/30 dark:to-pink-800/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-teal-400/30 dark:from-blue-800/30 dark:to-cyan-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 dark:from-indigo-800/20 dark:to-violet-800/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full mx-auto flex flex-col lg:flex-row gap-4 md:gap-6">
        <Sidebar />
        <main className="flex-1 lg:pl-4 min-h-[calc(100vh-3rem)]">{children}</main>
      </div>
    </div>
  )
}
