import { NextResponse } from 'next/server';

export async function GET() {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return NextResponse.json({ error: "Missing Google Credentials in .env.local" }, { status: 500 });
  }

  try {
    // 1. Get Access Token
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        grant_type: 'refresh_token',
      })
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok) {
        return NextResponse.json({ error: "Failed to get access token", details: tokenData }, { status: 500 });
    }

    const { access_token } = tokenData;

    // 2. Fetch Accounts
    const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { 'Authorization': `Bearer ${access_token}` },
    });
    
    const accountsData = await accountsRes.json();
    
    if (!accountsRes.ok || !accountsData.accounts || accountsData.accounts.length === 0) {
        return NextResponse.json({ error: "No Google Business accounts found. Ensure this Gmail admin's an active profile.", details: accountsData }, { status: 500 });
    }

    const accountName = accountsData.accounts[0].name;

    // 3. Fetch Locations for that account
    const locationsRes = await fetch(`https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title`, {
      headers: { 'Authorization': `Bearer ${access_token}` },
    });

    const locationsData = await locationsRes.json();

    if (!locationsRes.ok) {
         return NextResponse.json({ error: "Failed to fetch locations", details: locationsData }, { status: 500 });
    }

    // Return HTML helper to show the string to copy
    let html = `<html><body style="font-family: sans-serif; padding: 2rem;">
        <h1>Your Google Business Locations</h1>
        <p>Copy the "Location Code" below for your business into your .env.local file as <b>GOOGLE_LOCATION_NAME</b></p>
        <hr/>
        <ul>`;
        
    for (const loc of (locationsData.locations || [])) {
        html += `<li style="margin-bottom: 2rem;">
            <strong>Business Name:</strong> ${loc.title}<br/>
            <strong>Location Code to Copy:</strong> <pre style="background: #eef; padding: 1rem; border-radius: 4px; display: inline-block;">${loc.name}</pre>
        </li>`;
    }

    html += `</ul></body></html>`;

    return new NextResponse(html, { headers: { 'Content-Type': 'text/html' }});

  } catch (error) {
    return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
