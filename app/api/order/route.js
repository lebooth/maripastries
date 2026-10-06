// Receives order-form submissions.
// Orders are saved to the Supabase `orders` table when SUPABASE_URL and SUPABASE_API_KEY are set.
// To also get them by email, set ORDER_FORWARD_URL to a Formspree endpoint (free) in your host's env vars,
// or replace the forward below with Resend / SendGrid / etc.
export async function POST(req) {
  const data = await req.json();
  if (!data?.name || !data?.email || !data?.date) return Response.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  console.log('New order request:', data);

  if (process.env.SUPABASE_URL && process.env.SUPABASE_API_KEY) {
    const { default: supabase } = await import('@/db');
    const { error } = await supabase.from('orders').insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      date_needed: data.date,
      item: data.item || null,
      qty: data.qty || null,
      method: data.method || null,
      notes: data.notes || null,
    });
    if (error) {
      console.error('Could not save order:', error);
      return Response.json({ ok: false }, { status: 500 });
    }
  }

  const url = process.env.ORDER_FORWARD_URL;
  if (url) {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
    if (!res.ok) return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}
