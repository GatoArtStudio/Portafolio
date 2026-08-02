"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "@/components/language-switcher"
import { useScrollProgress, useMounted } from "@/hooks/use-scroll"
import { useState } from "react"

type NavItem = {
  href: string
  label: string
  isAnchor?: boolean
}

export default function Navbar() {
  const t = useTranslations("MainNavbar")
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { progress, scrolled } = useScrollProgress()
  const mounted = useMounted()
  const locale = pathname.split("/")[1] || "en"

  const navItems: NavItem[] = [
    { href: `/${locale}`, label: t("buttonHome") },
    { href: `/${locale}#experience`, label: t("buttonExperience"), isAnchor: true },
    { href: `/${locale}/projects`, label: t("buttonProjects") },
    { href: `/${locale}/redes`, label: t("buttonSocial") },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-border/60 transition-all duration-300 ${
          mounted && scrolled
            ? "h-12 shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            : "h-14 shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-px bg-accent transition-[width] duration-100 ease-out"
          style={{ width: mounted ? `${progress}%` : "0%" }}
          aria-hidden="true"
        />

        <nav className="max-w-wide mx-auto px-6 h-full flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="font-display text-lg font-semibold text-fg hover:text-accent transition-colors"
          >
            GatoArtStudio
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const basePath = item.href.split("#")[0]
              const isActive = item.isAnchor
                ? pathname === basePath
                : basePath === `/${locale}`
                ? pathname === `/${locale}`
                : pathname.startsWith(basePath)

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

            <Link
              href={`/${locale}#contact`}
              className="font-body text-sm text-fg-muted hover:text-fg underline-draw transition-colors"
            >
              {t("buttonContact")}
            </Link>

            <LanguageSwitcher />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden font-body text-xs font-medium text-fg-muted border border-border hover:border-accent/40 px-3 py-1.5 rounded-md transition-all duration-200"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="md:hidden fixed top-12 left-0 right-0 z-40 bg-bg/95 backdrop-blur-lg border-b border-border px-6 py-4 space-y-3">
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
          <Link
            href={`/${locale}#contact`}
            onClick={() => setMenuOpen(false)}
            className="block font-body text-base text-fg-muted hover:text-fg transition-colors"
          >
            {t("buttonContact")}
          </Link>
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </>
  )
}
