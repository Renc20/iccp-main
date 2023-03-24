import Card from '@/components/Card';
import ButtonLink from '@/components/links/ButtonLink';
import NewsletterForm from '@/components/NewsletterForm';

import { EnNavLinks, EnFooter } from '@/locales/en-US';
import { EsNavLinks, EsFooter } from '@/locales/es';

import Link from 'next/link';
import Logo from '~/svg/main-text-full.svg';

export default function Footer({ variant = 'en' }: { variant?: 'en' | 'es' }) {
  const navLinks = variant === 'es' ? EsNavLinks : EnNavLinks;

  const footerContent = variant === 'es' ? EsFooter : EnFooter;

  return (
    <>
      <section className='text-center'>
        <div className='container -mb-20'>
          <p className='text-xl'>{footerContent.verseText}</p>
          <p className='text-xl italic'>{footerContent.verseRef}</p>
        </div>

        <div className='container flex justify-center'>
          <Card className='-mb-40 bg-sky-600 py-20 px-16 lg:w-3/4'>
            <div className='flex flex-col items-center justify-between gap-8 text-white md:flex-row'>
              <h2 className='max-w-xs font-bold'>{footerContent.ctaHeader}</h2>
              <ButtonLink href='/' variant='light'>
                {footerContent.ctaButton}
              </ButtonLink>
            </div>
          </Card>
        </div>
      </section>

      <footer className='bg-stone-200 pt-20'>
        <div className='container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          <div className=''>
            <Logo className='h-48 w-48' />
          </div>

          <div className=''>
            <ul className='flex flex-col'>
              <li className='p-2 font-bold'>Navigation</li>
              {navLinks.map((item, key) => (
                <li key={key} className='p-2'>
                  <Link
                    className='p-2 transition-opacity hover:opacity-75'
                    href={item.link}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=''>
            <ul className='flex flex-col'>
              <li className='p-2 font-bold'>{footerContent.more}</li>
              <li className='p-2'>
                <Link
                  className='p-2 transition-opacity hover:opacity-75'
                  href='#'
                >
                  {footerContent.terms}
                </Link>
              </li>
              <li className='p-2'>
                <Link
                  className='p-2 transition-opacity hover:opacity-75'
                  href='#'
                >
                  Privacy Policy
                </Link>
              </li>
              <li className='p-2'>
                <Link
                  className='p-2 transition-opacity hover:opacity-75'
                  href='#'
                >
                  {footerContent.gdpr}
                </Link>
              </li>
            </ul>
          </div>

          <div className=''>
            <h3 className='font-bold'>{footerContent.cta}</h3>
            <p className='mb-2'>{footerContent.ctaText}</p>

            {variant === 'es' ? (
              <NewsletterForm variant='es' />
            ) : (
              <NewsletterForm />
            )}
          </div>
        </div>
      </footer>

      {/* socket */}
      <div className='p-8'>
        <div className='container py-0 text-center text-sm text-gray-500'>
          {footerContent.copyright}
        </div>
      </div>
    </>
  );
}
