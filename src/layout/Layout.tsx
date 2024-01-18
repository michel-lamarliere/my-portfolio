import React, { ReactNode } from 'react';

import { Footer } from '@/layout/Footer/Footer';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
