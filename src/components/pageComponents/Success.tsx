import ButtonLink from '@/components/links/ButtonLink';
import { EnSuccessPageContent } from '@/locales/en-US';
import { EsSuccessPageContent } from '@/locales/es';

export default function SuccessPage({ lang = 'en' }: { lang?: 'en' | 'es' }) {
  const content = lang === 'es' ? EsSuccessPageContent : EnSuccessPageContent;

  return (
    <>
      <main>
        <section className='bg-stone-200'>
          <div className='container'>
            <h1 className='mb-2'>{content.header}</h1>
            <p className='mb-4'>{content.text}</p>
            <ButtonLink href='/'>{content.btnText}</ButtonLink>
          </div>
        </section>
      </main>
    </>
  );
}
