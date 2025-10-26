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
    'ד"ר טלי סופרין רינגולד (PhD) | הרצאות העשרה בגנטיקה וירולוגיה ומדעי החיים',
  description:
    "הרצאות העשרה מרתקות בגנטיקה, וירולוגיה ומדעי החיים - בואו לשמוע מדע בגובה העיניים, פשוט, ברור ומהנה",
  keywords:
    "גנטיקה, וירולוגיה, מדעי החיים, הרצאות, טלי סופרין רינגולד, אפיגנטיקה",
  authors: [{ name: "Dr. Tali Sufrin-Ringwald" }],
  openGraph: {
    title: 'ד"ר טלי סופרין רינגולד (PhD) | הרצאות העשרה בגנטיקה וירולוגיה',
    description:
      "הרצאות העשרה מרתקות בגנטיקה, וירולוגיה ומדעי החיים - בואו לשמוע מדע בגובה העיניים",
    type: "website",
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
