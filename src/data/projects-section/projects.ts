import {Projects} from "@/types/projects-section/projects";

export const projects: Projects = {
    frontend: [
        {
            id: "minemuHostingWeb",
            image: "/minemu-portada.png",
            tags: ["React", "Astro", "Tailwind CSS", "Docker", "Tailwind Motion", "Github Action CI"],
            productionUrl: "https://www.minemu.net/",
        },
        {
            id: "kailandWeb",
            image: "/kailand-portada.png",
            tags: ["React", "Astro", "Tailwind CSS"],
            productionUrl: "https://kailand.es/",
            repoUrl: "https://github.com/GatoArtStudio/kailand/tree/web",
        },
    ],
    backend: [
        {
            id: "appGatoBot",
            tags: ["Python", "FastAPI", "MySQL", "Astro", "React", "Tailwind CSS", "Docker"],
            image: "/gatobot-portada.png",
            productionUrl: "https://gatobot.gatoartstudio.art/",
            repoUrl: "https://github.com/GatoArtStudio/GatoBot",
        },
        {
            id: "botView",
            tags: ["Python", "selenium"],
            repoUrl: "https://github.com/GatoArtStudio/BotView",
        },
    ],
    desktop: [
        {
            id: "kailandLauncher",
            image: "https://raw.githubusercontent.com/GatoArtStudios/kailand/main/previews/opcional.png",
            tags: ["Python", "Flet"],
            repoUrl: "https://github.com/GatoArtStudio/kailand",
        },
        {
            id: "authGatun",
            tags: ["C#", "Avalonia UI", "SQLite", "OTP"],
            repoUrl: "https://github.com/GatoArtStudio/AuthGatun",
        },
    ],
    minecraft: [
        {
            id: "muneCratPlugin",
            tags: ["Java", "Folia API", "Paper API", "Geyser/Floodgate", "JDA", "Spring Security", "MySQL", "Vault", "Maven", "JUnit 5", "Mockito", "TestContainers", "Github Action CI/CD"],
            repoUrl: "https://github.com/GatoArtStudio/MuneCrat-Plugin",
        },
        {
            id: "kailandPluginMinecraft",
            image: "/kailand-plugin-portada.png",
            tags: ["Java", "Maven", "Spigot API", "MySQL", "JWT", "Spark"],
        },
    ],
}