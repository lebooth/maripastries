import { Goudy_Bookletter_1911, Sorts_Mill_Goudy } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const display = Goudy_Bookletter_1911({ weight: '400', subsets: ['latin'], variable: '--font-display' });
const body = Sorts_Mill_Goudy({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: 'Mari Pastries · Small-batch pastries in San Diego',
  description: 'Small-batch cookies, cupcakes and naked cakes baked in San Diego. Weddings, events and pop-ups.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {/* cardstock paper texture over the whole page */}
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 100, pointerEvents: 'none', background: 'url(/assets/cardstock.png) repeat', backgroundSize: 320, mixBlendMode: 'multiply', opacity: 0.75 }} />
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
