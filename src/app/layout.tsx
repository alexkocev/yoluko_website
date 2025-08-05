// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import Script from "next/script";
import "./globals.css";
import { getDictionary } from "./dictionaries";

export const metadata: Metadata = {
  metadataBase: new URL("https://yoluko.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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