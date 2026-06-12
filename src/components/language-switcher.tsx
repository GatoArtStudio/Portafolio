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
      className="font-body text-xs font-medium text-fg-muted hover:text-accent border border-border hover:border-accent/40 px-3 py-1.5 rounded-md transition-all duration-200"
      aria-label={`Switch language to ${otherLocale === 'es' ? 'Spanish' : 'English'}`}
    >
      {otherLocale.toUpperCase()}
    </Link>
  )
}
