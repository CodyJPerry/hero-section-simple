import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hero Section Simple',
  description: 'A simple hero section with an image, heading, and paragraph.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${notoSans.className} min-h-screen w-screen bg-gradient-to-b from-gray-50 to-[#d2d6db]`}
      >
        {children}
      </body>
    </html>
  );
}
