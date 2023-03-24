import { ContactFormTypes } from '@/types/lang';

export default function ContactForm({
  content,
  variant,
}: {
  content: ContactFormTypes;
  variant?: 'es' | 'en';
}) {
  const actionUrl = variant === 'es' ? '/es/gracias' : '/success';
  return (
    <form
      className='w-sm flex flex-col items-stretch gap-2'
      name='contactForm'
      id='contactForm'
      action={actionUrl}
      method='POST'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='contactForm' />

      <input
        className='rounded-xl border-none bg-stone-300 p-2 px-3'
        type='text'
        name='name'
        id='name'
        placeholder={content.name}
        required
      />
      <input
        className='rounded-xl border-none bg-stone-300 p-2 px-3'
        type='email'
        name='email'
        id='email'
        placeholder={content.email}
        required
      />
      <input
        className='rounded-xl border-none bg-stone-300 p-2 px-3'
        type='tel'
        name='phone'
        id='phone'
        placeholder={content.phone}
        required
      />
      <textarea
        className='rounded-xl border-none bg-stone-300 p-2 px-3'
        name='message'
        id='message'
        placeholder={content.message}
      />
      <button
        className='rounded-xl border border-gray-600 bg-gray-700 px-8 py-3 font-bold text-white hover:bg-gray-600 active:bg-gray-500 disabled:bg-gray-500'
        type='submit'
        form='contactForm'
      >
        {content.cta}
      </button>
    </form>
  );
}
