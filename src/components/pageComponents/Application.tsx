import Card from '@/components/Card';
import InnerHero from '@/components/InnerHero';
import MembershipForm from '@/components/MembershipForm';
import { EnApplicationPageContent } from '@/locales/en-US';
import { EsApplicationPageContent } from '@/locales/es';

export default function ApplicationPage({
  lang = 'en',
}: {
  lang?: 'en' | 'es';
}) {
  const content =
    lang === 'es' ? EsApplicationPageContent : EnApplicationPageContent;

  return (
    <main>
      <InnerHero
        imageUrl='/images/application.webp'
        title={content.h2}
        textColor='dark'
      />

      <section className='bg-stone-100'>
        <div className='container'>
          <div className=''>
            <div className='content mb-12'>
              <h2>{content.h2}</h2>
              <p>{content.p1}</p>
              <p>{content.p2}</p>
              <p>{content.p3}</p>
            </div>
          </div>
          <div className=''>
            <Card>
              <h2 className='mb-8'>{content.formHeader}</h2>
              <MembershipForm variant={lang} />
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
