import { setRequestLocale } from 'next-intl/server'
import { PageProps } from "@/types/global/page-props"
import PageWrapper from "@/app/[locale]/page-wrapper-client"
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function IndexPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hervis Cortes",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer focused on building maintainable and scalable software products.",
    url: "https://gatoartstudio.art",
    sameAs: [
      "https://github.com/GatoArtStudio",
      "https://www.linkedin.com/in/hervis-cortes/",
      "https://twitter.com/GatoArtStudio",
    ],
    brand: {
      "@type": "Brand",
      name: "GatoArtStudio",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageWrapper />
    </>
  )
}
