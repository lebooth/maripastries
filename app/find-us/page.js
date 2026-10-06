import { event, upcoming, contact } from '@/lib/data';
import VanScene from '@/components/VanScene';

export const metadata = { title: 'Find us · Mari Pastries' };

export default function FindUs() {
  const q = encodeURIComponent(event.address);
  return (
    <main style={{ paddingTop: 80, flex: 1 }}>
      <section style={{ textAlign: 'center', padding: 'clamp(48px,7vw,80px) 20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div className="display" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, letterSpacing: '.24em', fontSize: 13, color: '#842936' }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: event.atEvent ? '#3E8E5A' : '#842936', animation: 'mpPulse 1.6s ease-in-out infinite' }} />
          {event.atEvent ? 'OPEN NOW' : 'ON THE ROAD'}
        </div>
        <h1 className="display" style={{ margin: 0, fontSize: 'clamp(52px,9vw,96px)', lineHeight: 1 }}>Find us</h1>
      </section>

      {event.atEvent ? (
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '16px clamp(16px,4vw,48px) 90px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 24 }}>
          <div style={{ background: '#E1AFBB', borderRadius: '48px 48px 4px 4px', padding: 12 }}>
            <div style={{ border: '2px solid #F7EED8', borderRadius: '38px 38px 2px 2px', padding: '36px 30px', display: 'flex', flexDirection: 'column', gap: 18, height: '100%' }}>
              <div className="display" style={{ letterSpacing: '.24em', fontSize: 12, color: '#842936' }}>TODAY WE’RE AT</div>
              <h2 className="display" style={{ margin: 0, fontSize: 'clamp(32px,4vw,44px)', lineHeight: 1.05 }}>{event.name}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 18, lineHeight: 1.5 }}><span>{event.address}</span><span style={{ fontStyle: 'italic' }}>{event.hours}</span></div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>Look for the pink van. Cookies go fast — come early for the full selection.</p>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noreferrer" className="btn" style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>GET DIRECTIONS →</a>
            </div>
          </div>
          <iframe src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`} title="Event map" loading="lazy" style={{ width: '100%', minHeight: 420, border: 0, borderRadius: 4, filter: 'sepia(.25) saturate(.9)', background: '#E1AFBB' }} />
        </section>
      ) : (
        <>
          <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ margin: '0 20px 8px', maxWidth: 520, textAlign: 'center', fontSize: 19, lineHeight: 1.6, textWrap: 'pretty' }}>We’re between stops right now — baking, restocking and cruising San Diego in the pink van. Follow <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noreferrer">@{contact.instagram}</a> to hear where we’ll pop up next.</p>
            <div style={{ width: '100%' }}><VanScene /></div>
          </section>
          <section style={{ maxWidth: 820, margin: '0 auto', padding: '56px 20px 90px', width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h2 className="display" style={{ margin: 0, fontSize: 30, letterSpacing: '.06em' }}>Next stops</h2>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #2A1405' }}>
              {upcoming.map(u => (
                <div key={u.date + u.name} style={{ display: 'grid', gridTemplateColumns: '110px minmax(0,1fr)', gap: 18, padding: '18px 0', borderBottom: '1px solid rgba(42,20,5,.25)', alignItems: 'baseline' }}>
                  <div className="display" style={{ letterSpacing: '.14em', fontSize: 14, color: '#842936' }}>{u.date}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span style={{ fontSize: 20 }}>{u.name}</span><span style={{ fontStyle: 'italic', fontSize: 15 }}>{u.where}</span></div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
