import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-balance">
            Welcome! I'm a Fullstack Developer 👋
          </h1>
          <p className="text-gray-600 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Based in Kenya • Open to remote opportunities
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search my work..."
              className="px-4 py-2 pr-10 rounded-xl bg-white/60 border border-white/40 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 w-full md:w-64"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            JD
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl px-6 shadow-lg">
          View Projects
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button
          variant="outline"
          className="bg-white/50 border-white/60 text-gray-700 hover:bg-white/70 rounded-xl px-6"
        >
          Download CV
        </Button>
      </div>
    </div>
  )
}
