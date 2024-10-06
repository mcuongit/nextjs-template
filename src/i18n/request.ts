import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as never)) notFound();
  const common = await import(`../../messages/${locale}/common.json`);
  const validation = await import(`../../messages/${locale}/validation.json`);
  const glossary = await import(`../../messages/${locale}/glossary.json`);
  return {
    messages: {
      ...common.default,
      ...validation.default,
      ...glossary.default,
    },
  };
});
