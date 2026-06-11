'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const otherLocale = locale === 'es' ? 'en' : 'es'
  const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`)

  return (
    <Link
      href={newPath}
      lang={otherLocale}
      className="font-mono text-xs font-medium text-fg-muted hover:text-accent border border-border px-3 py-1.5 transition-colors"
      aria-label={`Switch language to ${otherLocale === 'es' ? 'Spanish' : 'English'}`}
    >
      {otherLocale.toUpperCase()}
    </Link>
  )
}
