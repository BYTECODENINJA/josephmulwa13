"use client"

import type React from "react"
import { useState } from "react"
import { X, Briefcase, FolderGit2, Calendar, DollarSign, Clock, Building, MapPin, Send } from "lucide-react"

type FormType = "project" | "work" | null

interface HireMeModalProps {
  isOpen: boolean
  onClose: () => void
}

const TARGET_EMAIL = "josephmulwa8055@gmail.com"

export function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const [formType, setFormType] = useState<FormType>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [projectForm, setProjectForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    technologies: "",
  })

  const [workForm, setWorkForm] = useState({
    name: "",
    email: "",
    companyName: "",
    yourRole: "",
    positionTitle: "",
    employmentType: "",
    workLocation: "",
    salaryRange: "",
    jobDescription: "",
    requiredSkills: "",
  })

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = `Project Inquiry: ${projectForm.projectType || "New Project"}`
    const body = `
PROJECT INQUIRY

Name: ${projectForm.name}
Email: ${projectForm.email}
Company: ${projectForm.company || "N/A"}

Project Type: ${projectForm.projectType}
Budget Range: ${projectForm.budget || "Not specified"}
Timeline: ${projectForm.timeline || "Not specified"}

Project Description:
${projectForm.description}

Preferred Technologies:
${projectForm.technologies || "Not specified"}
    `.trim()

    const mailtoLink = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormType(null)
      setProjectForm({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
        technologies: "",
      })
      onClose()
    }, 2000)
  }

  const handleWorkSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = `Employment Opportunity: ${workForm.positionTitle || "Job Opportunity"}`
    const body = `
EMPLOYMENT INQUIRY

Contact Information:
Name: ${workForm.name}
Email: ${workForm.email}
Role: ${workForm.yourRole || "N/A"}

Company: ${workForm.companyName}
Position Title: ${workForm.positionTitle}
Employment Type: ${workForm.employmentType}
Work Location: ${workForm.workLocation}
Salary Range: ${workForm.salaryRange || "Not specified"}

Job Description:
${workForm.jobDescription}

Required Skills:
${workForm.requiredSkills || "Not specified"}
    `.trim()

    const mailtoLink = `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormType(null)
      setWorkForm({
        name: "",
        email: "",
        companyName: "",
        yourRole: "",
        positionTitle: "",
        employmentType: "",
        workLocation: "",
        salaryRange: "",
        jobDescription: "",
        requiredSkills: "",
      })
      onClose()
    }, 2000)
  }

  const handleClose = () => {
    setFormType(null)
    setSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white/90 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/60 dark:border-white/10 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="p-6 md:p-8">
          {/* Success State */}
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-400">Opening your email client to send the inquiry...</p>
            </div>
          ) : !formType ? (
            /* Selection State */
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  Let's Work Together
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Choose the type of engagement you're interested in</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Project Option */}
                <button
                  onClick={() => setFormType("project")}
                  className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 border border-purple-200/50 dark:border-purple-500/30 rounded-2xl p-6 text-left transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FolderGit2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Project Based</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Need a specific project built? From web apps to APIs, let's discuss your requirements.
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Web Applications</li>
                    <li>• API Development</li>
                    <li>• DevOps Setup</li>
                    <li>• Consulting</li>
                  </ul>
                </button>

                {/* Work Option */}
                <button
                  onClick={() => setFormType("work")}
                  className="group bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-900/30 hover:from-cyan-100 hover:to-teal-100 dark:hover:from-cyan-900/50 dark:hover:to-teal-900/50 border border-cyan-200/50 dark:border-cyan-500/30 rounded-2xl p-6 text-left transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Employment</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Looking to hire for a full-time or contract position? Let's talk about the opportunity.
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <li>• Full-time Positions</li>
                    <li>• Contract Work</li>
                    <li>• Remote Opportunities</li>
                    <li>• Hybrid Roles</li>
                  </ul>
                </button>
              </div>
            </>
          ) : formType === "project" ? (
            /* Project Form */
            <>
              <button
                onClick={() => setFormType(null)}
                className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-4 flex items-center gap-1"
              >
                ← Back to options
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <FolderGit2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Project Inquiry</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tell me about your project</p>
                </div>
              </div>

              <form onSubmit={handleProjectSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={projectForm.name}
                      onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={projectForm.email}
                      onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={projectForm.company}
                    onChange={(e) => setProjectForm({ ...projectForm, company: e.target.value })}
                    placeholder="Your company name (optional)"
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Project Type *
                  </label>
                  <select
                    required
                    value={projectForm.projectType}
                    onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100"
                  >
                    <option value="">Select project type</option>
                    <option value="Web Application">Web Application</option>
                    <option value="API Development">API Development</option>
                    <option value="Full Stack Project">Full Stack Project</option>
                    <option value="DevOps / Infrastructure">DevOps / Infrastructure</option>
                    <option value="Technical Consulting">Technical Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      Budget Range
                    </label>
                    <select
                      value={projectForm.budget}
                      onChange={(e) => setProjectForm({ ...projectForm, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100"
                    >
                      <option value="">Select budget</option>
                        <option value="$10 - $500">$10 - $500</option>
                      <option value="$500 - $1,000">$500 - $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Let's Discuss">Let's Discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      Timeline
                    </label>
                    <select
                      value={projectForm.timeline}
                      onChange={(e) => setProjectForm({ ...projectForm, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100"
                    >
                      <option value="">Select timeline</option>
                      <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                      <option value="Short (2-4 weeks)">Short (2-4 weeks)</option>
                      <option value="Medium (1-2 months)">Medium (1-2 months)</option>
                      <option value="Long (3+ months)">Long (3+ months)</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Project Description *
                  </label>
                  <textarea
                    required
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                    placeholder="Describe your project, goals, and any specific requirements..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 resize-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Technologies Preferred
                  </label>
                  <input
                    type="text"
                    value={projectForm.technologies}
                    onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                    placeholder="e.g., React, Node.js, PostgreSQL..."
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Project Inquiry
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Work/Employment Form */
            <>
              <button
                onClick={() => setFormType(null)}
                className="text-sm text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-4 flex items-center gap-1"
              >
                ← Back to options
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Employment Inquiry</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tell me about the opportunity</p>
                </div>
              </div>

              <form onSubmit={handleWorkSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={workForm.name}
                      onChange={(e) => setWorkForm({ ...workForm, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={workForm.email}
                      onChange={(e) => setWorkForm({ ...workForm, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Building className="w-4 h-4 text-gray-500" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={workForm.companyName}
                      onChange={(e) => setWorkForm({ ...workForm, companyName: e.target.value })}
                      placeholder="Company Inc."
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Your Role</label>
                    <input
                      type="text"
                      value={workForm.yourRole}
                      onChange={(e) => setWorkForm({ ...workForm, yourRole: e.target.value })}
                      placeholder="e.g., HR Manager, CTO"
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Position Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={workForm.positionTitle}
                    onChange={(e) => setWorkForm({ ...workForm, positionTitle: e.target.value })}
                    placeholder="e.g., Senior Fullstack Developer"
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      Employment Type *
                    </label>
                    <select
                      required
                      value={workForm.employmentType}
                      onChange={(e) => setWorkForm({ ...workForm, employmentType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100"
                    >
                      <option value="">Select type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      Work Location *
                    </label>
                    <select
                      required
                      value={workForm.workLocation}
                      onChange={(e) => setWorkForm({ ...workForm, workLocation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100"
                    >
                      <option value="">Select location</option>
                      <option value="Remote">Remote</option>
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Job Description *
                  </label>
                  <textarea
                    required
                    value={workForm.jobDescription}
                    onChange={(e) => setWorkForm({ ...workForm, jobDescription: e.target.value })}
                    placeholder="Describe the role, responsibilities, and what you're looking for..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 resize-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Required Skills
                  </label>
                  <input
                    type="text"
                    value={workForm.requiredSkills}
                    onChange={(e) => setWorkForm({ ...workForm, requiredSkills: e.target.value })}
                    placeholder="e.g., React, Node.js, AWS, Docker..."
                    className="w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-white/10 border border-gray-200 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Employment Inquiry
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
