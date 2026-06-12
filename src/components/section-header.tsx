type Props = {
  index: number
  total: number
  eyebrow: string
  title: string
}

export default function SectionHeader({ index, total, eyebrow, title }: Props) {
  return (
    <div className="mb-12 md:mb-14">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs font-semibold text-accent tabular-nums">
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 bg-accent/20 max-w-[60px]" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-fg text-balance">
        {title}
      </h2>
    </div>
  )
}
