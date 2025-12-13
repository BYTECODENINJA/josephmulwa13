import { PageLayout } from "@/components/page-layout"
import { Heart, Brain, Cpu, Cloud, Shield, Smartphone, Globe, Database, Rocket, Zap, Bot, Network } from "lucide-react"

const interests = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Exploring machine learning algorithms, neural networks, and AI-powered applications. Fascinated by how AI is transforming software development.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    topics: ["Machine Learning", "Neural Networks", "NLP", "Computer Vision"],
  },
  {
    title: "Cloud Computing",
    description:
      "Building and deploying scalable applications on cloud platforms. Interested in serverless architectures and microservices.",
    icon: Cloud,
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/20 to-blue-500/20",
    topics: ["AWS", "Azure", "GCP", "Serverless"],
  },
  {
    title: "DevOps & Automation",
    description:
      "Automating deployment pipelines, infrastructure as code, and continuous integration/delivery practices.",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/20 to-red-500/20",
    topics: ["CI/CD", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Cybersecurity",
    description:
      "Understanding security best practices, ethical hacking, and building secure applications from the ground up.",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    topics: ["Penetration Testing", "Secure Coding", "OWASP", "Encryption"],
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile experiences using React Native and exploring native development.",
    icon: Smartphone,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/20 to-purple-500/20",
    topics: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    title: "Web3 & Blockchain",
    description: "Exploring decentralized applications, smart contracts, and the future of web technologies.",
    icon: Network,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
    topics: ["Smart Contracts", "DApps", "Ethereum", "Solidity"],
  },
  {
    title: "System Design",
    description: "Designing scalable, reliable, and efficient software architectures for complex applications.",
    icon: Database,
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/20 to-rose-500/20",
    topics: ["Microservices", "API Design", "Caching", "Load Balancing"],
  },
  {
    title: "Open Source",
    description: "Contributing to open source projects and building tools that help the developer community.",
    icon: Globe,
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-500/20 to-cyan-500/20",
    topics: ["GitHub", "Community", "Collaboration", "Documentation"],
  },
]

const currentlyExploring = [
  { name: "Large Language Models", icon: Bot, progress: 70 },
  { name: "Edge Computing", icon: Cpu, progress: 55 },
  { name: "WebAssembly", icon: Zap, progress: 40 },
]

export default function InterestsPage() {
  return (
    <PageLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Tech Interests</h1>
              <p className="text-gray-600 dark:text-gray-400">What excites me in the tech world</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Beyond my core skills, I am constantly exploring new technologies and domains. Here are the areas that fuel
            my curiosity and drive my continuous learning journey.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/40 dark:border-white/10 shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${interest.bgGradient} dark:opacity-80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${interest.gradient} flex items-center justify-center`}
                >
                  <interest.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{interest.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{interest.description}</p>

              <div className="flex flex-wrap gap-2">
                {interest.topics.map((topic) => (
                  <span
                    key={topic}
                    className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${interest.bgGradient} dark:bg-white/10 text-gray-700 dark:text-gray-300`}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Exploring */}
        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Currently Exploring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentlyExploring.map((item) => (
              <div key={item.name} className="bg-white/50 dark:bg-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{item.name}</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.progress}% explored</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-cyan-500/10 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl p-8 text-center">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic">
            &quot;The only way to do great work is to love what you do.&quot;
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">— Steve Jobs</p>
        </div>
      </div>
    </PageLayout>
  )
}
