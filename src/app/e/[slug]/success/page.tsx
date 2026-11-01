'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';
import { CheckCircle2, Share2, Sparkles, ArrowRight, Loader2 } from 'lucide-react';

export default function ContributionSuccessPage() {
  // 1. Get slug directly from route params via hook (works reliably in Next.js 15)
  const params = useParams();
  const slug = params?.slug as string;

  const searchParams = useSearchParams();
  const reference = searchParams.get('reference') || searchParams.get('trxref');
  const fallbackAmount = searchParams.get('amount');

  const [amount, setAmount] = useState<string | null>(fallbackAmount);
  const [isVerifying, setIsVerifying] = useState<boolean>(Boolean(reference));

  // 2. Automatically verify transaction with backend on mount
  useEffect(() => {
    console.log("👉 Success Page Loaded! Reference:", reference);

    if (!reference) {
      console.log("❌ No reference found in query params.");
      setIsVerifying(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
        const targetUrl = `${backendUrl}/api/contributions/verify/${reference}`;

        console.log("🚀 Triggering backend verification request to:", targetUrl);

        const res = await fetch(targetUrl);
        const data = await res.json();

        console.log("📥 Backend response received:", data);

        if (data.success && data.contribution?.amount) {
          setAmount(String(data.contribution.amount));
        }
      } catch (err) {
        console.error('❌ Verification fetch failed:', err);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [reference]);

  const handleShare = async () => {
    if (!slug) return;
    const url = `${window.location.origin}/e/${slug}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'I just contributed on GoSend!',
          text: 'Check out this event and support the host:',
          url,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Event link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-blue-500/10 pointer-events-none">
          <Sparkles className="h-32 w-32" />
        </div>

        <div className="h-20 w-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-white">Thank You!</h1>
          <p className="text-slate-400 text-sm">
            Your contribution has been sent successfully to the host.
          </p>
        </div>

        {isVerifying ? (
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Loader2 className="h-4 w-4 animate-spin text-emerald-400" />
            <span>Verifying contribution...</span>
          </div>
        ) : amount ? (
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
              Amount Sent
            </span>
            <span className="text-3xl font-black text-emerald-400">
              ₦{Number(amount).toLocaleString()}
            </span>
            {reference && (
              <span className="block text-[10px] text-slate-500 mt-2 font-mono">
                Ref: {reference}
              </span>
            )}
          </div>
        ) : null}

        <div className="space-y-3 pt-2">
          <button
            onClick={handleShare}
            className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all"
          >
            <Share2 className="h-4 w-4 text-blue-400" />
            Share Event with Friends
          </button>

          <Link
            href={slug ? `/e/${slug}` : '/'}
            className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
          >
            <span>Back to Event</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}