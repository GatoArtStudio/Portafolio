"use client"

import { useTranslations } from "next-intl"
import Tag from "@/components/tag"
import SectionHeader from "@/components/section-header"
import technologiesData from "@/data/technologies"

export default function Technologies() {
  const t = useTranslations("MainTechnologies")
  const tt = useTranslations("technologies")
  const totalCount = technologiesData.reduce((acc, g) => acc + g.items.length, 0)

  return (
    <section id="technologies" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader index={6} total={7} eyebrow={t("eyebrow")} title={t("title")} />

        {/* Sub-eyebrow total count */}
        <p className="font-mono text-xs text-fg-muted -mt-6 mb-10">
          {totalCount} {tt("totalLabel")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 max-w-3xl">
          {technologiesData.map((group) => (
            <div key={group.category}>
              <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-border/60">
                <h3 className="label-accent">{tt(group.category)}</h3>
                <span className="font-mono text-xs text-fg-muted tabular-nums">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
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
