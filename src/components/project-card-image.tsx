type Props = {
  src?: string
  alt: string
  title: string
}

function getMonogram(title: string) {
  return title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function ProjectCardImage({ src, alt, title }: Props) {
  if (src) {
    return (
      <div className="mb-5 -mx-6 -mt-6 rounded-t-md overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    )
  }

  const monogram = getMonogram(title)

  return (
    <div className="mb-5 -mx-6 -mt-6 rounded-t-md overflow-hidden relative h-48 flex items-center justify-center bg-surface/60">
      {/* Subtle blueprint grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--accent) / 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--accent) / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <span
        className="font-display text-5xl md:text-6xl font-bold text-accent/60 select-none relative z-10"
        aria-hidden="true"
      >
        {monogram}
      </span>
    </div>
  )
}
