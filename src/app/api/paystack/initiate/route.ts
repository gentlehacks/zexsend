import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, amount } = await req.json()

    if (!name || !email || !amount) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: Number(amount) * 100, // Paystack uses kobo
        metadata: { name },
      }),
    })

    const data = await response.json()

    if (!response.ok || !data?.data?.authorization_url) {
      return NextResponse.json(
        { error: data?.message || "Failed to initialize transaction" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      authorization_url: data.data.authorization_url,
      reference: data.data.reference,
    })
  } catch (err) {
      console.log(err)
    return NextResponse.json(
      { error: "Something went wrong while initiating payment" },
      { status: 500 }
    )
  }
}
