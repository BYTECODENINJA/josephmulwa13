import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
    skills: ["React", "Node.js", "Docker", "AWS"],
    current: true,
  },
  {
    title: "Full Stack Developer",
    company: "Software Agency",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects, focusing on backend APIs and frontend interfaces.",
    skills: ["Java", "Python", "MongoDB", "React"],
    current: false,
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2018 - 2020",
    description: "Started career developing web applications and learning modern development practices.",
    skills: ["JavaScript", "SQL", "Git", "Express"],
    current: false,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Work Experience</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-cyan-400" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative pl-16">
              {/* Timeline dot */}
              <div
                className={`absolute left-4 w-5 h-5 rounded-full border-4 border-white ${exp.current ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-gray-300 to-gray-400"}`}
              />

              <div
                className={`bg-white/50 rounded-2xl p-5 hover:bg-white/70 transition-colors ${exp.current ? "ring-2 ring-purple-400/50" : ""}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs bg-white/60 text-gray-600 px-3 py-1 rounded-full flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
