"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, ImageOff } from "lucide-react"

interface Project {
  title: string
  description: string
  image?: string
  tags: string[]
  productionUrl?: string
  repoUrl?: string
}

interface Projects {
  frontend: Project[]
  backend: Project[]
  desktop: Project[]
  minecraft: Project[]
}

export default function Projects() {
  const projectsRef = useRef<HTMLElement>(null)

  const projects: Projects = {
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

  return (
    <section id="projects" ref={projectsRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-on-scroll">Mis Proyectos</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full animate-on-scroll"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Una selección de proyectos que demuestran mis habilidades y experiencia en diferentes áreas de desarrollo.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full animate-on-scroll">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="minecraft">Minecraft</TabsTrigger>
          </TabsList>

          {Object.entries(projects).map(([category, categoryProjects]) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryProjects.map((project: Project, index: number) => (
                  <Card
                    key={index}
                    className="overflow-hidden flex flex-col border-2 border-muted hover:border-primary transition-all duration-300"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      {project.image ? (
                          <img
                              src={project.image || "/placeholder.png"}
                              alt={project.title}
                              className="object-cover w-auto min-w-full transition-transform duration-500 hover:scale-105"
                          />
                      ) : (
                          <div className="w-full h-full bg-muted animate-pulse flex flex-col justify-center items-center gap-2">
                            <ImageOff />
                              <p>
                                No disponible
                              </p>
                          </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string, tagIndex: number) => (
                          <Badge key={tagIndex} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      {project.repoUrl ? (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Código
                            </a>
                          </Button>
                      ) : (
                          <Button variant="outline" size="sm" disabled>
                            <Github className="mr-2 h-4 w-4" />
                            Privado
                          </Button>
                      )}
                      {project.productionUrl ? (
                          <Button size="sm" asChild>
                            <a href={project.productionUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Ver en producción
                            </a>
                          </Button>
                      ) : (
                          <Button size="sm" disabled>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Privado
                          </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
