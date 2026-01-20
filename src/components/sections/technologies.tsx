"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icon } from "@iconify/react"

export default function Technologies() {
  const techRef = useRef<HTMLElement>(null)

  const technologies = [
    {
      category: "languages",
      title: "Lenguajes de Programación",
      items: [
        { name: "Java", icon: "skill-icons:java-light" },
        { name: "C#", icon: "devicon:csharp" },
        { name: "JavaScript", icon: "skill-icons:javascript" },
        { name: "TypeScript", icon: "skill-icons:typescript" },
        { name: "Python", icon: "skill-icons:python-light" },
        { name: "HTML5", icon: "skill-icons:html" },
        { name: "CSS3", icon: "skill-icons:css" },
      ],
    },
    {
      category: "scripting",
      title: "Lenguajes de Scripting",
      items: [
        { name: "Bash", icon: "skill-icons:bash-light" },
        { name: "PowerShell", icon: "skill-icons:powershell-light" },
        { name: "Groovy", icon: "devicon:groovy" },
        { name: "Lua", icon: "skill-icons:lua-light" },
      ],
    },
    {
      category: "frameworks",
      title: "APIs, Frameworks y Librerías",
      items: [
        { name: "React", icon: "skill-icons:react-light" },
        { name: "Astro", icon: "skill-icons:astro" },
        { name: "Node.js", icon: "skill-icons:nodejs-light" },
        { name: "TailwindCSS", icon: "skill-icons:tailwindcss-light" },
        { name: "Gradle", icon: "skill-icons:gradle-light" },
        { name: "Maven", icon: "skill-icons:maven-light" },
        { name: "GSAP", icon: "tdesign:animation" },
        { name: "Flask", icon: "skill-icons:flask-light" },
        { name: "Fast API", icon: "skill-icons:fastapi" },
        { name: "Discord Py", icon: "skill-icons:discord" },
        { name: "PaperMC", icon: "fa:paper-plane-o" },
        { name: "Folia", icon: "mdi:leaf" },
        { name: "Bukkit", icon: "entypo:bucket" },
        { name: "Fabric", icon: "file-icons:fabric" },
        { name: "Forge", icon: "simple-icons:curseforge" },
      ],
    },
    {
      category: "tools",
      title: "Herramientas y Tecnologías",
      items: [
        { name: "Git", icon: "skill-icons:git" },
        { name: "GitHub", icon: "skill-icons:github-light" },
        { name: "GitHub Actions", icon: "skill-icons:githubactions-light" },
        { name: "Docker", icon: "skill-icons:docker" },
        { name: "MySQL", icon: "skill-icons:mysql-light" },
        { name: "SQLite", icon: "skill-icons:sqlite" },
        { name: "Arch Linux", icon: "skill-icons:arch-light" },
        { name: "Debian", icon: "skill-icons:debian-light" },
        { name: "Markdown", icon: "skill-icons:markdown-light" },
        { name: "Blockbench", icon: "simple-icons:blockbench" },
      ],
    },
  ]

  return (
    <section id="technologies" ref={techRef} className="py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-on-scroll">Tecnologías y Herramientas</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full animate-on-scroll"></div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Las tecnologías y herramientas que utilizo para crear soluciones digitales eficientes y modernas.
          </p>
        </div>

        <Card className="border-2 border-muted animate-on-scroll">
          <CardContent className="p-6">
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="languages">Lenguajes</TabsTrigger>
                <TabsTrigger value="scripting">Scripting</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="tools">Herramientas</TabsTrigger>
              </TabsList>

              {technologies.map((techCategory) => (
                <TabsContent key={techCategory.category} value={techCategory.category} className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {techCategory.items.map((tech, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors duration-300 hover:border-primary border-2 border-transparent"
                      >
                        <div className="text-4xl mb-2 text-primary">
                          <Icon icon={tech.icon} width="48" height="48" />
                        </div>
                        <span className="text-sm font-medium text-center">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
