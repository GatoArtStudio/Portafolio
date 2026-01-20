import {Projects} from "@/types/projects-section/projects";

export const projects: Projects = {
    frontend: [
        {
            title: "Minemu Hosting",
            description: "Sitio web principal de Minemu Hosting, donde ofrecen servicios de hosting para minecraft y tienen una network para su comunidad.",
            image: "/minemu-portada.png",
            tags: ["React", "Astro", "Tailwind CSS", "Docker", "Tailwind Motion", "Github Action CI"],
            productionUrl: "https://www.minemu.net/",
        },
        {
            title: "Kailand",
            description: "Este sitio web cuenta con varias secciones que permiten a los usuarios de Kailand acceder a las redes sociales, descargar el launcher y explorar una wiki con información sobre los ítems y demás recursos personalizados del servidor.",
            image: "/kailand-portada.png",
            tags: ["React", "Astro", "Tailwind CSS"],
            productionUrl: "https://kailand.es/",
            repoUrl: "https://github.com/GatoArtStudio/kailand/tree/web",
        },
    ],
    backend: [
        {
            title: "GatoBot",
            description: "Bot de Discord en Python con un sistema de despliegue automatizado. Al iniciar el proyecto, se despliega un bot de Discord, un servidor API REST, un servicio web estático y un túnel de Cloudflare para brindar acceso a la web y a la API.",
            tags: ["Python", "FastAPI", "MySQL", "Astro", "React", "Tailwind CSS", "Docker"],
            image: "/gatobot-portada.png",
            productionUrl: "https://gatobot.gatoartstudio.art/",
            repoUrl: "https://github.com/GatoArtStudio/GatoBot",
        },
        {
            title: "BotView",
            description: "Esta herramienta te permite generar visualizaciones en tus vídeos, YouTube, Tiktok.",
            tags: ["Python", "selenium"],
            repoUrl: "https://github.com/GatoArtStudio/BotView",
        },
    ],
    desktop: [
        {
            title: "Kailand Launcher",
            description:
                "Launcher para Minecraft Java desarrollado en Python con Flet. Es totalmente automatizado, por lo que el usuario no necesita instalar nada. El launcher preconfigura e instala todo e incluye una sección de configuración y otra de mods client-side para personalizar el juego.",
            image: "https://raw.githubusercontent.com/GatoArtStudios/kailand/main/previews/opcional.png",
            tags: ["Python", "Flet"],
            repoUrl: "https://github.com/GatoArtStudio/kailand",
        },
        {
            title: "AuthGatun 2FA",
            description:
                "Aplicacion 2FA para windows, linux, y macOS, usando c# y Avalonia UI.",
            tags: ["C#", "Avalonia UI", "SQLite", "OTP"],
            repoUrl: "https://github.com/GatoArtStudio/AuthGatun",
        },
    ],
    minecraft: [
        {
            title: "MuneCraft Plugin",
            description: "MuneCrat-Plugin es un completo plugin de servidor Minecraft diseñado para el servidor comunitario MuñeCraft. Integra el juego Minecraft con la autenticación de Discord, proporciona funciones de juego personalizadas y ofrece herramientas administrativas para la gestión de servidores. El plugin requiere que los jugadores vinculen sus cuentas de Discord antes de acceder a las funciones del servidor e implementa un sofisticado sistema de permisos para el control de acceso a las características.",
            tags: ["Java", "Folia API", "Paper API", "Geyser/Floodgate", "JDA", "Spring Security", "MySQL", "Vault", "Maven", "JUnit 5", "Mockito", "TestContainers", "Github Action CI/CD"],
            repoUrl: "https://github.com/GatoArtStudio/MuneCrat-Plugin",
        },
        {
            title: "Kailand Plugin",
            description: "Este plugin le permite al servidor solo autorizar a una cuenta de minecraft ingresar al servidor de kailand, como sabe cual es la cuenta correcta?, pues tiene una api que recibe los datos de cada usuario del launcher de kailand.",
            image: "/kailand-plugin-portada.png",
            tags: ["Java", "Maven", "Spigot API", "MySQL", "JWT", "Spark"],
        },
    ],
}