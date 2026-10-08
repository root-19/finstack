import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(body: Record<string, unknown>, key: string, max: number) {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const lead = {
    name: field(body, "name", 100),
    email: field(body, "email", 200),
    company: field(body, "company", 100),
    topic: field(body, "topic", 50),
    message: field(body, "message", 2000),
  };

  if (!lead.name || !lead.message) {
    return NextResponse.json({ error: "Please fill in your name and message." }, { status: 400 });
  }
  if (!EMAIL_RE.test(lead.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: forward the lead to your inbox or CRM (e.g. an email API, Slack
  // webhook or database). For now it is only logged on the server.
  console.log("New contact request", lead);

  return NextResponse.json({ ok: true });
}
