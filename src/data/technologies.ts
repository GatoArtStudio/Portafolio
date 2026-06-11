export type TechGroup = {
  category: string
  items: string[]
}

const technologies: TechGroup[] = [
  {
    category: "languages",
    items: ["Java", "C#", "JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    category: "scripting",
    items: ["Bash", "PowerShell", "Groovy", "Lua"],
  },
  {
    category: "frameworks",
    items: [
      "React", "Astro", "Node.js", "TailwindCSS", "Gradle", "Maven",
      "GSAP", "Flask", "FastAPI", "Discord Py", "PaperMC", "Folia",
      "Bukkit", "Fabric", "Forge",
    ],
  },
  {
    category: "tools",
    items: [
      "Git", "GitHub", "GitHub Actions", "Docker", "MySQL", "SQLite",
      "Arch Linux", "Debian", "Markdown", "Blockbench",
    ],
  },
]

export default technologies
