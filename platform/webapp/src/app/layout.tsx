import type { Metadata } from 'next';
import { DM_Mono, DM_Sans } from 'next/font/google';
import { AppProviders } from '@/components/providers';
import './globals.css';

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-face',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shapemint',
  description: 'Influence-and-incentive ledger for AI consortia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${mono.variable} font-display antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
