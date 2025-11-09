// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { GeistSans, GeistMono } from 'geist/font';
import Script from "next/script";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";
import { getDictionary } from "./dictionaries";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/images/Favicon Yoluko.svg",
    shortcut: "/images/Favicon Yoluko.svg",
    apple: "/images/Favicon Yoluko.svg",
  },
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_CONFIG.baseUrl}/#organization`,
                  "name": "Yoluko Solutions",
                  "alternateName": "Yoluko",
                  "url": SITE_CONFIG.baseUrl,
                  "logo": {
                    "@type": "ImageObject",
                    "url": `${SITE_CONFIG.baseUrl}/images/LOGO Yoluko.svg`,
                    "width": 400,
                    "height": 400
                  },
                  "image": `${SITE_CONFIG.baseUrl}/images/LOGO Yoluko.svg`,
                  "description": "AI automation agency that builds custom solutions for businesses. From automated reporting to AI assistants, we help you save time and improve efficiency.",
                  "foundingDate": "2024",
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "Alexandre Kocev",
                      "jobTitle": "Founder & Head of Automation",
                      "sameAs": "https://www.linkedin.com/in/alexandre-kocev"
                    },
                    {
                      "@type": "Person", 
                      "name": "Yahya Lahlou",
                      "jobTitle": "Partner & Head of Client Strategy",
                      "sameAs": "https://www.linkedin.com/in/yahya-lahlou-080a24163"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lyon",
                    "addressRegion": "Auvergne-Rhône-Alpes",
                    "addressCountry": "FR"
                  },
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "France"
                    },
                    {
                      "@type": "Country", 
                      "name": "Europe"
                    }
                  ],
                  "serviceType": [
                    "AI Automation",
                    "Business Process Automation", 
                    "Custom Software Development",
                    "AI Assistant Development",
                    "Automated Reporting Systems",
                    "Data Analytics Automation"
                  ],
                  "knowsAbout": [
                    "Artificial Intelligence",
                    "Business Automation",
                    "Process Optimization",
                    "Custom Software Development",
                    "Data Analytics",
                    "Workflow Automation"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": `${SITE_CONFIG.baseUrl}/#localbusiness`,
                  "name": "Yoluko Solutions",
                  "image": `${SITE_CONFIG.baseUrl}/images/LOGO Yoluko.svg`,
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lyon",
                    "addressRegion": "Auvergne-Rhône-Alpes",
                    "addressCountry": "FR"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 45.7640,
                    "longitude": 4.8357
                  },
                  "url": SITE_CONFIG.baseUrl,
                  "telephone": "+33-XXX-XXX-XXX",
                  "priceRange": "€€",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday", 
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_CONFIG.baseUrl}/#website`,
                  "url": SITE_CONFIG.baseUrl,
                  "name": "Yoluko Solutions - AI Automation Agency",
                  "description": "Custom AI automation solutions for businesses. Eliminate manual work with intelligent automation tailored to your needs.",
                  "publisher": {
                    "@id": `${SITE_CONFIG.baseUrl}/#organization`
                  },
                  "inLanguage": ["en", "fr"],
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": `${SITE_CONFIG.baseUrl}/search?q={search_term_string}`
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Service",
                  "@id": `${SITE_CONFIG.baseUrl}/#service-ai-automation`,
                  "name": "AI Business Automation",
                  "description": "Custom AI automation solutions that eliminate manual work and optimize business processes",
                  "provider": {
                    "@id": `${SITE_CONFIG.baseUrl}/#organization`
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "France"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AI Automation Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Data Insights Dashboard",
                          "description": "Automated business data organization and visualization"
                        }
                      },
                      {
                        "@type": "Offer", 
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Automated Reporting Assistant",
                          "description": "AI-powered performance reporting delivered automatically"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service", 
                          "name": "AI Business Analyst",
                          "description": "Conversational AI for strategic business insights"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Automated Trading System",
                          "description": "24/7 automated trading strategy implementation"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": `${SITE_CONFIG.baseUrl}/#professional-service`,
                  "name": "Custom Business Automation Consulting",
                  "description": "Expert consultation and development of tailored automation solutions for businesses",
                  "provider": {
                    "@id": `${SITE_CONFIG.baseUrl}/#organization`
                  },
                  "serviceType": "Business Consulting",
                  "areaServed": {
                    "@type": "Country",
                    "name": "France"
                  }
                }
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