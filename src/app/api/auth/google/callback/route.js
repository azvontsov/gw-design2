import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  if (!code) {
    return NextResponse.json({ error: "Missing code in URL" }, { status: 400 });
  }

  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback';

  try {
    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });

    const data = await res.json();

    if (data.error) {
      return NextResponse.json(data, { status: 400 });
    }

    // You now have a refresh_token!
    // We return it to the screen so the user can copy-paste it into .env.local
    return new NextResponse(
      `<html>
        <body style="font-family: sans-serif; padding: 2rem;">
          <h1>Authentication Successful!</h1>
          <p>Copy the following refresh token into your <b>.env.local</b> file:</p>
          <pre style="background: #f4f4f4; padding: 1rem; border-radius: 8px;">GOOGLE_REFRESH_TOKEN=${data.refresh_token}</pre>
          <p>You can close this window after copying the token.</p>
        </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
