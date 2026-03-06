/**
 * GET /api/reviews
 * Fetches reviews live from Google Places API. No fallback data.
 *
 * Env vars:
 * - GOOGLE_PLACES_API_KEY: Google Cloud, Places API (New) enabled
 * - GOOGLE_PLACE_ID: Either your business Place ID (ChIJ...), or a Google Maps URL
 *   (if URL, we resolve it via Text Search using the business name below)
 */
import { NextResponse } from "next/server";

const BUSINESS_SEARCH_QUERY = "K&M Truck Trailer Repair 1278 State Rd Ridgeway SC";

export interface ReviewItem {
  author: string;
  rating: number;
  date: string;
  text: string;
  source?: string;
}

function mapGoogleReview(r: {
  rating?: number;
  text?: { text?: string };
  authorAttribution?: { displayName?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
}): ReviewItem {
  const text = typeof r.text === "object" && r.text?.text ? r.text.text : "";
  const author = r.authorAttribution?.displayName ?? "Google User";
  const date = r.relativePublishTimeDescription ?? formatPublishTime(r.publishTime) ?? "";
  const rating = typeof r.rating === "number" ? Math.round(r.rating) : 5;
  return { author, rating, date, text, source: "Google" };
}

function formatPublishTime(iso?: string): string {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  } catch {
    return "";
  }
}

async function getPlaceIdFromSearch(apiKey: string): Promise<string | null> {
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({ textQuery: BUSINESS_SEARCH_QUERY }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { places?: Array<{ id?: string }> };
  const id = data.places?.[0]?.id;
  return id ?? null;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const rawPlaceId = process.env.GOOGLE_PLACE_ID?.trim();

  if (!apiKey) {
    return NextResponse.json({ reviews: [], source: "none" });
  }

  let placeId: string | null = null;
  if (rawPlaceId && !rawPlaceId.startsWith("http")) {
    placeId = rawPlaceId;
  } else {
    placeId = await getPlaceIdFromSearch(apiKey);
  }

  if (!placeId) {
    return NextResponse.json({ reviews: [], source: "none" });
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "id,reviews",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn("Google Places API error:", res.status, await res.text());
      return NextResponse.json({ reviews: [], source: "none" });
    }

    const data = (await res.json()) as {
      reviews?: Array<{
        rating?: number;
        text?: { text?: string };
        authorAttribution?: { displayName?: string };
        relativePublishTimeDescription?: string;
        publishTime?: string;
      }>;
    };

    const rawReviews = data.reviews ?? [];
    const reviews: ReviewItem[] = rawReviews.map(mapGoogleReview).filter((r) => r.text.length > 0);

    return NextResponse.json({ reviews, source: "google" });
  } catch (e) {
    console.warn("Failed to fetch Google reviews:", e);
    return NextResponse.json({ reviews: [], source: "none" });
  }
}
