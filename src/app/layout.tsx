import { ReactNode } from 'react';
import { Metadata } from 'next';

import { Providers } from '@/providers';
import { Layout } from '@/layout/Layout';

import styles from './layout.module.scss';
import './../styles/globals.scss';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Michel Lamarlière | Développeur Full Stack React Typescript NodeJs',
  description:
    'Développeur Full Stack Typescript React NodeJS basé à Toulouse, France',
  icons: [
    {
      rel: 'icon',
      url: '/favicons/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicons/apple-touch-icon.png'
    },
    {
      rel: 'android-chrome',
      sizes: '512x512',
      url: '/favicons/android-chrome-512x512.png'
    },
    {
      rel: 'android-chrome',
      sizes: '192x192',
      url: '/favicons/android-chrome-192x192.png'
    }
  ]
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <Layout>
            <main className={styles.layout}>{children}</main>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
