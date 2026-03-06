import { NextResponse } from 'next/server';

export async function GET() {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
  const ACCOUNT_LOCATION_NAME = process.env.GOOGLE_LOCATION_NAME; // e.g. "locations/12345"

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN || !ACCOUNT_LOCATION_NAME) {
    return NextResponse.json({ error: "Missing Google Credentials in .env.local" }, { status: 500 });
  }

  // 1. Get a fresh access token using the refresh token
  try {
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

    // 2. Fetch the reviews using the Google Business Profile API
    // The Location name looks like: locations/1234567890
    const reviewsRes = await fetch(`https://mybusiness.googleapis.com/v4/accounts/${ACCOUNT_LOCATION_NAME}/reviews`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    const reviewsData = await reviewsRes.json();
    
    if (!reviewsRes.ok) {
        return NextResponse.json({ error: "Failed to fetch reviews", details: reviewsData }, { status: 500 });
    }

    // Format them for the frontend component
    const reviews = (reviewsData.reviews || []).map((review) => ({
      id: review.reviewId,
      author: review.reviewer.displayName,
      date: review.createTime, // you may want to parse this into "3 weeks ago", "1 year ago" etc.
      rating: review.starRating === 'FIVE' ? 5 : (review.starRating === 'FOUR' ? 4 : 3), // Maps Google's enum to a number
      text: review.comment || "",
      platform: "Google Review"
    }));

    return NextResponse.json({ reviews });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
