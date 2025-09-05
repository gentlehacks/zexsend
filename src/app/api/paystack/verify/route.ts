import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase-client"
import { sendBrevoEmail } from "@/utils/brevo";

export async function POST(req: Request) {
  try {
    const { reference } = await req.json()

    if (!reference) {
      return NextResponse.json({ error: "No reference provided" }, { status: 400 })
    }

    // ✅ Verify payment with Paystack
    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    })
    const verifyData = await verifyRes.json()

    if (verifyData.status && verifyData.data.status === "success") {
      const { amount, customer, metadata } = verifyData.data

      // ✅ Save record in Supabase
      const { error } = await supabase.from("donations").insert([
        {
          name: metadata?.name || "Anonymous",
          email: customer.email,
          amount: amount / 100, // Paystack amount is in kobo
          reference,
          status: "success",
        },
      ])

      if (error) {
        console.error("❌ Supabase insert failed:", error)
      }

      // ✅ Send thank-you email  
      await sendBrevoEmail({
        to: customer.email,
        templateId: 4,
        params: { name: "Unknown", amount}
      });                              

      return NextResponse.json({ status: "success", data: verifyData.data })
    }

    // ❌ Failed case
    await supabase.from("donations").insert([
      {
        name: "Unknown",
        email: "unknown",
        amount: 0,
        reference,
        status: "failed",
      },
    ])

    return NextResponse.json({ status: "failed", data: verifyData.data }, { status: 400 })
  } catch (err) {
    console.error("Verification error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
