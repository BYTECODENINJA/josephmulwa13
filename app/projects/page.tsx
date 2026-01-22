import { PageLayout } from "@/components/page-layout"
import { FolderGit2, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Expense Tracker",
    description:
      "Full-stack expense tracking application with user authentication,clean and modern UI and real-time updates via WebSockets.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-blue-600 via-rose-400 to-green-500",
    github: "https://github.com/BYTECODENINJA/ExpenseTracker",
    live: "https://expensetracker-2bj9mtwg2-josephs-projects-895708a7.vercel.app/dashboard",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A windows UI looking Portfolio website for a fullstack developer with a clean and modern design. It features a dynamic resume section, a blog section, a contact form etc all represented in windows UI design.",
    tech: ["Tailwind CSS", "Next.js", "JavaScript", "React"],
    gradient: "from-purple-400 via-violet-400 to-indigo-500",
    github: "https://github.com/BYTECODENINJA/WindowsPortfolio",
    live: "https://windows-portfolio-ruby.vercel.app/",
    featured: true,
  },
  {
    title: "Productivity app",
    description:
      "A productivity app that helps you stay focused and organize your tasks. It features a clean and modern design with features like Calendar, day schedule, journal, Notebook, goal tracker, habits tracker and a pumodoro timer.",
    tech: ["React", "Tailwind CSS", "Typescript", "Javascript","Python"],
    gradient: "from-cyan-400 via-teal-400 to-emerald-500",
    github: "https://github.com/BYTECODENINJA/neo-focus",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "CI/CD Pipeline Tool",
    description:
      "Automated deployment pipeline with Docker containerization, Kubernetes orchestration, and monitoring dashboards.",
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Python"],
    gradient: "from-amber-400 via-orange-400 to-red-500",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat application with message encryption, file sharing, and multi-room support.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    gradient: "from-emerald-400 via-green-400 to-teal-500",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Inventory Management System",
    description: "Complete inventory tracking solution with barcode scanning, reporting, and supplier management.",
    tech: ["Java", "Spring Boot", "MySQL", "React"],
    gradient: "from-blue-400 via-indigo-400 to-purple-500",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
]

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <FolderGit2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Projects</h1>
              <p className="text-gray-600">A collection of my recent work</p>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-6 text-white shadow-xl group cursor-pointer hover:scale-[1.02] transition-transform min-h-[220px]`}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ongoing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.title}
                  className="bg-white/50 rounded-2xl p-5 hover:bg-white/70 transition-all hover:shadow-lg group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-3`}
                  >
                    <FolderGit2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-white/60 text-gray-600 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
