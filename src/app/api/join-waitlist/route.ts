import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase-client'
import { sendBrevoEmail } from "@/utils/brevo"

export async function POST(req: Request) {
  const { name, email } = await req.json()

  // 1️⃣ Check if email already exists
  const { data: existing, error: checkError } = await supabase
    .from('waitlist')
    .select('id')
    .eq('email', email)
    .maybeSingle()

  if (checkError) {
    console.error('Error checking email:', checkError)
    return NextResponse.json({ error: '⚠ Already exists email' }, { status: 500 })
  }

  if (existing) {
    return NextResponse.json({ message: '⚠ Already exists email!' }, { status: 200 })
  }

  const { error: insertError } = await supabase
    .from('waitlist')
    .insert({ name, email })

  if (insertError) {
    console.error('Error inserting:', insertError)
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }

  console.log("📧 Sending email to:", email);
  await sendBrevoEmail({
    to: email,
    templateId: 1,
    params: { name }, 
  });

  return NextResponse.json({ message: '🎉 Successfully joined the waitlist!' }, { status: 200 })
}
