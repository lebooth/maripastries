'use client';
import { useState } from 'react';
import { posts } from '@/lib/data';

export default function JournalPosts() {
  const [open, setOpen] = useState(-1);
  return posts.map((p, i) => (
    <article key={p.title} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(24px,4vw,48px)', alignItems: 'center' }}>
      <div role="img" aria-label={p.title} style={{ aspectRatio: '4/3', background: `#E1AFBB url(${p.img}) ${p.pos}/cover no-repeat`, borderRadius: 4, order: i % 2 ? 2 : 0 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div className="display" style={{ letterSpacing: '.2em', fontSize: 12, color: '#842936' }}>{p.date} · {p.tag}</div>
        <h2 className="display" style={{ margin: 0, fontSize: 'clamp(28px,3.6vw,40px)', lineHeight: 1.08 }}>{p.title}</h2>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, textWrap: 'pretty' }}>{p.excerpt}</p>
        {open === i && <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, textWrap: 'pretty' }}>{p.body}</p>}
        <button className="link-under" style={{ alignSelf: 'flex-start' }} onClick={() => setOpen(open === i ? -1 : i)}>{open === i ? 'SHOW LESS' : 'READ MORE'}</button>
      </div>
    </article>
  ));
}
