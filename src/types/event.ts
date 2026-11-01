export interface Event {
  id: string;
  slug: string;
  event_name: string;
  event_type: string;
  event_date: string;
  event_message: string | null;
  cover_image_url: string | null;
  host_name: string;
  host_id: string;
  status: "active" | "ended" | "archived";
  total_raised: number;
  contributor_count: number;
  created_at: string;
}

export interface Contribution {
  id: string;
  event_id: string;
  guest_name: string | null;
  guest_phone: string | null;
  amount: number;
  message: string | null;
  status: "pending" | "success" | "failed";
  created_at: string;
}

export interface CreateContributionPayload {
  amount: number;
  guest_name?: string;
  guest_phone?: string;
  message?: string;
}

export interface ContributionResponse {
  success: boolean;
  authorization_url: string;
  reference: string;
  message?: string;
}
