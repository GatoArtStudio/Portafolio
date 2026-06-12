"use client"

import { useTranslations } from "next-intl"
import SectionHeader from "@/components/section-header"

export default function HowIWork() {
  const t = useTranslations("MainHowIWork")
  const steps = [
    { num: 1, title: t("step1.title"), desc: t("step1.description") },
    { num: 2, title: t("step2.title"), desc: t("step2.description") },
    { num: 3, title: t("step3.title"), desc: t("step3.description") },
    { num: 4, title: t("step4.title"), desc: t("step4.description") },
  ]

  return (
    <section id="how-i-work" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader index={4} total={7} eyebrow={t("eyebrow")} title={t("title")} />

        <div className="relative max-w-2xl">
          {/* Vertical connector line */}
          <div
            className="absolute left-[1.625rem] top-3 bottom-3 w-px bg-gradient-to-b from-accent/30 via-accent/20 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group relative flex gap-6 py-6 first:pt-0 transition-colors duration-300"
              >
                <span className="font-display text-sm font-semibold text-fg-muted mt-1 shrink-0 transition-colors duration-300 group-hover:text-accent relative z-10 bg-bg px-1">
                  {String(step.num).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-fg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-fg-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
