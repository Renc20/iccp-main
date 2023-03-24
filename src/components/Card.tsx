import clsxm from '@/lib/clsxm';

import * as React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <>
      <div
        className={clsxm(
          'overflow-hidden rounded-md bg-white p-8 shadow-lg',
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
