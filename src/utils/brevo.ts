
type SendEmailOptions = {
  to: string;
  templateId: number;
  params?: Record<string, string | number>;
};

export async function sendBrevoEmail({
  to,
  templateId,
  params,
}: SendEmailOptions) {
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "PexelXus", email: "hello@pexelxus.com" }, 
        to: [{ email: to }],
        templateId,
        params, 
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("❌ Email failed:", data);
      throw new Error(data.message || "Failed to send email");
    }

    console.log("✅ Email sent:", data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Standard JS/TS error
      console.error("❌ General error:", error.message);
    } else {
      // Anything else (Brevo SDK sometimes throws objects)
      console.error("❌ Unknown error:", error);
    }
    throw error;
  }
}
