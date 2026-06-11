"use client"

import { useTranslations } from "next-intl"
import Tag from "@/components/tag"
import Button from "@/components/button"
import allProjects, { featuredIds } from "@/data/projects"

export default function Projects() {
  const t = useTranslations("MainProjects")
  const pt = useTranslations("projects")
  const l = useTranslations("projectLabels")

  const featured = allProjects.filter((p) => featuredIds.includes(p.id))

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <p className="eyebrow mb-3">{t("eyebrow")}</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-fg mb-14 text-balance">
          {t("title")}
        </h2>

        <div className="space-y-20">
          {featured.map((project) => (
            <div key={project.id}>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-fg mb-6">
                {pt(`${project.id}.title`)}
              </h3>

              <div className="space-y-5 text-fg-muted text-base leading-relaxed max-w-2xl">
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-wide">
                    {l("problem")}
                  </span>
                  <p className="mt-1">{pt(`${project.id}.problem`)}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-wide">
                    {l("solution")}
                  </span>
                  <p className="mt-1">{pt(`${project.id}.solution`)}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-wide">
                    {l("result")}
                  </span>
                  <p className="mt-1">{pt(`${project.id}.result`)}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {project.repoUrl && (
                  <Button href={project.repoUrl} variant="outline">
                    {l("viewCode")}
                  </Button>
                )}
                {project.productionUrl && (
                  <Button href={project.productionUrl} variant="outline">
                    {l("viewLive")}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="/projects" variant="outline">
            {t("viewAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}
