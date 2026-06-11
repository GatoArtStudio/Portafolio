"use client"

import { useTranslations } from "next-intl"

export default function About() {
  const t = useTranslations("MainAbout")

  return (
    <section id="about" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-fg mb-8 text-balance">
          {t("title")}
        </h2>
        <div className="space-y-5 text-fg-muted text-base md:text-lg leading-relaxed max-w-2xl">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </div>
    </section>
  )
}
