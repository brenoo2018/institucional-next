import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './blog.css';
import Navbar from '@/components/Navbar';
// const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
import Head from '@/components/Head';
import Scripts from '@/components/Scripts';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Institucional - Faculdade Católica do Maranhão',
    template: '%s | Faculdade Católica do Maranhão',
  },
  icons: {
    icon: '/img/logo.ico.png',
  },
  description: 'Faculdade Católica do Maranhão',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Head />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
