import Divider from '@/components/Divider';
import InnerHero from '@/components/InnerHero';
import { EnMissionVisionPageContent } from '@/locales/en-US';
import { EsMissionVisionPageContent } from '@/locales/es';

export default function MissionVisionPage({
  lang = 'en',
}: {
  lang?: 'en' | 'es';
}) {
  const content =
    lang === 'es' ? EsMissionVisionPageContent : EnMissionVisionPageContent;

  return (
    <>
      <main>
        <InnerHero imageUrl='/images/sky.webp' title={content.header} />

        <section>
          <div className='content container'>
            <h2>{content.mission}</h2>
            <p>{content.missionText}</p>
            <Divider />
            <div className='mb-16'></div>
            <h2>{content.vision}</h2>
            <p>{content.visionText}</p>
          </div>
        </section>
      </main>
    </>
  );
}
