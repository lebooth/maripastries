// Receives order-form submissions.
// To get them by email, set ORDER_FORWARD_URL to a Formspree endpoint (free) in your host's env vars,
// or replace the forward below with Resend / SendGrid / etc.
export async function POST(req) {
  const data = await req.json();
  if (!data?.name || !data?.email || !data?.date) return Response.json({ ok: false, error: 'Missing fields' }, { status: 400 });
  console.log('New order request:', data);
  const url = process.env.ORDER_FORWARD_URL;
  if (url) {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
    if (!res.ok) return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}
