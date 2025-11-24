import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import LoadingOverlay from "@/components/LoadingOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const heroHeadlineLine1 = "הרצאות סוחפות על גנטיקה";
const heroHeadlineLine2 = "מדע והחיים עצמם";
const siteDescription = `${heroHeadlineLine1} ${heroHeadlineLine2} – בואו לשמוע מדע בגובה העיניים, פשוט, מעניין ומהנה`;
const siteUrl = "https://drtalisufrinringwald.com";
const siteName = 'ד"ר טלי סופרין רינגולד (PhD)';

const navigationItems = [
  { id: "home", label: "בית" },
  { id: "lectures", label: "ההרצאות שלי" },
  { id: "offer", label: "מה אני מציעה" },
  { id: "about", label: "קצת עליי" },
  { id: "testimonials", label: "המלצות" },
  { id: "gallery", label: "גלריה" },
  { id: "contact", label: "צור קשר" },
  { id: "blog", label: "בלוג", url: `${siteUrl}/blog` },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: siteName,
      jobTitle: "מרצה למדעי החיים ולגנטיקה",
      url: siteUrl,
      image: `${siteUrl}/images/tali-portrait.jpg`,
      description: siteDescription,
      sameAs: [
        "https://www.facebook.com/profile.php?id=61560015465070",
        "https://wa.me/972507774581",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/images/gallery/og-gallery.JPG`,
      founder: {
        "@id": `${siteUrl}#person`,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+972507774581",
          email: "talisuf@gmail.com",
          areaServed: "IL",
          availableLanguage: ["he", "en"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "he",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
      hasPart: navigationItems.map((item) => ({
        "@type": "WebPage",
        "@id": `${siteUrl}#${item.id}`,
        name: item.label,
        url: item.url ?? `${siteUrl}/#${item.id}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}#breadcrumbs`,
      itemListElement: navigationItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: item.url ?? `${siteUrl}/#${item.id}`,
      })),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  keywords:
    "גנטיקה, וירולוגיה, מדעי החיים, הרצאות, טלי סופרין רינגולד, אפיגנטיקה",
  authors: [{ name: "Dr. Tali Sufrin-Ringwald" }],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    url: `${siteUrl}/`,
    siteName: 'ד"ר טלי סופרין רינגולד',
    locale: "he_IL",
    title: siteName,
    description: `${heroHeadlineLine1}\n${heroHeadlineLine2}\nבואו לשמוע מדע בגובה העיניים, פשוט, מעניין ומהנה`,
    type: "website",
    images: [
      {
        url: "/images/gallery/og-gallery.JPG",
        width: 1200,
        height: 630,
        alt: "Gallery preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/images/gallery/og-gallery.JPG"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={inter.variable}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body className="font-sans overflow-x-hidden">
        <LoadingOverlay />
        <Navigation />
        <main>{children}</main>
        <FloatingContactButtons />
        <Footer />
      </body>
    </html>
  );
}
