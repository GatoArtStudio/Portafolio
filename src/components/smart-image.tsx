"use client"

import { useState } from "react"

type Props = {
  src: string
  alt: string
  className?: string
}

export default function SmartImage({ src, alt, className = "" }: Props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  )
}
