// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Corrected font import name
import Script from "next/script";
import "./globals.css";
import { getDictionary } from "./dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: {
      default: dict.metadata.title.default,
      template: dict.metadata.title.template,
    },
    description: dict.metadata.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "en-US": `${baseUrl}/en`,
        "fr-FR": `${baseUrl}/fr`,
      },
    },
    openGraph: {
      title: dict.metadata.title.default,
      description: dict.metadata.description,
      url: `${baseUrl}/${lang}`,
      siteName: "Yoluko Solutions",
      images: [
        {
          url: `${baseUrl}/images/Hero section transparent.png`,
          width: 1200,
          height: 630,
          alt: dict.metadata.title.default,
        },
      ],
      locale: lang === 'en' ? 'en_US' : 'fr_FR',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title.default,
      description: dict.metadata.description,
      images: [`${baseUrl}/images/Hero section transparent.png`],
    },
    icons: {
      icon: '/images/Flavicon Yoluko.svg',
    }
  };
}


export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Yoluko Solutions",
              "url": process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
              "logo": `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/images/LOGO Yoluko.svg`,
            }),
          }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WFSVDY7CP2"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WFSVDY7CP2');
          `}
        </Script>
      </body>
    </html>
  );
}