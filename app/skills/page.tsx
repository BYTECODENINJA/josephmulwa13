import { PageLayout } from "@/components/page-layout"
import { Code2, Database, Server, Palette, GitBranch, Container, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 50 },
      { name: "Python", level: 65 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 80 },
    ],
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "Frontend Development",
    icon: Palette,
    skills: [
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "GSAP", level: 60 },
      { name: "HTML/CSS", level: 95 },
    ],
    gradient: "from-purple-400 to-violet-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 85 },
      { name: "REST APIs", level: 75 },
      { name: "GraphQL", level: 55 },
    ],
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
    ],
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "DevOps & Cloud",
    icon: Container,
    skills: [
      { name: "Docker", level: 65 },
      { name: "Kubernetes", level: 65 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 75 },
    ],
    gradient: "from-emerald-400 to-green-500",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", level: 95 },
      { name: "GitHub", level: 95 },
      { name: "GitLab", level: 80 },
    ],
    gradient: "from-indigo-400 to-blue-500",
  },
]

export default function SkillsPage() {
  return (
    <PageLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Technical Skills</h1>
              <p className="text-gray-600 dark:text-gray-400">These bars do not present my actual knowledge but indeed how confident and how compatible I can implement these skills in an actual project.</p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "VS Code",
              "IntelliJ IDEA",
              "Postman",
              "Figma",
              "Jira",
              "Slack",
              "Linux",
              "Terminal",
              "npm",
              "Webpack",
              "Vite",
              "Jest",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white/50 rounded-xl text-gray-700 hover:bg-white/70 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
