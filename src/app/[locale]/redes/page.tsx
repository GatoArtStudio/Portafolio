import {PageProps} from "@/types/global/page-props";
import SocialMedia from "@/app/[locale]/redes/page-wrapper-server";
import {use} from "react";
import {setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";

export default function IndexPage({params}: PageProps) {
    const {locale} = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    // Once the request locale is set, you
    // can call hooks from `next-intl`
    const t = useTranslations('PageSocialNetworks');

    return <SocialMedia/>;
}
