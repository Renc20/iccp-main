import Link from 'next/link';
import * as React from 'react';

import { EnAllLinks, EnNavLinks } from '@/locales/en-US';
import { EsAllLinks, EsNavLinks } from '@/locales/es';

import Logo from '~/svg/wide-white.svg';
import { useRouter } from 'next/router';
import clsxm from '@/lib/clsxm';

export default function Nav({ variant = 'en' }: { variant?: 'en' | 'es' }) {
  const [isOpen, setOpen] = React.useState(false);

  const { pathname } = useRouter();

  const currentPageLangIsSpanish = pathname.includes('/es');

  const navLinks = variant === 'es' ? EsNavLinks : EnNavLinks;
  const contactPageLink =
    variant === 'es' ? EsAllLinks.contact.link : EnAllLinks.contact.link;

  return (
    <>
      <section className=''>
        <div className='container flex items-center justify-between p-0'>
          <div>
            <Link
              href='/'
              className={clsxm(
                'mr-4',
                currentPageLangIsSpanish ? '' : 'opacity-40'
              )}
            >
              English
            </Link>
            <span className='mr-4'>{' | '}</span>
            <Link
              href='/es'
              className={clsxm(
                'mr-4',
                currentPageLangIsSpanish ? 'opacity-40' : ''
              )}
            >
              Español
            </Link>
          </div>
          <div className='flex items-center gap-4 py-3'>
            <Link href={contactPageLink}>
              <svg
                width={24}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='#505050'
                  d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z'
                />
              </svg>
            </Link>
            <Link href={contactPageLink}>
              <svg
                width={24}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='#505050'
                  d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'
                />
              </svg>
            </Link>
            <Link href={contactPageLink}>
              <svg
                width={24}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='#505050'
                  d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-sky-800 text-white'>
        <div className='container flex w-full items-center justify-between p-8'>
          {/* logo  */}
          <Link href={navLinks[0].link} className='py-2 pr-2'>
            <Logo className='h-6 w-72' />
          </Link>

          {/* hamburger */}
          <div className='block lg:hidden'>
            <button
              onClick={() => setOpen(!isOpen)}
              className='flex items-center rounded border-2 border-gray-300 px-3 py-2 text-gray-200 hover:border-white hover:text-white'
            >
              {isOpen ? (
                <svg
                  width={24}
                  height={24}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path
                    fill='#ffffff'
                    d='M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z'
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path
                    fill='#ffffff'
                    d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
                  />
                </svg>
              )}
            </button>
          </div>
          {/* end hamburger */}

          {/* desktop navigation links */}
          <div className='hidden w-auto flex-row items-center space-x-4 lg:flex'>
            {navLinks.map((item, key) => (
              <Link key={key} href={item.link}>
                {item.label}
              </Link>
            ))}
          </div>
          {/* end desktop navigation links */}
        </div>

        {/* mobile navigation links */}
        <div
          className={`fixed z-20 w-full flex-col items-start bg-sky-800 py-8 ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <div className='container'>
            {navLinks.map((item, key) => (
              <Link
                key={key}
                href={item.link}
                className='block p-4 px-12 text-lg transition-opacity hover:opacity-75'
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {/* end mobile navigation links */}
      </section>
    </>
  );
}
