import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    'ד"ר טלי סופרין רינגולד (PhD)',
  description:
    "הרצאות סוחפות על גנטיקה, מדע והחיים עצמם בואו לשמוע מדע בגובה העיניים, פשוט, מעניין ומהנה",
  keywords:
    "גנטיקה, וירולוגיה, מדעי החיים, הרצאות, טלי סופרין רינגולד, אפיגנטיקה",
  authors: [{ name: "Dr. Tali Sufrin-Ringwald" }],
  openGraph: {
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
    <html
      lang="he"
      dir="rtl"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="font-sans overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
