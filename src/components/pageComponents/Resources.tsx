import Divider from '@/components/Divider';
import InnerHero from '@/components/InnerHero';

import { EsAllLinks, EsResourcesPageContent } from '@/locales/es';
import { EnAllLinks, EnResourcesPageContent } from '@/locales/en-US';
import Card from '@/components/Card';
import NextImage from '@/components/NextImage';
import ButtonLink from '@/components/links/ButtonLink';
import NewsletterForm from '@/components/NewsletterForm';

import InfoIcon from '~/svg/info.svg';
import ChartLineSolid from '~/svg/chart-line-solid.svg';

export default function ResourcesPage({ lang = 'en' }: { lang?: 'en' | 'es' }) {
  const content =
    lang === 'es' ? EsResourcesPageContent : EnResourcesPageContent;
  const applicationPageLink =
    lang === 'es' ? EsAllLinks.application.link : EnAllLinks.application.link;

  return (
    <>
      <main>
        <InnerHero
          imageUrl='/images/library.webp'
          title={content.title}
          textColor='dark'
        />

        <section>
          <div className='container'>
            <div className='mb-16 flex flex-col items-start gap-8 md:flex-row md:items-stretch'>
              <Card className='max-w-md p-4 pb-8 md:w-1/3'>
                <div className='flex w-full flex-col items-stretch'>
                  <div className='relative mb-4 w-full overflow-hidden rounded-md'>
                    <NextImage
                      src='/images/resources-1.webp'
                      alt='Educational Materials'
                      width={500}
                      height={50}
                      className='w-full'
                    />
                  </div>
                  <h4>{content.card1}</h4>
                </div>
              </Card>

              <Card className='max-w-md p-4 pb-8 md:w-1/3'>
                <div className='flex w-full flex-col items-stretch'>
                  <div className='relative mb-4 w-full overflow-hidden rounded-md'>
                    <NextImage
                      src='/images/resources-2.webp'
                      alt='Training Programs'
                      width={500}
                      height={50}
                      className='w-full'
                    />
                  </div>
                  <h4>{content.card2}</h4>
                </div>
              </Card>

              <Card className='max-w-md p-4 pb-8 md:w-1/3'>
                <div className='flex w-full flex-col items-stretch'>
                  <div className='relative mb-4 w-full overflow-hidden rounded-md'>
                    <NextImage
                      src='/images/resources-3.webp'
                      alt='Mentorship Opportunities'
                      width={500}
                      height={50}
                      className='w-full'
                    />
                  </div>
                  <h4>{content.card3}</h4>
                </div>
              </Card>
            </div>

            <div className='content'>
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            <ButtonLink href={applicationPageLink}>{content.cta}</ButtonLink>

            <Divider className='my-20' />

            <div className='grid w-full gap-12 md:grid-cols-2'>
              <div className='content'>
                <InfoIcon width='50' height='50' className='mb-10' />
                <h2 className='font-bold'>{content.header2}</h2>
                <p>{content.p3}</p>
              </div>

              <div className='content'>
                <ChartLineSolid width='50' height='50' className='mb-10' />
                <h2 className='font-bold'>{content.header3}</h2>
                <p>{content.p4}</p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-stone-200'>
          <div className='container'>
            <h2 className='font-bold'>{content.header4}</h2>
            <Divider className='my-8' />
            <div className='grid gap-12 md:grid-cols-3'>
              <div className='md:col-span-1'>
                <NewsletterForm />
              </div>
              <div className='content md:col-span-2'>
                <p>{content.p5}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
