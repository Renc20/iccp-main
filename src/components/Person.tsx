import NextImage from '@/components/NextImage';

interface PersonProps {
  name: string;
  title: string;
  image: string;
}

export default function Person({ name, title, image }: PersonProps) {
  return (
    <>
      <div className='flex w-full items-center gap-4'>
        <div className='overflow-hidden rounded-full'>
          <NextImage src={image} alt={name} width={75} height={75} />
        </div>

        <div className='flex flex-col'>
          <div className='font-bold'>{name}</div>
          <div className=''>{title}</div>
        </div>
      </div>
    </>
  );
}
