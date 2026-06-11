"use client"

import { useTranslations } from "next-intl"

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
        <p className="eyebrow mb-3">{t("eyebrow")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-fg mb-14 text-balance">
          {t("title")}
        </h2>

        <div className="space-y-0">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-6 py-6 border-t border-border first:border-t-0">
              <span className="font-mono text-sm text-accent mt-1 shrink-0 tabular-nums">
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
    </section>
  )
}
