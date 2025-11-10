import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import LoadingOverlay from "@/components/LoadingOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drtalisufrinringwald.com"),
  title:
    'ד"ר טלי סופרין רינגולד (PhD)',
  description:
    "הרצאות סוחפות על גנטיקה, מדע והחיים עצמם בואו לשמוע מדע בגובה העיניים, פשוט, מעניין ומהנה",
  keywords:
    "גנטיקה, וירולוגיה, מדעי החיים, הרצאות, טלי סופרין רינגולד, אפיגנטיקה",
  authors: [{ name: "Dr. Tali Sufrin-Ringwald" }],
  alternates: {
    canonical: "https://drtalisufrinringwald.com/",
  },
  openGraph: {
    url: "https://drtalisufrinringwald.com/",
    siteName: 'ד"ר טלי סופרין רינגולד',
    locale: "he_IL",
    title: 'ד"ר טלי סופרין רינגולד (PhD)',
    description:
      "הרצאות סוחפות על גנטיקה, מדע והחיים עצמם בואו לשמוע מדע בגובה העיניים, פשוט, מעניין ומהנה",
    type: "website",
    images: [
      { url: "/images/gallery/og-gallery.JPG", width: 1200, height: 630, alt: "Gallery preview" },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
