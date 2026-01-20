import {Locale} from 'next-intl';

export type PageProps = {
    params: Promise<{
        locale: Locale;
    }>;
};