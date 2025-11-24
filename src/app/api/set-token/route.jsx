import { NextResponse } from "next/server";

export async function POST(req) {
  const { token } = await req.json();

  const res = NextResponse.json({ success: true });

  res.cookies.set("token", token, {
    httpOnly: true,   // middleware can read it
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return res;
}
