"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"

export type ToastType = "success" | "error"

export type Toast = {
  id: number
  message: string
  type: ToastType
}

type ToastContextValue = {
  showToast: (message: string, type: ToastType) => void
  toasts: Toast[]
  dismissToast: (id: number) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

let toastId = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback(
    (message: string, type: ToastType) => {
      const id = ++toastId
      setToasts((prev) => [...prev, { id, message, type }])
      window.setTimeout(() => {
        dismissToast(id)
      }, 4000)
    },
    [dismissToast]
  )

  return (
    <ToastContext.Provider value={{ showToast, toasts, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return ctx
}
