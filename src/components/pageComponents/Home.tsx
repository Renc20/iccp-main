import NextImage from '@/components/NextImage';
import ButtonLink from '@/components/links/ButtonLink';

import { EnAllLinks, EnContactForm, EnHomepageContent } from '@/locales/en-US';
import { EsAllLinks, EsContactForm, EsHomepageContent } from '@/locales/es';

import Card from '@/components/Card';
import Person from '@/components/Person';
import Divider from '@/components/Divider';
import ContactForm from '@/components/ContactForm';

export default function HomePage({ lang = 'en' }: { lang?: 'en' | 'es' }) {
  const content = lang === 'es' ? EsHomepageContent : EnHomepageContent;
  const applicationPageLink =
    lang === 'es' ? EsAllLinks.application.link : EnAllLinks.application.link;
  const aboutPageLink =
    lang === 'es' ? EsAllLinks.about.link : EnAllLinks.about.link;
  const missionPageLink =
    lang === 'es' ? EsAllLinks.mission.link : EnAllLinks.mission.link;
  const contactFormContent = lang === 'es' ? EsContactForm : EnContactForm;

  return (
    <main>
      <div className='section relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 -z-10 bg-black opacity-25'></div>
        <div className='absolute top-0 left-0 bottom-0 right-0 -z-20'>
          <NextImage
            fill
            src='/images/hero.webp'
            alt='bridal dress'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='container z-20 py-32'>
          <div className='max-w-lg'>
            <h1 className='mb-6 text-white'>{content.header}</h1>
            <div className='flex gap-2'>
              <ButtonLink href={aboutPageLink} variant='light'>
                {content.cta1}
              </ButtonLink>
              <ButtonLink href={applicationPageLink} variant='primary'>
                {content.cta2}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-white'>
        <div className='container flex flex-col gap-12 lg:flex-row'>
          <div className='lg:w-1/4'>
            <NextImage
              src='/images/cross.webp'
              alt='cross'
              width={300}
              height={300}
              className='overflow-hidden rounded-xl'
            />
          </div>
          <div className='lg:w-3/4'>
            <p className='content mb-8'>{content.paragraph1}</p>
            <div className='flex gap-2'>
              <ButtonLink href={missionPageLink} variant='outline'>
                {content.valuesCta}
              </ButtonLink>
              <ButtonLink href={applicationPageLink} variant='dark'>
                {content.cta2}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-sky-100 pb-32'>
        <div className='container'>
          <h2 className='mb-20 text-center'>{content.testimonialHeader}</h2>
          <div className='flex flex-col gap-12 lg:flex-row'>
            <Card className='lg:w-1/3'>
              <div className='flex w-full flex-col gap-4'>
                <p className='mb-4 leading-loose'>{content.testimonial1body}</p>
                <Person
                  name={content.testimonial1name}
                  title={content.testimonial1title}
                  image='/images/image1.jpg'
                />
              </div>
            </Card>

            <Card className='lg:w-1/3'>
              <div className='flex w-full flex-col gap-4'>
                <p className='mb-4 leading-loose'>{content.testimonial2body}</p>
                <Person
                  name={content.testimonial2name}
                  title={content.testimonial2title}
                  image='/images/image2.jpg'
                />
              </div>
            </Card>

            <Card className='lg:w-1/3'>
              <div className='flex w-full flex-col gap-4'>
                <p className='mb-4 leading-loose'>{content.testimonial3body}</p>
                <Person
                  name={content.testimonial3name}
                  title={content.testimonial3title}
                  image='/images/image3.jpg'
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='container -mt-40 flex flex-col items-center gap-12 md:flex-row md:items-stretch'>
          <Card className='flex w-3/4 flex-col justify-center rounded-none bg-slate-700 text-center text-white md:w-1/3'>
            <div className='mb-4 text-6xl font-bold'>87%</div>
            <p>{content.stat1}</p>
          </Card>

          <Card className='flex w-3/4 flex-col justify-center rounded-none bg-slate-700 text-center text-white md:w-1/3'>
            <div className='mb-4 text-6xl font-bold'>70%</div>
            {content.stat2}
          </Card>

          <Card className='flex w-3/4 flex-col justify-center rounded-none bg-slate-700 text-center text-white md:w-1/3'>
            <p className='font-bold'>{content.stat3}</p>
          </Card>
        </div>
      </section>

      <section className='bg-stone-200'>
        <div className='container flex gap-12'>
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
            <h2>{content.contactHeader}</h2>
            <Divider />
            <div className='flex flex-col-reverse gap-12 md:flex-row'>
              <div className='md:w-1/2'>
                <ContactForm content={contactFormContent} variant={lang} />
              </div>
              <div className='md:w-1/2'>
                <p className='text-lg'>{content.contactInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
