"use client"

import { useTranslations } from "next-intl"
import Tag from "@/components/tag"
import technologiesData from "@/data/technologies"

export default function Technologies() {
  const t = useTranslations("MainTechnologies")
  const tt = useTranslations("technologies")

  return (
    <section id="technologies" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <p className="eyebrow mb-3">{t("eyebrow")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-fg mb-12 text-balance">
          {t("title")}
        </h2>

        <div className="space-y-8 max-w-2xl">
          {technologiesData.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-accent uppercase tracking-wide mb-3">
                {tt(group.category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
