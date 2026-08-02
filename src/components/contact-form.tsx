"use client"

import { useState, type FormEvent } from "react"
import { useTranslations } from "next-intl"
import { SendEmail } from "@/lib/email"
import { useToast } from "@/components/toast-provider"

type Status = "idle" | "submitting" | "success" | "error"

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MESSAGE_MAX = 500

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name || form.name.trim().length < 2) {
    errors.name = "nameError"
  }
  if (!form.email || !EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "emailError"
  }
  if (!form.message || form.message.trim().length < 10) {
    errors.message = "messageError"
  }
  return errors
}

export default function ContactForm() {
  const t = useTranslations("MainContactForm")
  const { showToast } = useToast()

  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (status === "submitting" || status === "success") return

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setStatus("submitting")

    const success = await SendEmail({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      _subject: "Nuevo mensaje de contacto desde el portafolio",
      _template: "table",
    })

    if (success) {
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
      showToast(t("form.toastSuccess"), "success")
    } else {
      setStatus("error")
      showToast(t("form.toastError"), "error")
    }
  }

  const updateField = (field: keyof FormState, value: string) => {
    if (field === "message" && value.length > MESSAGE_MAX) return
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
    if (status === "error" || status === "success") {
      setStatus("idle")
    }
  }

  const inputBase =
    "w-full bg-transparent border-0 border-b border-border px-0 py-3 text-sm text-fg placeholder:text-fg-muted/40 transition-colors duration-200 focus:outline-none focus:ring-0 focus:border-accent"

  const labelBase =
    "block text-xs font-medium uppercase tracking-[0.08em] text-fg-muted mb-1.5"

  const errClass = "mt-2 text-xs text-red-400 font-mono"

  const buttonLabel =
    status === "submitting"
      ? t("form.buttonSubmitting")
      : status === "success"
      ? t("form.buttonSuccess")
      : t("form.buttonSubmit")

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      {/* Name field */}
      <div>
        <div className="flex items-baseline justify-between mb-1.5">
          <label htmlFor="contact-name" className={labelBase}>
            {t("form.nameLabel")}
          </label>
          {errors.name && (
            <span className="font-mono text-xs tabular-nums text-red-400">err</span>
          )}
        </div>
        <input
          id="contact-name"
          type="text"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder={t("form.namePlaceholder")}
          className={inputBase}
          autoComplete="name"
          disabled={status === "submitting" || status === "success"}
          aria-invalid={errors.name ? "true" : undefined}
        />
        {errors.name && (
          <p className={errClass}>
            <span className="text-red-400/60">→</span> {t(`form.${errors.name}`)}
          </p>
        )}
      </div>

      {/* Email field */}
      <div>
        <div className="flex items-baseline justify-between mb-1.5">
          <label htmlFor="contact-email" className={labelBase}>
            {t("form.emailLabel")}
          </label>
          {errors.email && (
            <span className="font-mono text-xs tabular-nums text-red-400">err</span>
          )}
        </div>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder={t("form.emailPlaceholder")}
          className={inputBase}
          autoComplete="email"
          disabled={status === "submitting" || status === "success"}
          aria-invalid={errors.email ? "true" : undefined}
        />
        {errors.email && (
          <p className={errClass}>
            <span className="text-red-400/60">→</span> {t(`form.${errors.email}`)}
          </p>
        )}
      </div>

      {/* Message field */}
      <div>
        <div className="flex items-baseline justify-between mb-1.5">
          <label htmlFor="contact-message" className={labelBase}>
            {t("form.messageLabel")}
          </label>
          <span className="font-mono text-xs tabular-nums text-fg-muted">
            {form.message.length} / {MESSAGE_MAX}
          </span>
        </div>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder={t("form.messagePlaceholder")}
          className={`${inputBase} resize-none`}
          disabled={status === "submitting" || status === "success"}
          aria-invalid={errors.message ? "true" : undefined}
          style={{ minHeight: "120px" }}
        />
        {errors.message && (
          <p className={errClass}>
            <span className="text-red-400/60">→</span> {t(`form.${errors.message}`)}
          </p>
        )}
      </div>

      {/* Reserved status zone — fixed height avoids layout shift on appear/disappear.
          Content is always mounted; visibility controlled via opacity to preserve flow. */}
      <div
        className="min-h-[3.5rem] border-l-2 pl-4 py-2 transition-colors duration-300"
        aria-live="polite"
        aria-atomic="true"
        style={{
          borderColor:
            status === "success"
              ? "hsl(var(--accent) / 0.4)"
              : status === "error"
              ? "rgba(248, 113, 113, 0.4)"
              : "transparent",
        }}
      >
        <div
          className="transition-opacity duration-300"
          style={{
            opacity: status === "success" || status === "error" ? 1 : 0,
          }}
        >
          {status === "success" ? (
            <>
              <p className="text-sm font-medium text-accent">{t("form.successTitle")}</p>
              <p className="text-xs text-fg-muted mt-1 leading-relaxed">
                {t("form.successDescription")}
              </p>
            </>
          ) : status === "error" ? (
            <>
              <p className="text-sm font-medium text-red-400">{t("form.errorTitle")}</p>
              <p className="text-xs text-fg-muted mt-1 leading-relaxed">
                {t("form.errorDescription")}
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-transparent">&nbsp;</p>
              <p className="text-xs text-transparent mt-1">&nbsp;</p>
            </>
          )}
        </div>
      </div>

      {/* Submit row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
        <span className="font-mono text-xs text-fg-muted tabular-nums">
          {String(form.name ? "01" : "00")} →{" "}
          {form.email ? "01" : "00"} →{" "}
          {form.message.length >= 10 ? "01" : "00"}
        </span>

        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="group inline-flex items-center gap-2 font-body text-sm font-medium px-6 py-3 rounded-md bg-accent text-bg shadow-[var(--shadow-button)] transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {buttonLabel}
          {status !== "submitting" && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path
                d="M9 2L13 7L9 12M2 7H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {status === "submitting" && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="animate-spin"
            >
              <circle
                cx="7"
                cy="7"
                r="5.5"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="1.5"
              />
              <path
                d="M12.5 7a5.5 5.5 0 0 0-5.5-5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  )
}
