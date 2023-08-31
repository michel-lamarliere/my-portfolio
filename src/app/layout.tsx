import { ReactNode } from "react";
import { Metadata } from "next";

import { Rubik } from "next/font/google";

import { Footer } from "@/containers/layout/Footer";
import { AppElements } from "@/providers/AppElements";

import "./../styles/globals.scss";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--rubik"
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Michel Lamarlière | Développeur Full Stack React Typescript NodeJs",
  description:
    "Développeur Full Stack Typescript React NodeJS basé à Toulouse, France",
  icons: [
    {
      rel: "icon",
      url: "/favicons/favicon.ico"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicons/apple-touch-icon.png"
    },
    {
      rel: "android-chrome",
      sizes: "512x512",
      url: "/favicons/android-chrome-512x512.png"
    },
    {
      rel: "android-chrome",
      sizes: "192x192",
      url: "/favicons/android-chrome-192x192.png"
    }
  ]
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <AppElements />
        <main className={`container-custom minHeight ${rubik}`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
