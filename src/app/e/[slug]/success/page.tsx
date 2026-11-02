'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';
import { CheckCircle2, Share2, Sparkles, ArrowRight, Loader2, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function ContributionSuccessPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const searchParams = useSearchParams();
  const reference = searchParams.get('reference') || searchParams.get('trxref');
  const fallbackAmount = searchParams.get('amount');

  const [amount, setAmount] = useState<string | null>(fallbackAmount);
  const [isVerifying, setIsVerifying] = useState<boolean>(Boolean(reference));
  const [copied, setCopied] = useState<boolean>(false);

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
          title: 'I just supported this event on Owolink!',
          text: 'Check out this event and celebrate with the host:',
          url,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden selection:bg-blue-600 selection:text-white">

      {/* Background Ambient Glow Effects matching your landing page */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Card Container */}
      <div className="max-w-lg w-full p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-black/60 space-y-8 relative overflow-hidden transition-all duration-500 animate-in fade-in zoom-in-95">

        {/* Decorative Sparkle Accent */}
        <div className="absolute top-0 right-0 p-8 text-blue-500/10 pointer-events-none">
          <Sparkles className="h-40 w-40" />
        </div>

        {/* Animated Success Icon Header */}
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-75" />
          <div className="relative h-24 w-24 bg-gradient-to-b from-blue-500/20 to-blue-600/5 border border-blue-500/30 text-blue-400 rounded-full flex items-center justify-center shadow-inner">
            <CheckCircle2 className="h-12 w-12 drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Verified Secure Payment</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white">
            Thank You So Much!
          </h1>
          <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
            Your generous contribution has been securely processed and delivered to the host.
          </p>
        </div>

        {/* Amount Card / Verification State */}
        {isVerifying ? (
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-center gap-3 text-slate-300 text-sm shadow-inner">
            <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
            <span className="font-medium">Confirming transaction with bank...</span>
          </div>
        ) : amount ? (
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-center space-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent opacity-50" />
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest block">
              Contribution Amount
            </span>
            <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              ₦{Number(amount).toLocaleString()}
            </div>
            {reference && (
              <div className="pt-2 flex items-center justify-center gap-2">
                <span className="text-[11px] text-slate-500 font-mono bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                  Ref: {reference}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <HeartHandshake className="h-5 w-5 text-blue-400" />
            <span>Support registered successfully</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button
            onClick={handleShare}
            className="w-full py-4 px-5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700/80 flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg active:scale-[0.98]"
          >
            <Share2 className="h-4 w-4 text-blue-400" />
            <span>{copied ? 'Link Copied to Clipboard!' : 'Share Event with Friends'}</span>
          </button>

          <Link
            href={slug ? `/e/${slug}` : '/'}
            className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-blue-600/30 transition-all duration-200 group active:scale-[0.98]"
          >
            <span>Return to Event Page</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Footer Branding */}
        <div className="text-center pt-2">
          <p className="text-xs text-slate-500 font-medium">
            Powered by <span className="text-slate-400 font-bold">Owolink</span> • Zero-Fee Crowdfunding
          </p>
        </div>

      </div>
    </main>
  );
}