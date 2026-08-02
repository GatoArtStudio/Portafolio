"use client"

import { useTranslations } from "next-intl"
import SectionHeader from "@/components/section-header"
import ContactForm from "@/components/contact-form"

export default function CTA() {
  const t = useTranslations("MainCTA")
  const tf = useTranslations("MainContactForm")

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader index={7} total={7} eyebrow={t("eyebrow")} title={t("title")} />

        <div className="max-w-2xl">
          {/* Sub-eyebrow status */}
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-xs font-medium text-accent tracking-wide uppercase">
              {t("status")}
            </span>
          </div>

          <p className="text-fg-muted text-base md:text-lg leading-relaxed mb-12 max-w-xl">
            {t("description")}
          </p>

          {/* Divider with bullet markers (matches site pattern) */}
          <div
            className="flex items-center gap-4 mb-10"
            aria-hidden="true"
          >
            <span className="inline-block w-1.5 h-1.5 bg-accent/40 rounded-full" />
            <div className="h-px flex-1 bg-border/60 max-w-[120px]" />
            <span className="inline-block w-1.5 h-1.5 bg-accent/30 rounded-full" />
          </div>

          {/* Form heading */}
          <div className="flex items-baseline justify-between mb-8 pb-2 border-b border-border/60">
            <h3 className="label-accent">{tf("formHeading")}</h3>
            <span className="font-mono text-xs text-fg-muted">01 / 01</span>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
