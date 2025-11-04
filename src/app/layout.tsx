import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'Ginfra Dynamic',
  title: 'Ginfra Dynamic — Precision Defence Manufacturing',
  description:
    'Ginfra Dynamic is a defence-first manufacturer of precision components and munitions sub-systems. We specialize in CNC machining, forging, electronics integration, and quality compliance with full traceability.',
  keywords:
    'defence manufacturing, aerospace components, precision manufacturing, cnc machining, forging, fuze systems, modular charge system, electronics integration, traceability, QA, PPAP, ISO 9001, AS9100',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Ginfra Dynamic',
    title: 'Ginfra Dynamic — Precision Defence Manufacturing',
    description:
      'Defence-first manufacturer of precision components and sub-systems. CNC machining, forging, electronics integration, and quality compliance with full traceability.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ginfra Dynamic — Precision Defence Manufacturing',
    description:
      'Defence-first manufacturer of precision components and sub-systems with rigorous QA and traceability.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },
  category: 'technology',
  creator: 'Ginfra Dynamic',
  publisher: 'Ginfra Dynamic',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
