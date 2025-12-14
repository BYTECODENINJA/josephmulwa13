import { Code2, Database, Server, Palette, GitBranch, Container } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "SQL"],
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["React", "Tailwind CSS", "GSAP", "HTML/CSS"],
    gradient: "from-purple-400 to-violet-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs"],
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "SQL", "PostgreSQL"],
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "DevOps",
    icon: Container,
    skills: ["Docker", "Kubernetes", "CI/CD"],
    gradient: "from-emerald-400 to-green-500",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab"],
    gradient: "from-indigo-400 to-blue-500",
  },
]

export function SkillsGrid() {
  return (
    <section id="skills" className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Technical Skills</h2>
        <h4>These bars do not present my actual knowledge but indeed how confident and how compatible I can implement these skills in an actual project.</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group relative bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow`}
            >
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-sm">{category.title}</h3>
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill) => (
                <span key={skill} className="text-xs bg-white/60 text-gray-600 px-2 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
