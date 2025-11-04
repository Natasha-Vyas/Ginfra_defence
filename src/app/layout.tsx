import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'GInfra Travancore Pvt. Ltd. - Precision Manufacturing for Defence & Aerospace',
  description:
    'Leading manufacturer of high-precision components and weapon-system subsystems for Defence, Aerospace, and Advanced Robotics. Specializing in artillery munitions, fuze systems, and precision manufacturing.',
  keywords:
    'defence manufacturing, aerospace components, precision manufacturing, artillery munitions, fuze systems, robotics components, CNC machining, electronics integration',
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
