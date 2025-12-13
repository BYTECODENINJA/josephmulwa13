import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, user authentication, and inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-pink-400 via-rose-400 to-purple-500",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with JWT authentication, role-based access control, and real-time updates.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    gradient: "from-purple-400 via-violet-400 to-indigo-500",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Dashboard",
    description: "Interactive portfolio dashboard with animated charts, GSAP animations, and responsive design.",
    tech: ["React", "Tailwind CSS", "GSAP", "JavaScript"],
    gradient: "from-cyan-400 via-teal-400 to-emerald-500",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "CI/CD Pipeline Tool",
    description: "Automated deployment pipeline with Docker containerization and Kubernetes orchestration.",
    tech: ["Docker", "Kubernetes", "GitHub Actions", "Python"],
    gradient: "from-amber-400 via-orange-400 to-red-500",
    github: "https://github.com",
    live: "https://example.com",
  },
]

export function ProjectsGrid() {
  return (
    <section id="projects" className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Featured Projects</h2>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
          View All <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-6 text-white shadow-xl group cursor-pointer hover:scale-[1.02] transition-transform`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">{project.description}</p>

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
    </section>
  )
}
