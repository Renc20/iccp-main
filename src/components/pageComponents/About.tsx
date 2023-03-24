import InnerHero from '@/components/InnerHero';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import { EnAboutPageContent, EnAllLinks } from '@/locales/en-US';
import { EsAboutPageContent, EsAllLinks } from '@/locales/es';

export default function AboutPage({ lang = 'en' }: { lang?: 'en' | 'es' }) {
  const content = lang === 'es' ? EsAboutPageContent : EnAboutPageContent;
  const applicationPageLink =
    lang === 'es' ? EsAllLinks.application.link : EnAllLinks.application.link;

  return (
    <main>
      <InnerHero title={content.h1} imageUrl='/images/notes.webp' />

      <section className='content'>
        <div className='container'>
          <p className=''>{content.p1}</p>
          <p className=''>{content.p2}</p>
          <ButtonLink href={applicationPageLink} size='lg'>
            Apply for Membership
          </ButtonLink>
        </div>
      </section>

      <section className='bg-gray-800 text-white'>
        <div className='container flex gap-8'>
          <div className='content lg:w-5/8'>
            <h2 className='mb-8'>{content.headingUnity}</h2>
            {content.contentUnity.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </div>

          <div className='lg:w-3/8 hidden lg:block'>
            <NextImage
              src='/images/diversity.webp'
              alt='Unity & Diversity'
              width={400}
              height={700}
            />
          </div>
        </div>
      </section>

      <section>
        <div className='container flex'>
          <div className='content w-1/2 pr-4'>
            <h2 className='mb-8'>{content.headingResources}</h2>
            {content.contentResources.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
            {/* <p>
              We provide our members with the knowledge and resources they
              need to be effective in their mission.{' '}
            </p>
            <p>
              We offer a variety of resources, including educational
              materials, training programs, and mentorship opportunities. We
              are also committed to creating a safe and welcoming space for
              discussion and collaboration.
            </p>
            <p>
              We invite you to join us in building the Kingdom of God, and
              to be a part of this movement of unity and transformation.
              Together, we can make a lasting impact in our world and be a
              beacon of hope to those in need.
            </p> */}
          </div>

          <div className='ml-10 w-1/2'>
            <NextImage
              width={600}
              height={600}
              alt='Pastor Preaching'
              src='/images/speaker.webp'
              className='max-w-full'
            />
          </div>
        </div>
      </section>

      <section className='bg-primary-100'>
        <div className='container flex'>
          <div className='mr-10 w-1/2'>
            <NextImage
              width={600}
              height={600}
              alt='Pastor Preaching'
              src='/images/bible.webp'
              className='max-w-full'
            />
          </div>

          <div className='content w-1/2'>
            <h2 className='mb-8'>{content.headingGet}</h2>
            {content.contentGet.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
