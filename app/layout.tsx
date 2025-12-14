import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fullstack Developer Portfolio | Kenya",
  description:
    "Fullstack developer specializing in Java, Python, React, Node.js, Docker, and Kubernetes. Based in Kenya.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/josephmulwa13/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/josephmulwa13/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/josephmulwa13/icon.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/josephmulwa13/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
