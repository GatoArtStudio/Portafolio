"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Tag from "@/components/tag"
import Button from "@/components/button"
import BackgroundGlow from "@/components/background-glow"
import allProjects from "@/data/projects"
import { useTranslations } from "next-intl"

export default function ProjectsPageWrapper() {
  const t = useTranslations("PageProjects")
  const pt = useTranslations("projects")
  const l = useTranslations("projectLabels")

  return (
    <div className="min-h-screen bg-bg text-fg relative">
      <BackgroundGlow variant="reduced" />
      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="max-w-wide mx-auto px-6">
          <p className="eyebrow mb-3">{t("title")}</p>
          <p className="text-fg-muted text-base max-w-lg mb-14">{t("description")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="card hover-glow p-6 flex flex-col transition-all duration-300"
              >
                {project.image && (
                  <div className="mb-5 overflow-hidden">
                    <img
                      src={project.image}
                      alt={pt(`${project.id}.title`)}
                      className="w-full h-48 object-cover rounded-sm transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <h3 className="font-display text-xl font-semibold text-fg mb-3">
                  {pt(`${project.id}.title`)}
                </h3>

                <p className="text-fg-muted text-sm leading-relaxed mb-4 flex-1">
                  {pt(`${project.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 8).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                  {project.tags.length > 8 && (
                    <Tag>+{project.tags.length - 8}</Tag>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
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

          <div className="mt-14 text-center">
            <Button href="/" variant="outline">
              {t("backToHome")}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
