'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [['MENU', '/#menu'], ['ORDER', '/#order'], ['JOURNAL', '/journal'], ['FIND US', '/find-us']];

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const solid = scrolled || path !== '/';
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 150, backgroundColor: solid ? '#842936' : 'rgba(132,41,54,0)', backgroundImage: solid ? 'url(/assets/cardstock.png)' : 'none', backgroundSize: 320, backgroundBlendMode: 'multiply', borderBottom: `1px solid ${solid ? 'rgba(247,238,216,.35)' : 'rgba(247,238,216,0)'}`, transition: 'background-color .35s ease, border-color .35s ease', color: '#F7EED8', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px 24px', padding: '10px clamp(16px,4vw,48px)' }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#F7EED8' }}>
        <img src="/assets/mono-cream.png" alt="Mari Pastries" style={{ height: 34, width: 'auto', display: 'block' }} />
        <span className="display" style={{ letterSpacing: '.14em', fontSize: 15, lineHeight: 1.05 }}>MARI<br />PASTRIES</span>
      </Link>
      <nav className="display" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px clamp(14px,3.5vw,22px)', letterSpacing: 'clamp(.08em,1vw,.16em)', fontSize: 'clamp(12px,3.2vw,13px)' }}>
        {nav.map(([label, href]) => (
          <Link key={label} href={href} className="cream-link" style={{ padding: '6px 0', borderBottom: `1px solid ${path === href ? '#F7EED8' : 'transparent'}` }}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
