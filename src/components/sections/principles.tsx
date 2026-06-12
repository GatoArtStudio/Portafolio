"use client"

import { useTranslations } from "next-intl"
import SectionHeader from "@/components/section-header"

export default function Principles() {
  const t = useTranslations("MainPrinciples")
  const principles = [t("p1"), t("p2"), t("p3"), t("p4"), t("p5")]

  return (
    <section id="principles" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader index={5} total={7} eyebrow={t("eyebrow")} title={t("title")} />

        <ul className="space-y-4 max-w-2xl">
          {principles.map((principle, i) => (
            <li
              key={i}
              className="text-fg-muted text-base leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:bg-accent/30"
            >
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
