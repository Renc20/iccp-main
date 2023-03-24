import NextImage from '@/components/NextImage';
import clsxm from '@/lib/clsxm';

interface InnerHero {
  imageUrl?: string;
  title: string;
  textColor?: 'light' | 'dark';
}

export default function InnerHero({
  imageUrl,
  title,
  textColor = 'light',
}: InnerHero) {
  return (
    <>
      <section className='section relative'>
        <div className='absolute top-0 left-0 bottom-0 right-0 -z-10 bg-black opacity-10'></div>
        <div className='absolute top-0 left-0 bottom-0 right-0 -z-20'>
          <NextImage
            src={imageUrl ? imageUrl : ''}
            alt='ICCP'
            fill={true}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='container z-20 px-8 py-32'>
          <h1
            className={clsxm('mb-6', textColor === 'dark' ? '' : 'text-white')}
          >
            {title}
          </h1>
        </div>
      </section>
    </>
  );
}
