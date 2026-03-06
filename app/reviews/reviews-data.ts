/**
 * Type only. Reviews are fetched live from Google via GET /api/reviews.
 * See .env.local: GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID (or Maps URL).
 */
export interface Review {
  author: string;
  rating: number;
  date: string;
  text: string;
  source?: string;
}
