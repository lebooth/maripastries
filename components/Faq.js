'use client';
import { useState } from 'react';
import { faqs } from '@/lib/data';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(247,238,216,.3)' }}>
      {faqs.map(([q, a], i) => (
        <div key={q} style={{ borderBottom: '1px solid rgba(247,238,216,.3)' }}>
          <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{q}</span><span className="display" style={{ fontSize: 20, color: '#E1AFBB', flex: 'none' }}>{open === i ? '–' : '+'}</span>
          </button>
          {open === i && <p style={{ margin: '0 0 16px', maxWidth: 620, fontSize: 15, lineHeight: 1.6, color: '#EADFC6', textWrap: 'pretty' }}>{a}</p>}
        </div>
      ))}
    </div>
  );
}
