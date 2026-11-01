import {
  Event,
  CreateContributionPayload,
  ContributionResponse,
} from "@/types/event";

// Strip any accidental trailing slash from the environment variable
const BASE_URL = (
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"
).replace(/\/$/, "");

export async function getEventBySlug(slug: string): Promise<Event | null> {
  try {
    const url = `${BASE_URL}/api/events/${encodeURIComponent(slug)}`;

    const res = await fetch(url, {
      cache: "no-store", // Always fetch fresh data while testing
    });

    if (res.status === 404) {
      console.warn(
        `[getEventBySlug] Event with slug "${slug}" returned 404 from backend.`,
      );
      return null;
    }

    if (!res.ok) {
      const errorText = await res.text();
      console.error(
        `[getEventBySlug] Backend error (${res.status}):`,
        errorText,
      );
      throw new Error(`Failed to fetch event data (${res.status})`);
    }

    const data = await res.json();

    // Ensure we unwrap data.event correctly
    return data.event || data;
  } catch (error) {
    console.error("Error in getEventBySlug:", error);
    throw error;
  }
}

export async function createContribution(
  slug: string,
  payload: CreateContributionPayload,
): Promise<ContributionResponse> {
  const url = `${BASE_URL}/api/events/${encodeURIComponent(slug)}/contribute`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(
      data.message || data.error || "Failed to initialize payment",
    );
  }

  return data;
}
