import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://y-sigma-sable.vercel.app'),
  title: {
    default: "Thorens Vinylspelare Restaurering | Professionell Renovering",
    template: "%s | Thorens Vinylspelare Restaurering"
  },
  description: "Professionell restaurering av Thorens vinylspelare. Specialiserad på TD 124 med totalrenoveringar, ny plint i massivt trä och reputering av tonarmar. Fast pris, högkvalitativ hantverk.",
  keywords: [
    "Thorens restaurering",
    "vinylspelare renovering",
    "TD 124 restaurering",
    "Thorens plint",
    "vinylspelare reparering",
    "Thorens tonarm",
    "skivspelare restaurering",
    "Thorens totalrenovering"
  ],
  authors: [{ name: "Niklas Nilsson" }],
  creator: "Niklas Nilsson",
  publisher: "Vinylspelare Restaurering",
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
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://y-sigma-sable.vercel.app',
    title: 'Thorens Vinylspelare Restaurering | Professionell Renovering',
    description: 'Professionell restaurering av Thorens vinylspelare. Specialiserad på TD 124 med totalrenoveringar och högkvalitativ hantverk.',
    siteName: 'Vinylspelare Restaurering',
    images: [
      {
        url: '/thorens.jpg',
        width: 1200,
        height: 630,
        alt: 'Thorens vinylspelare restaurering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thorens Vinylspelare Restaurering',
    description: 'Professionell restaurering av Thorens vinylspelare. Specialiserad på TD 124.',
    images: ['/thorens.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
