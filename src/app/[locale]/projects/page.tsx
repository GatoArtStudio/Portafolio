import { use } from "react"
import { setRequestLocale } from 'next-intl/server'
import { PageProps } from "@/types/global/page-props"
import ProjectsPageWrapper from "@/app/[locale]/projects/page-wrapper-client"
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ProjectsMetadata' })
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function ProjectsPage({ params }: PageProps) {
  const { locale } = use(params)
  setRequestLocale(locale)
  return <ProjectsPageWrapper />
}
