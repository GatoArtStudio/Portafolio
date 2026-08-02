import type { ExperienceEntry } from "@/types/experience/experience"

const experience: ExperienceEntry[] = [
  {
    role: "minemu.role",
    company: "Minemu",
    period: "minemu.period",
    description: "minemu.description",
    results: ["minemu.result1", "minemu.result2", "minemu.result3", "minemu.result4"],
    technologies: ["Java", "C#", "TypeScript", "React", "Next.js"],
  },
  {
    role: "authgatun.role",
    company: "AuthGatun App",
    period: "authgatun.period",
    description: "authgatun.description",
    results: ["authgatun.result1", "authgatun.result2", "authgatun.result3", "authgatun.result4"],
    technologies: ["C#", "Avalonia UI", "SQLite"],
  },
  {
    role: "kailand.role",
    company: "Kailand V",
    period: "kailand.period",
    description: "kailand.description",
    results: ["kailand.result1", "kailand.result2", "kailand.result3", "kailand.result4"],
    technologies: ["Java", "Astro", "TailwindCSS", "SQL"],
  },
]

export default experience