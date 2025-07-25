// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import Script from "next/script";
import "./globals.css";
import { getDictionary } from "./dictionaries";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yoluko.com";

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
      locale: lang === 'en' ? 'en_US' : 'fr_FR',
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title.default,
      description: dict.metadata.description,
    },
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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
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
              "url": "https://yoluko.com",
              "logo": "https://yoluko.com/images/LOGO Yoluko.svg",
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