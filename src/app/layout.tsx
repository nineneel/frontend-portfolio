import './globals.css';
import type { Metadata } from 'next';
import { neueMontreal } from '@/lib/styles/font';
import { Footer, Header } from '@/lib/components';

export const metadata: Metadata = {
  title: 'nineneel.',
  description: 'A Website with coding!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${neueMontreal.variable} font-primary`}>
        <Header />
        <main className='mt-16'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
