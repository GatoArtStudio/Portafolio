export default function Tag({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`font-mono text-xs text-fg-muted border border-border px-2 py-0.5 ${className}`}>
      {children}
    </span>
  )
}
