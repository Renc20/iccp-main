import { EnNewsletterForm } from '@/locales/en-US';
import { EsNewsletterForm } from '@/locales/es';

export default function NewsletterForm({
  variant = 'en',
}: {
  variant?: 'en' | 'es';
}) {
  const content = variant === 'es' ? EsNewsletterForm : EnNewsletterForm;

  return (
    <form
      className='flex max-w-sm flex-col items-stretch gap-2'
      name='newsletterForm'
      id='newsletterForm'
      action={content.redirectUrl}
      method='POST'
      data-netlify='true'
    >
      <input type='hidden' name='form-name' value='newsletterForm' />

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
      <button
        className='rounded-xl border border-gray-600 bg-gray-700 px-8 py-3 tracking-wide text-white hover:bg-gray-600 active:bg-gray-500 disabled:bg-gray-500'
        type='submit'
        form='newsletterForm'
      >
        {content.cta}
      </button>
    </form>
  );
}
