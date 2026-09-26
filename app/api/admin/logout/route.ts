import { NextResponse } from 'next/server';

const jsonHeaders = { 'Content-Type': 'application/json; charset=utf-8' };

export async function POST() {
  const response = NextResponse.json({ ok: true }, { headers: jsonHeaders });
  response.cookies.set('pkv_admin', '', { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 0 });
  return response;
}
