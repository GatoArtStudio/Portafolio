"use client"

import { useEffect, useState } from "react"
import { useMounted } from "@/hooks/use-scroll"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const mounted = useMounted()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const showButton = mounted && visible

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-md border border-accent/40 bg-bg/80 backdrop-blur-lg text-accent flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_24px_-6px_hsl(var(--accent)/0.4)] ${
        showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        suppressHydrationWarning
      >
        <path
          d="M8 12V4M8 4L4 8M8 4L12 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
