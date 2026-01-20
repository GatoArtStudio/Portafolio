"use client"

import {useEffect} from "react"
import Link from "next/link"
import {gsap} from "gsap"
import {Github, Linkedin, Twitter} from "lucide-react"
import {ROUTES} from "@/lib/routes"
import {useTranslations, useLocale} from "next-intl";

export default function Footer() {
    const t = useTranslations('MainFooter');
    const locale = useLocale();
    useEffect(() => {
        // Animate footer on scroll into view
        gsap.from(".footer", {
            scrollTrigger: {
                trigger: ".footer",
                start: "top bottom",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
        })
    }, [])

    return (
        <footer className="footer bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link href={`/${locale}${ROUTES.PAGES.HOME.URL}`} className="inline-block mb-4">
              <span
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-300 text-transparent bg-clip-text">
                GatoArtStudio
              </span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs">
                            {t('description')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('sectionLinks')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={`/${locale}${ROUTES.PAGES.HOME.URL}`}
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    {t('buttonHome')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}${ROUTES.PAGES.REDES.URL}`}
                                      className="text-muted-foreground hover:text-primary transition-colors">
                                    {t('buttonSocialNetworks')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('sectionConnect')}</h3>
                        <div className="flex space-x-4">
                            <a
                                href={ROUTES.OTHERS.GITHUB.URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Github className="h-6 w-6"/>
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href={ROUTES.OTHERS.TWITTER.URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Twitter className="h-6 w-6"/>
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href={ROUTES.OTHERS.LINKEDIN.URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-6 w-6"/>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>&copy; {t('copyright', {year: new Date().getFullYear()})}</p>
                </div>
            </div>
        </footer>
    )
}
