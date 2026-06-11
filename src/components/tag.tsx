export default function Tag({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`font-body text-xs text-fg-muted border border-border px-2.5 py-1 rounded-sm transition-colors duration-200 hover:border-accent/40 hover:text-fg ${className}`}
    >
      {children}
    </span>
  )
}
