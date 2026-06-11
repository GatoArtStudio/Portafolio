"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

export default function Footer() {
  const t = useTranslations("MainFooter")
  const pathname = usePathname()
  const locale = pathname.split("/")[1] || "en"
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-wide mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="max-w-xs">
            <p className="font-display text-lg font-semibold text-fg mb-2">GatoArtStudio</p>
            <p className="text-fg-muted text-sm leading-relaxed">{t("description")}</p>
          </div>

          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-wide mb-3">
              {t("sectionLinks")}
            </p>
            <div className="space-y-2">
              <Link
                href={`/${locale}`}
                className="block text-sm text-fg-muted hover:text-fg underline-draw w-fit transition-colors"
              >
                {t("buttonHome")}
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="block text-sm text-fg-muted hover:text-fg underline-draw w-fit transition-colors"
              >
                {t("buttonProjects")}
              </Link>
              <Link
                href={`/${locale}/redes`}
                className="block text-sm text-fg-muted hover:text-fg underline-draw w-fit transition-colors"
              >
                {t("buttonSocialNetworks")}
              </Link>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-wide mb-3">
              {t("sectionConnect")}
            </p>
            <div className="space-y-2">
              <a
                href="https://github.com/GatoArtStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-fg-muted hover:text-fg underline-draw w-fit transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hervis-cortes/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-fg-muted hover:text-fg underline-draw w-fit transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/GatoArtStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-fg-muted hover:text-fg underline-draw w-fit transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 pt-6 border-t border-border font-mono text-xs text-fg-muted">
          {t("copyright", { year })}
        </p>
      </div>
    </footer>
  )
}
