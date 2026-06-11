"use client"

import { useTranslations } from "next-intl"
import Button from "@/components/button"

export default function CTA() {
  const t = useTranslations("MainCTA")

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-content mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-fg mb-6 text-balance">
          {t("title")}
        </h2>
        <p className="text-fg-muted text-base md:text-lg max-w-lg mx-auto mb-8 text-balance">
          {t("description")}
        </p>
        <Button href="mailto:contact@gatoartstudio.art">{t("button")}</Button>
      </div>
    </section>
  )
}
