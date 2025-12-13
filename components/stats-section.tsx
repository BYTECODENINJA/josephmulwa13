import { Briefcase, FolderGit2, Clock } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    value: "5+",
    label: "Years Experience",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: FolderGit2,
    value: "30+",
    label: "Projects Completed",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Clock,
    value: "100%",
    label: "Client Satisfaction",
    color: "from-cyan-400 to-cyan-600",
  },
]

export function StatsSection() {
  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Statistics</h2>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/50 rounded-2xl p-4 text-center hover:bg-white/70 transition-colors">
            <div
              className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mini chart visualization */}
      <div className="mt-4 p-4 bg-white/50 rounded-2xl">
        <div className="flex items-end justify-between h-16 gap-1">
          {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-purple-400 to-pink-400 rounded-t-md transition-all hover:from-purple-500 hover:to-pink-500"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">Weekly Activity</p>
      </div>
    </div>
  )
}
