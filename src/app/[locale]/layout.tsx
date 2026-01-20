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
import {getTranslations} from 'next-intl/server';


type Props = PageProps & {
    children: React.ReactNode;
};

const inter = Inter({subsets: ["latin"]})

export async function generateMetadata({params}: PageProps) {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: 'Metadata'});
    const baseUrl = 'https://gatoartstudio.art';

    return {
        title: {
            default: t('title'),
            template: `GatoArtStudio - %s`
        },
        description: t('description'),
        generator: 'GatoArtStudio',
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: Object.fromEntries(
                routing.locales.map((lng) => [
                    lng,
                    `${baseUrl}/${lng}`
                ])
            )
        }
    };
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
        <html lang={locale} suppressHydrationWarning>
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


