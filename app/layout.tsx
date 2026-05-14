import type { Metadata } from 'next';
import { Bebas_Neue, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Ajay Patel K A — Full-Stack Software Engineer',
  description:
    'Full-Stack Software Engineer with 2+ years building production-grade AI applications and scalable web platforms using React, Python, Django, Azure, and GenAI.',
  keywords: ['Ajay Patel', 'Software Engineer', 'React', 'Python', 'AI', 'GenAI', 'Full-Stack', 'Bangalore'],
  authors: [{ name: 'Ajay Patel K A' }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Ajay Patel K A — Full-Stack Software Engineer',
    description: 'Building production-grade AI applications and scalable web platforms.',
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Ajay Patel K A — Full-Stack Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajay Patel K A — Full-Stack Software Engineer',
    description: 'Building production-grade AI applications and scalable web platforms.',
    images: ['/og'],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
