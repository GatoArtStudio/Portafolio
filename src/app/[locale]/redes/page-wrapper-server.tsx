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
import {useTranslations} from "next-intl";
import {socialLinks} from "@/data/social/social";

export default function SocialMedia() {
    const t = useTranslations('PageSocialNetworks');
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

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 py-24">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">{t('title')}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('description')}
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
                                <p className="mb-4 text-muted-foreground">{t(`links.${social.id}.description`)}</p>
                                <div className="mt-auto">
                                    <Button asChild className="w-full" variant="outline">
                                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                                            {t('buttonCardVisitSocial', {platform: social.name})}
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
