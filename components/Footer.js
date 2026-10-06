import Link from 'next/link';
import { contact } from '@/lib/data';

const head = { fontFamily: 'var(--display)', letterSpacing: '.22em', fontSize: 12, color: '#E1AFBB', marginBottom: 4 };
const col = { display: 'flex', flexDirection: 'column', gap: 8, fontSize: 17 };

export default function Footer() {
  return (
    <footer style={{ background: '#842936', color: '#F7EED8', padding: 'clamp(56px,7vw,80px) clamp(16px,4vw,48px) 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <img src="/assets/logo-cream.png" alt="Mari" style={{ width: 110, height: 'auto' }} />
          <p style={{ margin: 0, fontStyle: 'italic', fontSize: 16, lineHeight: 1.5 }}>Small-batch cookies &amp; cakes,<br />baked in San Diego.</p>
        </div>
        <div style={col}>
          <div style={head}>CONTACT</div>
          <a href={`mailto:${contact.email}`} className="cream-link">{contact.email}</a>
          <a href={contact.phoneHref} className="cream-link">{contact.phone}</a>
          <span>San Diego, California</span>
        </div>
        <div style={col}>
          <div style={head}>FOLLOW</div>
          <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noreferrer" className="cream-link">Instagram · @{contact.instagram}</a>
          <Link href="/find-us" className="cream-link">Where’s the van?</Link>
          <Link href="/journal" className="cream-link">Journal</Link>
        </div>
        <div style={col}>
          <div style={head}>HOURS</div>
          <span>Orders by request</span>
          <span>Pop-ups most weekends</span>
          <span style={{ fontStyle: 'italic', color: '#EADFC6' }}>Collect 10 stamps, get a fresh pastry on us.</span>
        </div>
      </div>
      <div className="display" style={{ maxWidth: 1200, margin: '48px auto 0', paddingTop: 20, borderTop: '1px solid rgba(247,238,216,.3)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, letterSpacing: '.18em', fontSize: 11, color: '#EADFC6' }}>
        <span>© {new Date().getFullYear()} MARI PASTRIES</span><span>MADE WITH BUTTER IN SAN DIEGO</span>
      </div>
    </footer>
  );
}
