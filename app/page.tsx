"use client"

import { PageLayout } from "@/components/page-layout"
import {
  MapPin,
  ArrowRight,
  Download,
  Briefcase,
  FolderGit2,
  Clock,
  Code2,
  Server,
  Palette,
  Container,
  Coffee,
  Zap,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const stats = [
  { icon: Briefcase, value: "2", label: "Years Learning Experience", color: "from-purple-400 to-purple-600" },
  { icon: FolderGit2, value: "10", label: "Projects Completed", color: "from-pink-400 to-pink-600" },
  { icon: Clock, value: "100%", label: "Confidence", color: "from-cyan-400 to-cyan-600" },
]

const techHighlights = [
  { title: "Languages", icon: Code2, skills: ["Java", "Python", "JavaScript"], gradient: "from-pink-400 to-rose-500" },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["React", "Tailwind CSS", "GSAP"],
    gradient: "from-purple-400 to-violet-500",
  },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express"], gradient: "from-cyan-400 to-teal-500" },
  { title: "DevOps", icon: Container, skills: ["Docker", "Kubernetes"], gradient: "from-emerald-400 to-green-500" },
]

const codingFocus = [
  { icon: Coffee, label: "Clean Code", value: "Always" },
  { icon: Zap, label: "Performance", value: "Optimized" },
  { icon: Target, label: "Best Practices", value: "Applied" },
]

export default function AboutPage() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/JOSEPH.pdf"
    link.download = "JOSEPH.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <PageLayout>
      <div className="space-y-6 h-full">
        {/* Hero Section */}
        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-balance">
                Welcome! I'm a Fullstack Developer
              </h1>
              <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Based in Kenya - Open to remote opportunities
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              JM
            </div>
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a passionate fullstack developer with expertise in building scalable web applications and cloud-native
            solutions. I specialize in Java, Python, JavaScript, and modern frameworks like React and Node.js. With a
            strong foundation in DevOps practices, I deliver end-to-end solutions that are both performant and
            maintainable.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-6 shadow-lg"
            >
              <Link href="/projects">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              onClick={handleDownloadCV}
              variant="outline"
              className="bg-white/50 dark:bg-white/10 border-white/60 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-white/20 rounded-xl px-6"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">At a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/50 dark:bg-white/10 rounded-2xl p-5 text-center hover:bg-white/70 dark:hover:bg-white/15 transition-colors"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-white/50 dark:bg-white/10 rounded-2xl">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">My Coding Philosophy</h3>
            <div className="grid grid-cols-3 gap-4">
              {codingFocus.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-400/30 dark:to-pink-400/30 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                  </div>
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Highlights */}
        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Core Expertise</h2>
            <Link
              href="/skills"
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techHighlights.map((tech) => (
              <div
                key={tech.title}
                className="bg-white/50 dark:bg-white/10 rounded-2xl p-4 hover:bg-white/70 dark:hover:bg-white/15 transition-all hover:scale-105"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-3`}
                >
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-sm mb-2">{tech.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-white/60 dark:bg-white/20 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
