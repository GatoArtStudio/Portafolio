"use client"

import { useTranslations } from "next-intl"
import Button from "@/components/button"
import BlueprintSketch from "@/components/blueprint-sketch"

export default function Hero() {
  const t = useTranslations("MainHero")

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <BlueprintSketch />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 w-full py-20">
        <p className="eyebrow mb-6 animate-fade-in">{t("eyebrow")}</p>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-fg mb-6 text-balance animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          {t("name")}
        </h1>

        <p
          className="font-display text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-fg-muted max-w-2xl mb-6 text-balance animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          {t("headline")}
        </p>

        <p
          className="font-body text-base md:text-lg text-fg-muted max-w-xl mb-10 animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          {t("description")}
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button href="#projects">{t("buttonProjects")}</Button>
          <Button href="mailto:contact@gatoartstudio.art" variant="outline">
            {t("buttonContact")}
          </Button>
        </div>
      </div>
    </section>
  )
}
