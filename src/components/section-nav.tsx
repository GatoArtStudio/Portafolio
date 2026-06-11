"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { useMounted } from "@/hooks/use-scroll"

const sectionIds = [
  "hero",
  "about",
  "experience",
  "projects",
  "how-i-work",
  "principles",
  "technologies",
  "contact",
] as const

export default function SectionNav() {
  const t = useTranslations("SectionNav")
  const [active, setActive] = useState("hero")
  const [visible, setVisible] = useState(false)
  const mounted = useMounted()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: [0, 0.2, 0.5, 1] }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const onScroll = () => setVisible(window.scrollY > 300)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const showNav = mounted && visible

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 hidden lg:block ${
        showNav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col gap-4">
        {sectionIds.map((id) => {
          const isActive = mounted && active === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-center justify-end gap-3"
                aria-label={t(id)}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`font-mono text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "text-accent opacity-100 translate-x-0"
                      : "text-fg-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  {t(id)}
                </span>
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3 h-3 bg-accent"
                      : "w-1.5 h-1.5 bg-fg-muted/50 group-hover:bg-accent/60"
                  }`}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
