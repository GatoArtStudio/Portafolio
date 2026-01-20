'use client';

import {useLocale} from 'next-intl';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {Languages} from 'lucide-react';
import {cn} from '@/lib/utils';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();

    const otherLocale = locale === 'es' ? 'en' : 'es';
    const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

    return (
        <Link
            href={newPath}
            lang={otherLocale}
            className={cn(
                'relative group nav-item',
                'w-[42px] h-[36px]',
                'inline-flex items-center justify-center',
                'rounded-md border border-input',
                'bg-background hover:bg-primary hover:text-accent',
                'transition-colors',
            )}
        >
            <Languages className="absolute transition-opacity duration-150 group-hover:opacity-0 h-4 w-4" />
            <span className="absolute text-xs font-semibold opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                {otherLocale.toUpperCase()}
          </span>
        </Link>
    );
}
