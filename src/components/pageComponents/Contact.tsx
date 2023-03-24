import ContactForm from '@/components/ContactForm';
import InnerHero from '@/components/InnerHero';
import NextImage from '@/components/NextImage';
import {
  EnAllLinks,
  EnContactForm,
  EnContactPageContent,
} from '@/locales/en-US';
import { EsAllLinks, EsContactForm, EsContactPageContent } from '@/locales/es';
import Link from 'next/link';

import InfoIcon from '~/svg/info.svg';

export default function ContactPage({ lang = 'en' }: { lang?: 'en' | 'es' }) {
  const content = lang === 'es' ? EsContactPageContent : EnContactPageContent;
  const applicationPageLink =
    lang === 'es' ? EsAllLinks.application.link : EnAllLinks.application.link;
  const contactFormContent = lang === 'es' ? EsContactForm : EnContactForm;

  return (
    <>
      <main>
        <InnerHero
          imageUrl='/images/contact.webp'
          title={content.title}
          textColor='dark'
        />

        <section className='bg-stone-200'>
          <div className='container'>
            <div className='mb-8 flex w-full flex-row items-center gap-2 rounded-lg bg-stone-300 p-3 px-4'>
              <InfoIcon width='20' height='20' className='' />
              <span>
                {content.alertText}{' '}
                <Link
                  href={applicationPageLink}
                  className='font-bold underline'
                >
                  {content.alertLink}
                </Link>
              </span>
            </div>

            <div className='flex gap-12'>
              <div className='hidden w-1/3 lg:block'>
                <NextImage
                  src='/images/pastors.webp'
                  alt='pastors'
                  width={500}
                  height={500}
                  className='max-w-full'
                />
              </div>

              <div className='w-full space-y-4 pt-20 lg:w-2/3'>
                <div className='flex flex-col-reverse gap-12 md:flex-row'>
                  <div className='md:w-1/2'>
                    <ContactForm content={contactFormContent} variant={lang} />
                  </div>
                  <div className='md:w-1/2'>
                    <p className='text-lg'>{content.paragraph}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
