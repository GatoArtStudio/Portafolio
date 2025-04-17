"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Github, Linkedin, Twitter, Instagram, Youtube, Twitch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import { ROUTES } from "@/lib/routes"

export default function SocialMedia() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Asegurarse de que todas las tarjetas comienzan con opacidad 0
    gsap.set(".social-card", { opacity: 0, y: 50 })

    // Crear un contexto GSAP para limpiar animaciones al desmontar
    const ctx = gsap.context(() => {
      // Animar todas las tarjetas con un stagger más largo
      gsap.to(".social-card", {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      })
    }, containerRef)

    // Limpiar animaciones al desmontar
    return () => ctx.revert()
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      username: "GatoArtStudio",
      url: ROUTES.OTHERS.GITHUB.URL,
      icon: <Github className="h-6 w-6" />,
      description: "Repositorios de código y contribuciones open source",
    },
    {
      name: "LinkedIn",
      username: "Hervis Cortes",
      url: ROUTES.OTHERS.LINKEDIN.URL,
      icon: <Linkedin className="h-6 w-6" />,
      description: "Perfil profesional y conexiones laborales",
    },
    {
      name: "Twitter",
      username: "@GatoArtStudio",
      url: ROUTES.OTHERS.TWITTER.URL,
      icon: <Twitter className="h-6 w-6" />,
      description: "Actualizaciones y discusiones sobre tecnología",
    },
    {
      name: "Instagram",
      username: "@GatoArtStudio",
      url: ROUTES.OTHERS.INSTAGRAM.URL,
      icon: <Instagram className="h-6 w-6" />,
      description: "Momentos de mi viaje creativo",
    },
    {
      name: "Facebook",
      username: "GatoArtStudio",
      url: ROUTES.OTHERS.FACEBOOK.URL,
      icon: <Icon icon="lucide:facebook" className="h-6 w-6" />,
      description: "Comunidad y actualizaciones personales",
    },
    {
      name: "YouTube",
      username: "GatoArtStudio",
      url: ROUTES.OTHERS.YOUTUBE.URL,
      icon: <Youtube className="h-6 w-6" />,
      description: "Tutoriales y sesiones de programación",
    },
    {
      name: "Twitch",
      username: "GatoArtStudio",
      url: ROUTES.OTHERS.TWITCH.URL,
      icon: <Twitch className="h-6 w-6" />,
      description: "Streams en vivo de programación y gaming",
    },
    {
      name: "WhatsApp",
      username: "@GatoArtStudio",
      url: ROUTES.OTHERS.WHATSAPP.URL,
      icon: <Icon icon="ic:baseline-whatsapp" className="h-6 w-6" />,
      description: "Contacto directo para consultas rápidas",
    },
    {
      name: "Discord",
      username: "GatoAS",
      url: ROUTES.OTHERS.DISCORD.URL,
      icon: <Icon icon="iconoir:discord" className="h-6 w-6" />,
      description: "Comunidad y soporte técnico",
    },
    {
      name: "TikTok",
      username: "@GatoArtStudio",
      url: ROUTES.OTHERS.TIKTOK.URL,
      icon: <Icon icon="simple-icons:tiktok" className="h-6 w-6" />,
      description: "Contenido corto sobre programación y tecnología",
    },
    {
      name: "Patreon",
      username: "GatoArtStudio",
      url: ROUTES.OTHERS.PATREON.URL,
      icon: <Icon icon="simple-icons:patreon" className="h-6 w-6" />,
      description: "Apoya mi trabajo y accede a contenido exclusivo",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">Conecta Conmigo</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra a GatoArtStudio en todas las plataformas y redes sociales. ¡Sígueme para estar al día con mis
            proyectos y contenido!
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <Card
              key={index}
              className="flex flex-col social-card border-2 border-muted hover:border-primary transition-all duration-300"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full text-primary">{social.icon}</div>
                <div>
                  <CardTitle>{social.name}</CardTitle>
                  <CardDescription>{social.username}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="mb-4 text-muted-foreground">{social.description}</p>
                <div className="mt-auto">
                  <Button asChild className="w-full" variant="outline">
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      Visitar {social.name}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
