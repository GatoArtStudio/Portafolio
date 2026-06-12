"use client"

import { useTranslations } from "next-intl"
import Button from "@/components/button"

export default function CTA() {
  const t = useTranslations("MainCTA")

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-content mx-auto px-6">
        <div className="card-elevated relative overflow-hidden p-10 md:p-16 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, hsl(var(--accent) / 0.12) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, hsl(var(--accent) / 0.10) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-mono text-xs font-medium text-accent tracking-wide">
                {t("status")}
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-fg mb-6 text-balance">
              {t("title")}
            </h2>

            <p className="text-fg-muted text-base md:text-lg max-w-lg mx-auto mb-10 text-balance">
              {t("description")}
            </p>

            <Button href="mailto:gatoartstudio@gmail.com" className="text-base px-8 py-4">
              {t("button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
