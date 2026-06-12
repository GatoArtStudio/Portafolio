import Link from "next/link"

type ButtonProps = {
  href?: string
  onClick?: () => void
  variant?: "primary" | "outline"
  children: React.ReactNode
  className?: string
  type?: "button" | "submit"
}

const base =
  "font-body text-sm font-medium inline-flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-[0.98]"

const variants = {
  primary: "bg-accent text-bg shadow-[var(--shadow-button)] hover:opacity-90 hover:shadow-md",
  outline:
    "border border-accent/60 text-accent bg-surface/50 backdrop-blur-sm hover:bg-accent-soft hover:border-accent shadow-[var(--shadow-button)] hover:shadow-md",
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href?.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  if (href?.startsWith("#") || href?.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
