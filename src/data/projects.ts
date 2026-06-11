export type Project = {
  id: string
  category: string
  image?: string
  tags: string[]
  repoUrl?: string
  productionUrl?: string
}

const projects: Project[] = [
  {
    id: "minemuHostingWeb",
    category: "frontend",
    image: "/minemu-portada.png",
    tags: ["React", "Astro", "TailwindCSS", "Docker", "Tailwind Motion", "GitHub Actions CI"],
    productionUrl: "https://www.minemu.net/",
  },
  {
    id: "kailandWeb",
    category: "frontend",
    image: "/kailand-portada.png",
    tags: ["React", "Astro", "TailwindCSS"],
    productionUrl: "https://kailand.es/",
    repoUrl: "https://github.com/GatoArtStudio/kailand/tree/web",
  },
  {
    id: "appGatoBot",
    category: "backend",
    image: "/gatobot-portada.png",
    tags: ["Python", "FastAPI", "MySQL", "Astro", "React", "TailwindCSS", "Docker"],
    productionUrl: "https://gatobot.gatoartstudio.art/",
    repoUrl: "https://github.com/GatoArtStudio/GatoBot",
  },
  {
    id: "botView",
    category: "backend",
    tags: ["Python", "Selenium"],
    repoUrl: "https://github.com/GatoArtStudio/BotView",
  },
  {
    id: "kailandLauncher",
    category: "desktop",
    image: "https://raw.githubusercontent.com/GatoArtStudios/kailand/main/previews/opcional.png",
    tags: ["Python", "Flet"],
    repoUrl: "https://github.com/GatoArtStudio/kailand",
  },
  {
    id: "authGatun",
    category: "desktop",
    tags: ["C#", "Avalonia UI", "SQLite", "OTP"],
    repoUrl: "https://github.com/GatoArtStudio/AuthGatun",
  },
  {
    id: "muneCratPlugin",
    category: "minecraft",
    tags: ["Java", "Folia API", "Paper API", "Geyser/Floodgate", "JDA", "Spring Security", "MySQL", "Vault", "Maven", "JUnit 5", "Mockito", "TestContainers", "GitHub Actions CI/CD"],
    repoUrl: "https://github.com/GatoArtStudio/MuneCrat-Plugin",
  },
  {
    id: "kailandPluginMinecraft",
    category: "minecraft",
    image: "/kailand-plugin-portada.png",
    tags: ["Java", "Maven", "Spigot API", "MySQL", "JWT", "Spark"],
  },
]

export const featuredIds = ["minemuHostingWeb", "kailandWeb"]

export default projects
