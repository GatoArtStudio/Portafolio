export default function BlueprintDivider() {
  return (
    <div className="flex items-center gap-4 max-w-content mx-auto px-6" aria-hidden="true">
      <div className="h-px flex-1 bg-accent/15" />
      <svg width="24" height="8" viewBox="0 0 24 8" className="shrink-0" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="4" x2="14" y2="4" className="blueprint-line" />
        <circle cx="18" cy="4" r="2" className="blueprint-line" />
        <line x1="21" y1="4" x2="24" y2="4" className="blueprint-line" />
      </svg>
      <div className="h-px flex-1 bg-accent/15" />
    </div>
  )
}
