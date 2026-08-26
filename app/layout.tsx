import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  'https://zrz1996.github.io/purdue-umich-quantum-algorithms-seminar';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Purdue–UMich Quantum Algorithms Seminar',
  description:
    'A joint online seminar on quantum algorithms, complexity, and computation from Purdue University and the University of Michigan.',
  openGraph: {
    title: 'Purdue–UMich Quantum Algorithms Seminar',
    description:
      'A joint online seminar on quantum algorithms, complexity, and computation.',
    url: siteUrl,
    siteName: 'Purdue–UMich Quantum Algorithms Seminar',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1536,
        height: 1024,
        alt: 'Purdue–UMich Quantum Algorithms Seminar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purdue–UMich Quantum Algorithms Seminar',
    description:
      'A joint online seminar on quantum algorithms, complexity, and computation.',
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
