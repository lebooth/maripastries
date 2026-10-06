import Link from 'next/link';
import { menu, gallery } from '@/lib/data';
import OrderForm from '@/components/OrderForm';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ display: 'flex', flexDirection: 'column', minHeight: '100svh', background: '#DD9BA9', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url(/assets/hero-clean.png) center/cover no-repeat', filter: 'saturate(1.15) contrast(1.04)' }} />
        <div style={{ flex: 1, minHeight: 300, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 'clamp(70px,12vw,56px)' }}>
          <img src="/assets/logo-cream.png" alt="Mari" style={{ position: 'relative', height: 'min(62%,380px)', width: 'auto', maxWidth: '80%', objectFit: 'contain', filter: 'brightness(1.06) drop-shadow(0 8px 24px rgba(132,41,54,.4))' }} />
        </div>
        <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px 28px', padding: '22px 20px', color: '#F7EED8', textAlign: 'center' }}>
          <div className="display" style={{ letterSpacing: 'clamp(.18em,1.2vw,.3em)', fontSize: 'clamp(12px,3.2vw,14px)', textWrap: 'balance' }}>SMALL-BATCH PASTRIES · SAN DIEGO, CA</div>
          <a href="#menu" className="btn-ghost">SEE THE MENU ↓</a>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ position: 'relative', background: '#C98E9E url(/assets/menu-mono.png) center top/200px repeat', padding: 'clamp(64px,10vw,120px) 20px', display: 'flex', justifyContent: 'center' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 'calc(100vw * 0.5625 * 0.9)', background: 'url(/assets/boxes.jpg) center top/100% auto no-repeat', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 20, background: 'radial-gradient(circle at 14px 0,transparent 12px,#F7EED8 12.5px,#F7EED8 15px,#C98E9E 15.5px) 0 0/28px 20px repeat-x' }} />
        </div>
        <div style={{ position: 'relative', width: '100%', maxWidth: 560, background: '#E1AFBB', borderRadius: '60px 60px 6px 6px', padding: 14, boxShadow: '0 30px 60px rgba(42,20,5,.35)' }}>
          <div style={{ border: '2px solid #F7EED8', borderRadius: '48px 48px 2px 2px', padding: 'clamp(28px,6vw,48px) clamp(20px,6vw,48px) 32px', display: 'flex', flexDirection: 'column', gap: 30 }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <img src="/assets/mono-choc.png" alt="" style={{ height: 56, width: 'auto' }} />
              <h2 className="display" style={{ margin: 0, fontSize: 'clamp(48px,9vw,72px)', letterSpacing: '.06em', color: '#842936', lineHeight: 1 }}>MENU</h2>
              <div style={{ fontStyle: 'italic', fontSize: 16 }}>Baked to order, every week</div>
            </div>
            {menu.map(cat => (
              <div key={cat.name} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 className="display" style={{ margin: 0, fontSize: 26, letterSpacing: '.1em', color: '#842936' }}>{cat.name}</h3>
                {cat.note && <div className="display" style={{ letterSpacing: '.1em', fontSize: 12, marginTop: -4 }}>{cat.note}</div>}
                {cat.items.map(it => (
                  <div key={it.name} className="display" style={{ display: 'flex', alignItems: 'baseline', gap: 10, letterSpacing: '.08em', fontSize: 16 }}>
                    <span>{it.name}{it.sub && <span style={{ fontSize: 11, letterSpacing: '.06em', marginLeft: 6 }}>{it.sub}</span>}</span>
                    <span style={{ flex: 1, borderBottom: '1px dotted #842936', transform: 'translateY(-4px)', minWidth: 20 }} />
                    <span>{it.price}</span>
                  </div>
                ))}
              </div>
            ))}
            <div style={{ fontStyle: 'italic', fontSize: 14, textAlign: 'center', borderTop: '1px solid #F7EED8', paddingTop: 16 }}>*Filling is an additional charge</div>
            <a href="#order" className="btn" style={{ alignSelf: 'center' }}>PLACE AN ORDER</a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: 'clamp(64px,9vw,110px) clamp(16px,4vw,48px)', maxWidth: 1240, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="eyebrow">GALLERY</div>
            <h2 className="display" style={{ margin: '6px 0 0', fontSize: 'clamp(34px,5vw,52px)', lineHeight: 1.05 }}>Fresh from the oven</h2>
          </div>
          <Link href="/journal" className="display" style={{ letterSpacing: '.16em', fontSize: 13, borderBottom: '1px solid #842936', paddingBottom: 3 }}>READ THE JOURNAL →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gridAutoRows: 240, gridAutoFlow: 'dense', gap: 14 }}>
          {gallery.map((g, i) => (
            <figure key={i} role="img" aria-label={g.alt} style={{ margin: 0, gridColumn: g.col, gridRow: g.row, background: `#E1AFBB url(${g.src}) ${g.pos}/cover no-repeat`, borderRadius: 4 }} />
          ))}
        </div>
      </section>

      {/* ORDER */}
      <section id="order" style={{ background: '#E1AFBB', padding: 'clamp(64px,9vw,110px) 20px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 'clamp(32px,5vw,64px)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="eyebrow">ORDERS</div>
            <h2 className="display" style={{ margin: 0, fontSize: 'clamp(38px,5.5vw,58px)', lineHeight: 1.02 }}>Place an order with us</h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, textWrap: 'pretty' }}>Tell us what you’re craving and when you need it. We’ll reply within 48 hours to confirm details and payment.</p>
            <p style={{ margin: 0, fontStyle: 'italic', fontSize: 16, lineHeight: 1.6 }}>Cakes &amp; cupcakes need at least one week’s notice. Weddings, 6–8 weeks.</p>
          </div>
          <div style={{ background: '#F7EED8', padding: 'clamp(22px,4vw,36px)', borderRadius: 4, boxShadow: '0 20px 40px rgba(132,41,54,.18)' }}>
            <OrderForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#2A1405', color: '#F7EED8', padding: 'clamp(44px,6vw,70px) 20px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ fontSize: 12, color: '#E1AFBB' }}>WEDDINGS, EVENTS &amp; MORE</div>
            <h2 className="display" style={{ margin: '6px 0 0', fontSize: 'clamp(26px,3.5vw,36px)' }}>Frequently asked</h2>
          </div>
          <Faq />
        </div>
      </section>
    </main>
  );
}
