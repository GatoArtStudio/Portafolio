"use client"

import { useEffect, useRef, useState, useCallback } from "react"

type Props = {
  variant?: "full" | "reduced"
}

export default function BackgroundGlow({ variant = "full" }: Props) {
  const orbARef = useRef<HTMLDivElement>(null)
  const orbBRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef({ x: -500, y: -500 })
  const lastMoveRef = useRef<number>(0)
  const currentRef = useRef({ a: { x: -500, y: -500 }, b: { x: -500, y: -500 } })
  const [isTouch, setIsTouch] = useState(false)

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const animate = useCallback(() => {
    const m = mouseRef.current
    const c = currentRef.current
    const idle = Date.now() - lastMoveRef.current > 2000

    if (!idle) {
      c.a.x = lerp(c.a.x, m.x, 0.04)
      c.a.y = lerp(c.a.y, m.y, 0.04)
      c.b.x = lerp(c.b.x, m.x, 0.025)
      c.b.y = lerp(c.b.y, m.y, 0.025)

      if (orbARef.current) {
        orbARef.current.style.transform = `translate(${c.a.x - 80}px, ${c.a.y - 60}px)`
      }
      if (orbBRef.current) {
        orbBRef.current.style.transform = `translate(${c.b.x + 100}px, ${c.b.y + 70}px)`
      }
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const touch =
      "ontouchstart" in window ||
      (navigator.maxTouchPoints !== undefined && navigator.maxTouchPoints > 0)
    setIsTouch(touch)
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      lastMoveRef.current = Date.now()
    }

    if (!isTouch) {
      window.addEventListener("mousemove", onMove, { passive: true })
    }
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [animate, isTouch])

  const isReduced = variant === "reduced"
  const showMouseOrbs = !isTouch

  const particles = isReduced
    ? [
        { type: "dot", size: "3px", opacity: "0.06", blur: "2px", anim: "particle-drift-1", dur: "45s", delay: "-10s" },
        { type: "ring", size: "12px", opacity: "0.04", blur: "2px", anim: "particle-drift-2", dur: "55s", delay: "-30s" },
        { type: "dot", size: "2px", opacity: "0.05", blur: "1px", anim: "particle-drift-3", dur: "40s", delay: "-15s" },
        { type: "ring", size: "8px", opacity: "0.04", blur: "2px", anim: "particle-drift-4", dur: "50s", delay: "-20s" },
      ]
    : [
        { type: "dot", size: "3px", opacity: "0.08", blur: "2px", anim: "particle-drift-1", dur: "45s", delay: "-5s" },
        { type: "ring", size: "14px", opacity: "0.05", blur: "3px", anim: "particle-drift-2", dur: "55s", delay: "-30s" },
        { type: "dot", size: "2px", opacity: "0.06", blur: "2px", anim: "particle-drift-3", dur: "38s", delay: "-12s" },
        { type: "ring", size: "10px", opacity: "0.04", blur: "2px", anim: "particle-drift-4", dur: "50s", delay: "-25s" },
        { type: "dot", size: "5px", opacity: "0.07", blur: "3px", anim: "particle-drift-2", dur: "42s", delay: "-8s" },
        { type: "ring", size: "8px", opacity: "0.05", blur: "2px", anim: "particle-drift-1", dur: "48s", delay: "-35s" },
        { type: "dot", size: "3px", opacity: "0.06", blur: "2px", anim: "particle-drift-3", dur: "35s", delay: "-18s" },
        { type: "dot", size: "2px", opacity: "0.05", blur: "2px", anim: "particle-drift-4", dur: "52s", delay: "-40s" },
      ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Orb A — follows mouse, larger */}
      {showMouseOrbs && (
        <div
          ref={orbARef}
          className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{
            width: isReduced ? "250px" : "400px",
            height: isReduced ? "250px" : "400px",
            background: "radial-gradient(circle, hsl(var(--accent) / 0.10) 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: isReduced ? 0.5 : 1,
          }}
        />
      )}

      {/* Orb B — follows mouse, smaller, different offset */}
      {showMouseOrbs && (
        <div
          ref={orbBRef}
          className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{
            width: isReduced ? "200px" : "350px",
            height: isReduced ? "200px" : "350px",
            background: "radial-gradient(circle, hsl(var(--accent) / 0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
            opacity: isReduced ? 0.5 : 1,
          }}
        />
      )}

      {/* Orb C — autonomous float */}
      <div
        className="absolute animate-float-slow"
        style={{
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, hsl(var(--accent) / 0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          left: "20%",
          top: "40%",
          animationDuration: "20s",
          animationDelay: "0s",
        }}
      />

      {/* Orb D — autonomous float, different position/timing */}
      <div
        className="absolute animate-float-slow"
        style={{
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, hsl(var(--accent) / 0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
          right: "15%",
          top: "65%",
          animationDuration: "25s",
          animationDelay: "-8s",
        }}
      />

      {!isReduced && (
        <div
          className="absolute animate-float-slow"
          style={{
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, hsl(var(--accent) / 0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
            left: "55%",
            top: "15%",
            animationDuration: "22s",
            animationDelay: "-5s",
          }}
        />
      )}

      {/* Floating abstract particles */}
      {particles.map((p, i) => {
        const cls = p.type === "ring" ? "particle particle-ring" : "particle particle-dot"
        return (
          <div
            key={i}
            className={cls}
            style={{
              width: p.size,
              height: p.size,
              opacity: 0,
              filter: `blur(${p.blur})`,
              animation: `${p.anim} ${p.dur} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        )
      })}
    </div>
  )
}
