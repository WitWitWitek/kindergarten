import React, { ReactNode } from 'react';
import Image from 'next/image';

type Props = {
  href: string
  children: ReactNode
};

export default function File({ href, children }: Props) {
  return (
    <a className="file" href={href} target="_blank" rel="noreferrer">
      <div>
        <Image src="/icons/documents.png" alt="Ikona dokumentu do pobrania" fill />
      </div>
      {children}
    </a>
  );
}
