"use client"

import { useTranslations } from "next-intl"
import Tag from "@/components/tag"
import experienceData from "@/data/experience"

export default function Experience() {
  const t = useTranslations("MainExperience")
  const et = useTranslations("experience")

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <p className="eyebrow mb-3">{t("eyebrow")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-fg mb-14 text-balance">
          {t("title")}
        </h2>

        <div className="space-y-6">
          {experienceData.map((entry, i) => (
            <article
              key={i}
              className="card hover-glow p-6 md:p-8 transition-all duration-300"
            >
              <div className="border-l-2 border-accent/30 pl-5 group-hover:border-accent/60 transition-colors duration-300">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-fg mb-1">
                  {et(entry.role)}
                  <span className="text-fg-muted font-normal"> — {entry.company}</span>
                </h3>
                <p className="font-body text-xs font-medium text-fg-muted mb-4">
                  {et(entry.period)}
                </p>
                <p className="text-fg-muted text-base leading-relaxed mb-5">
                  {et(entry.description)}
                </p>

                <p className="label-accent mb-2">{t("resultsLabel")}</p>
                <ul className="space-y-2 mb-5">
                  {entry.results.map((result, j) => (
                    <li
                      key={j}
                      className="text-fg-muted text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:bg-accent/40 before:rounded-full"
                    >
                      {et(result)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
