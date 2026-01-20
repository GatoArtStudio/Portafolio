"use client"

import {useEffect, useRef} from "react"
import {gsap} from "gsap"
import {Button} from "@/components/ui/button"
import {ChevronDown} from "lucide-react"
import {useTranslations} from 'next-intl';

export default function Hero() {
    const t = useTranslations('MainHero');
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate hero elements
            const tl = gsap.timeline()

            tl.from(".hero-title", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
            })
                .from(
                    ".hero-subtitle",
                    {
                        opacity: 0,
                        y: 30,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.6",
                )
                .from(
                    ".hero-description",
                    {
                        opacity: 0,
                        y: 30,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.8",
                )
                .from(
                    ".hero-button",
                    {
                        opacity: 0,
                        y: 30,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                    },
                    "-=0.6",
                )
                .from(
                    ".scroll-indicator",
                    {
                        opacity: 0,
                        y: -20,
                        duration: 0.8,
                        ease: "power2.out",
                        repeat: -1,
                        yoyo: true,
                    },
                    "-=0.4",
                )

            // Animate the gradient background
            gsap.to(".hero-gradient", {
                backgroundPosition: "200% 200%",
                duration: 15,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about")
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior: "smooth"})
        }
    }

    return (
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            <div
                className="hero-gradient absolute inset-0 bg-gradient-to-br from-background via-cyan-950/20 to-background bg-[length:200%_200%] z-0"></div>
            <div className="container mx-auto px-4 py-24 z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="hero-title text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        <span className="block">{t('title')}</span>
                        <span
                            className="block bg-gradient-to-r from-primary to-cyan-300 text-transparent bg-clip-text mt-2">
              GatoArtStudio
            </span>
                    </h1>
                    <h2 className="hero-subtitle text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
                        {t('subtitle')}
                    </h2>
                    <p className="hero-description text-lg md:text-xl text-muted-foreground mb-8">
                        {t('description')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Button className="hero-button" size="lg" asChild>
                            <a href="#projects">{t('buttonProjects')}</a>
                        </Button>
                        <Button className="hero-button" variant="outline" size="lg" asChild>
                            <a href="mailto:contact@gatoartstudio.art">{t('buttonContact')}</a>
                        </Button>
                    </div>

                    <div
                        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
                        onClick={scrollToAbout}
                    >
                        <ChevronDown className="h-8 w-8 text-primary animate-bounce"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
