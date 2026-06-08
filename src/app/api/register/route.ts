export async function POST(request: Request) {
  const scriptUrl = process.env.APPS_SCRIPT_URL;
  if (!scriptUrl) {
    return Response.json({ error: "APPS_SCRIPT_URL not configured" }, { status: 500 });
  }

  const body = await request.json();
  const { contactMode, value } = body as { contactMode: "phone" | "email"; value: string };

  if (!contactMode || !value) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const res = await fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contactMode, value }),
  });

  if (!res.ok) {
    return Response.json({ error: "Failed to save" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
