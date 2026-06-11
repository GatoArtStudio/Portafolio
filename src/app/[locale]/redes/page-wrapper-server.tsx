"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useTranslations } from "next-intl"
import { socialLinks } from "@/data/social/social"

export default function SocialMedia() {
  const t = useTranslations("PageSocialNetworks")

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-wide mx-auto px-6">
          <p className="eyebrow mb-3 text-center">{t("title")}</p>
          <p className="text-fg-muted text-base max-w-lg mx-auto text-center mb-14">
            {t("description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 border border-border hover-glow group"
              >
                <p className="font-display text-lg font-semibold text-fg mb-1 group-hover:text-accent transition-colors duration-200">
                  {social.name}
                </p>
                <p className="font-body text-xs font-medium text-fg-muted mb-3">
                  {social.username}
                </p>
                <p className="text-sm text-fg-muted leading-relaxed">
                  {t(`links.${social.id}.description`)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
