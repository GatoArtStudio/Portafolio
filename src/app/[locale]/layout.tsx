import type React from "react"
import { Outfit, DM_Sans } from "next/font/google"
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { PageProps } from "@/types/global/page-props"
import '@/app/globals.css'

type Props = PageProps & {
  children: React.ReactNode
}

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  const baseUrl = 'https://gatoartstudio.art'

  return {
    title: {
      default: t('title'),
      template: `GatoArtStudio - %s`,
    },
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((lng) => [lng, `${baseUrl}/${lng}`])
      ),
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html
      lang={locale}
      className={`${outfit.variable} ${dmSans.variable}`}
    >
      <body className="font-body bg-bg text-fg antialiased">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
