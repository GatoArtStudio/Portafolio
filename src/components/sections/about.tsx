"use client"

import { useTranslations } from "next-intl"
import SectionHeader from "@/components/section-header"

export default function About() {
  const t = useTranslations("MainAbout")

  return (
    <section id="about" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader index={1} total={7} eyebrow={t("eyebrow")} title={t("title")} />
        <div className="space-y-5 text-fg-muted text-base md:text-lg leading-relaxed max-w-2xl">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </div>
    </section>
  )
}
