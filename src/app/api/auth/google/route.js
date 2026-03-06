import { NextResponse } from 'next/server';

export async function GET() {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback';

  if (!CLIENT_ID) {
    return NextResponse.json({ error: "Missing GOOGLE_CLIENT_ID in .env.local" }, { status: 500 });
  }

  // Google Business Profile requires the 'business.manage' scope
  const scopes = [
    'https://www.googleapis.com/auth/business.manage'
  ].join(' ');

  // URL to redirect the user to
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&response_type=code` +
    `&scope=${encodeURIComponent(scopes)}` +
    `&access_type=offline` +
    `&prompt=consent`; // Forces a new refresh token to be issued

  return NextResponse.redirect(authUrl);
}
