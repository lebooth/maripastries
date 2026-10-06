import JournalPosts from '@/components/JournalPosts';

export const metadata = { title: 'Journal · Mari Pastries' };

export default function Journal() {
  return (
    <main style={{ paddingTop: 80, flex: 1 }}>
      <section style={{ textAlign: 'center', padding: 'clamp(48px,7vw,80px) 20px 40px' }}>
        <div className="eyebrow">NOTES FROM THE KITCHEN</div>
        <h1 className="display" style={{ margin: '8px 0 0', fontSize: 'clamp(52px,9vw,96px)', lineHeight: 1 }}>Journal</h1>
      </section>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px,4vw,48px) 100px', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,7vw,80px)' }}>
        <JournalPosts />
      </section>
    </main>
  );
}
