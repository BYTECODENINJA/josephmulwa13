import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Expense Tracker",
    subtitle: "React • Node.js • MongoDB",
    progress: 90,
    lessons: "Java • Python • JavaScript",
    tasks: "Express • SQL",
    gradient: "from-pink-400 via-rose-400 to-purple-500",
    image: "/fullstack-development-3d-illustration.jpg",
  },
  {
    title: "DevOps & Cloud",
    subtitle: "Docker • Kubernetes • Git",
    progress: 85,
    lessons: "CI/CD Pipelines",
    tasks: "GitHub Actions",
    gradient: "from-purple-400 via-violet-400 to-indigo-500",
    image: "/devops-cloud-infrastructure-3d-illustration.jpg",
  },
  {
    title: "Frontend Mastery",
    subtitle: "React • GSAP • Tailwind CSS",
    progress: 95,
    lessons: "UI/UX Design",
    tasks: "Animations",
    gradient: "from-cyan-400 via-teal-400 to-emerald-500",
    image: "/frontend-development-ui-design-3d-illustration.jpg",
  },
]

export function ProjectsSection() {
  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">My Expertise</h2>
        <div className="flex gap-1">
          <button className="p-1 rounded-lg hover:bg-white/50 transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
          </button>
          <button className="p-1 rounded-lg hover:bg-white/50 transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient} p-6 text-white shadow-xl group cursor-pointer hover:scale-[1.02] transition-transform`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-white/80 text-sm mb-4">{project.subtitle}</p>

              {/* Progress circle */}
              <div className="relative w-16 h-16 mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeDasharray={`${project.progress}, 100`}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {project.progress}%
                </span>
              </div>

              {/* Image */}
              <div className="h-24 mb-4 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="max-h-full w-auto object-contain drop-shadow-lg"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-white/70">{project.lessons}</p>
                  <p className="text-white/70">{project.tasks}</p>
                </div>
                <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
