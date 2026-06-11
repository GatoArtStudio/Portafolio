"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/language-switcher"
import { useState } from "react"

export default function Navbar() {
  const t = useTranslations("MainNavbar")
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const locale = pathname.split("/")[1] || "en"

  const navItems = [
    { href: `/${locale}`, label: t("buttonHome") },
    { href: `/${locale}/projects`, label: t("buttonProjects") },
    { href: `/${locale}/redes`, label: t("buttonSocial") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-wide mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-display text-lg font-semibold text-fg hover:text-accent transition-colors"
        >
          GatoArtStudio
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              item.href === `/${locale}`
                ? pathname === `/${locale}`
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-sm underline-draw transition-colors ${
                  isActive ? "text-accent" : "text-fg-muted hover:text-fg"
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <a
            href="mailto:contact@gatoartstudio.art"
            className="font-body text-sm text-fg-muted hover:text-fg underline-draw transition-colors"
          >
            {t("buttonContact")}
          </a>

          <LanguageSwitcher />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-mono text-xs text-fg-muted border border-border px-3 py-1.5"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-bg border-b border-border px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-base text-fg-muted hover:text-fg transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:contact@gatoartstudio.art"
            onClick={() => setMenuOpen(false)}
            className="block font-body text-base text-fg-muted hover:text-fg transition-colors"
          >
            {t("buttonContact")}
          </a>
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
