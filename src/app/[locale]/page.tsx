import {use} from "react"
import {setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import {PageProps} from "@/types/global/page-props";
import PageWrapperServer from "@/app/[locale]/page-wrapper-server";

export default function IndexPage({params}: PageProps) {
    const {locale} = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    // Once the request locale is set, you
    // can call hooks from `next-intl`
    const t = useTranslations('PageMain');

    return <PageWrapperServer />;
}
