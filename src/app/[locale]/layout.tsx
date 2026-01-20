import type React from "react"
import {Inter} from "next/font/google"
import {ThemeProvider} from "@/components/theme-provider"
import Script from "next/script"
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import '@/app/globals.css'
import {setRequestLocale} from 'next-intl/server';
import {PageProps} from "@/types/global/page-props";


type Props = PageProps & {
    children: React.ReactNode;
};

const inter = Inter({subsets: ["latin"]})

export const metadata = {
    title: "GatoArtStudio | Desarrollador de Software",
    description:
        "Portafolio personal de Hervis Cortes (GatoArtStudio), desarrollador de software especializado en soluciones web, desktop y Minecraft.",
    generator: 'GatoArtStudio'
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: Props) {
    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <html lang="es" suppressHydrationWarning>
        <head>
            <Script src="https://cdn.jsdelivr.net/npm/@iconify/iconify@3.1.1/dist/iconify.min.js"/>
        </head>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <NextIntlClientProvider>
                {children}
            </NextIntlClientProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}


