import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import Script from "next/script";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: "Yoluko | AI & Automation Agency",
    template: "%s | Yoluko",
  },
  description: "Scale your operations with custom AI agents and automated workflows. $0 upfront cost. We only win when you grow.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
  alternates: {
    canonical: SITE_CONFIG.baseUrl,
  },
  openGraph: {
    title: "Yoluko | AI & Automation Agency",
    description: "Scale your operations with custom AI agents and automated workflows. $0 upfront cost. We only win when you grow.",
    url: SITE_CONFIG.baseUrl,
    siteName: "Yoluko",
    images: [
      {
        url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 1200,
        alt: "Yoluko - AI & Automation Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <Script
          id="whatsapp-og-image-itemprop"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const existingOgImage = document.querySelector('meta[property="og:image"]');
                if (existingOgImage) {
                  existingOgImage.setAttribute('itemProp', 'image');
                } else {
                  const meta = document.createElement('meta');
                  meta.setAttribute('property', 'og:image');
                  meta.setAttribute('content', '${SITE_CONFIG.baseUrl}/images/og-image.jpg');
                  meta.setAttribute('itemProp', 'image');
                  document.head.appendChild(meta);
                }
              })();
            `,
          }}
        />
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_CONFIG.baseUrl}/#organization`,
                  "name": "Yoluko",
                  "alternateName": "Yoluko AI & Automation",
                  "url": SITE_CONFIG.baseUrl,
                  "logo": {
                    "@type": "ImageObject",
                    "url": `${SITE_CONFIG.baseUrl}/images/logo-yoluko.svg`,
                    "width": 400,
                    "height": 400
                  },
                  "image": `${SITE_CONFIG.baseUrl}/images/logo-yoluko.svg`,
                  "description": "AI & Automation agency building custom solutions for businesses. AI agents, software engineering, automation, and data science.",
                  "foundingDate": "2024",
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "Alexandre Kocev",
                      "jobTitle": "Tech Lead & AI Architect",
                      "sameAs": "https://www.linkedin.com/in/alexandre-kocev"
                    },
                    {
                      "@type": "Person",
                      "name": "Yahya Lahlou",
                      "jobTitle": "Strategy & Ops Director",
                      "sameAs": "https://www.linkedin.com/in/yahya-lahlou-080a24163"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Paris",
                    "addressCountry": "FR"
                  },
                  "areaServed": [
                    { "@type": "Country", "name": "France" },
                    { "@type": "Country", "name": "Europe" }
                  ],
                  "serviceType": [
                    "AI Agents",
                    "Software Engineering",
                    "Business Automation",
                    "Data Science",
                    "Custom Software Development"
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_CONFIG.baseUrl}/#website`,
                  "url": SITE_CONFIG.baseUrl,
                  "name": "Yoluko - AI & Automation Agency",
                  "description": "Custom AI agents and automated workflows. $0 upfront cost.",
                  "publisher": {
                    "@id": `${SITE_CONFIG.baseUrl}/#organization`
                  },
                  "inLanguage": "en",
                },
                {
                  "@type": "Service",
                  "@id": `${SITE_CONFIG.baseUrl}/#service`,
                  "name": "AI & Automation Solutions",
                  "description": "Custom AI agents, software engineering, automation, and data science solutions",
                  "provider": {
                    "@id": `${SITE_CONFIG.baseUrl}/#organization`
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "France"
                  },
                },
              ]
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
