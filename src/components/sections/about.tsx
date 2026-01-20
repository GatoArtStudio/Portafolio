"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const aboutRef = useRef<HTMLElement>(null)

  return (
    <section id="about" ref={aboutRef} className="py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 animate-on-scroll">Sobre Mí</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full animate-on-scroll"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6 text-primary">Hervis Cortes</h3>
            <p className="text-lg mb-6 text-muted-foreground">
              Soy <span className="font-semibold text-foreground">Hervis Cortes</span>, un desarrollador de software apasionado por crear soluciones digitales innovadoras. Conocido en línea
              como <span className="font-semibold text-foreground">GatoArtStudio</span>, me especializo en desarrollo
              web, aplicaciones de escritorio y desarrollo para Minecraft.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Mi viaje en la programación comenzó con la curiosidad por entender cómo funcionan las cosas digitales que
              usamos todos los días. Esa curiosidad se convirtió en pasión, y esa pasión en una carrera dedicada a
              construir experiencias digitales excepcionales.
            </p>
            <p className="text-lg text-muted-foreground">
              Cuando no estoy codificando, me gusta explorar nuevas tecnologías, contribuir a proyectos de código
              abierto y compartir conocimientos con la comunidad de desarrolladores.
            </p>
          </div>

          <div className="order-1 lg:order-2 animate-on-scroll">
            <Card className="overflow-hidden border-2 border-muted hover:border-primary transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full max-w-md mx-auto">
                  <Image
                    src="/logo.jpg?height=500&width=500"
                    alt="Hervis Cortes - GatoArtStudio"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h4 className="text-xl font-bold">GatoArtStudio</h4>
                    <p className="text-sm text-muted-foreground">Desarrollador de Software</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
