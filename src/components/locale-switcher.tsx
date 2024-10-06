'use client';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

type Lng = 'en' | 'vi';

const lang: Record<string, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
};

export function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const t = useTranslations('common');
  const locale = useLocale();

  const changeLang = (lng: Lng) => {
    if (locale === lng) return;
    startTransition(() => {
      router.replace(pathname, {
        locale: lng,
      });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild disabled={isPending}>
        <Button variant="outline">
          {lang[locale] ?? lang.vi}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => changeLang('en')}>{lang.en}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLang('vi')}>{lang.vi}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
