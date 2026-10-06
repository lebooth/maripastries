'use client';
import { useState } from 'react';
import { orderOptions } from '@/lib/data';

export default function OrderForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [name, setName] = useState('');
  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus('sending');
    try {
      const res = await fetch('/api/order', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setName(String(data.name || '').split(' ')[0]);
      setStatus('sent');
    } catch { setStatus('error'); }
  }
  if (status === 'sent') return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center', padding: '30px 0' }}>
      <img src="/assets/mono-choc.png" alt="" style={{ height: 70 }} />
      <h3 className="display" style={{ margin: 0, fontSize: 32 }}>Thank you{name ? ', ' + name : ''}!</h3>
      <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, maxWidth: 340 }}>Your request is in. We’ll be in touch soon — keep an eye on your inbox.</p>
      <button className="link-under" onClick={() => setStatus('idle')}>SEND ANOTHER</button>
    </div>
  );
  return (
    <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))', gap: 16 }}>
      <label className="field">NAME<input name="name" required /></label>
      <label className="field">EMAIL<input name="email" type="email" required /></label>
      <label className="field">PHONE<input name="phone" type="tel" /></label>
      <label className="field">DATE NEEDED<input name="date" type="date" required /></label>
      <label className="field">WHAT WOULD YOU LIKE?
        <select name="item">{orderOptions.map(o => <option key={o}>{o}</option>)}</select>
      </label>
      <label className="field">QUANTITY / GUESTS<input name="qty" /></label>
      <fieldset style={{ gridColumn: '1/-1', border: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px 24px', alignItems: 'center', fontSize: 17 }}>
        <legend className="display" style={{ letterSpacing: '.14em', fontSize: 12, marginBottom: 8 }}>PICKUP OR DELIVERY</legend>
        <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input type="radio" name="method" value="Pickup" defaultChecked style={{ accentColor: '#842936' }} />Pickup</label>
        <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input type="radio" name="method" value="Delivery" style={{ accentColor: '#842936' }} />Delivery (San Diego County)</label>
      </fieldset>
      <label className="field" style={{ gridColumn: '1/-1' }}>FLAVORS, FILLINGS &amp; DETAILS<textarea name="notes" rows={4} /></label>
      {status === 'error' && <p style={{ gridColumn: '1/-1', margin: 0, color: '#842936', fontStyle: 'italic' }}>Something went wrong — please try again, or email us directly.</p>}
      <button type="submit" className="btn" disabled={status === 'sending'} style={{ gridColumn: '1/-1', padding: 15, fontSize: 14, letterSpacing: '.22em' }}>{status === 'sending' ? 'SENDING…' : 'SEND ORDER REQUEST'}</button>
    </form>
  );
}
