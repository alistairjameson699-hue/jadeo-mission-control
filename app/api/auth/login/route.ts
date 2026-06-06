import { NextResponse } from "next/server";

const DEMO_EMAIL = "client@hisense.com";
const DEMO_PASSWORD = "jadeo2026";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };

  if (body.email !== DEMO_EMAIL || body.password !== DEMO_PASSWORD) {
    return NextResponse.json(
      { message: "Invalid Jadeo Mission Control credentials." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set("jadeo_session", "demo-client-session", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return response;
}
