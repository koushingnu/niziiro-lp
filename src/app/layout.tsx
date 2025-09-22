import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import siteData from "../data/site.json";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Image from "next/image";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: siteData.siteName,
  description: siteData.description,
  openGraph: {
    title: siteData.siteName,
    description: siteData.description,
    url: siteData.siteUrl,
    siteName: siteData.siteName,
    images: [
      {
        url: `${siteData.siteUrl}allmember.jpg`,
        width: 1200,
        height: 630,
        alt: siteData.siteName,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.siteName,
    description: siteData.description,
    images: [`${siteData.siteUrl}allmember.jpg`],
  },
  alternates: {
    canonical: siteData.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.variable} font-sans antialiased relative`}>
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/background.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
