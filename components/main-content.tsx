import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsGrid } from "@/components/skills-grid"
import { ProjectsGrid } from "@/components/projects-grid"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export function MainContent() {
  return (
    <main className="flex-1 space-y-4 md:space-y-6 lg:pl-4">
      <HeroSection />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2">
          <StatsSection />
        </div>
        <div className="lg:col-span-1">
          <SkillsSection />
        </div>
      </div>
      <ProjectsSection />
      <SkillsGrid />
      <ProjectsGrid />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}
