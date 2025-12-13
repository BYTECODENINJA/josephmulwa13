import { ArrowRight } from "lucide-react"

const recentWork = [
  { title: "E-Commerce Platform", duration: "3 months", type: "Full Stack" },
  { title: "API Development", duration: "1 month", type: "Backend" },
]

export function SkillsSection() {
  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Recent Work</h2>
        <div className="flex gap-1">
          <button className="p-1 rounded-lg hover:bg-white/50 transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
          </button>
          <button className="p-1 rounded-lg hover:bg-white/50 transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {recentWork.map((work) => (
          <div
            key={work.title}
            className="bg-white/50 rounded-2xl p-4 hover:bg-white/70 transition-colors cursor-pointer group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center shrink-0">
                <span className="text-white">▶</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 truncate">{work.title}</h3>
                <p className="text-sm text-gray-500">{work.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
