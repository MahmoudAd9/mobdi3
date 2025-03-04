import './globals.css';
import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });
const tajawal = Tajawal({ 
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'mobdi3 - منصة إعلانات مراجعة المنتجات',
  description: 'منصة لربط المؤثرين بالعلامات التجارية لإنشاء إعلانات مراجعة منتجات مذهلة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable}`}>
      <body className="font-tajawal">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}