"use client"

import { useEffect, useState } from "react"
import { useToast, type Toast as ToastData } from "@/components/toast-provider"
import { cn } from "@/lib/utils"

function ToastItem({ toast, onDismiss }: { toast: ToastData; onDismiss: (id: number) => void }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => {
      setExiting(true)
      window.setTimeout(() => onDismiss(toast.id), 250)
    }, 3500)
    return () => clearTimeout(t)
  }, [toast.id, onDismiss])

  const isErr = toast.type === "error"

  return (
    <div
      role="status"
      className={cn(
        "pointer-events-auto flex items-start gap-2.5 min-w-[260px] max-w-sm rounded-md border bg-bg/85 backdrop-blur-lg px-3.5 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-250",
        isErr ? "border-red-400/40" : "border-accent/40",
        exiting ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      )}
    >
      {/* Status icon */}
      <span
        className={cn(
          "shrink-0 mt-0.5 font-mono text-xs font-semibold tabular-nums",
          isErr ? "text-red-400" : "text-accent"
        )}
        aria-hidden="true"
      >
        {isErr ? "×" : "✓"}
      </span>

      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "font-mono text-xs uppercase tracking-[0.08em] font-medium",
            isErr ? "text-red-400" : "text-accent"
          )}
        >
          {isErr ? "error" : "success"}
        </p>
        <p className="text-sm text-fg-muted mt-0.5 leading-snug">{toast.message}</p>
      </div>

      <button
        onClick={() => onDismiss(toast.id)}
        className="shrink-0 text-fg-muted/60 hover:text-fg transition-colors"
        aria-label="Dismiss"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M2 2L10 10M10 2L2 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default function Toast() {
  const { toasts, dismissToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-[60] flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onDismiss={dismissToast} />
      ))}
    </div>
  )
}
