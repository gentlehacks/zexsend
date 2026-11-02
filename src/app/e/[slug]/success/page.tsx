'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';
import { CheckCircle2, Share2, Sparkles, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

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
    <div className="min-h-screen bg-gray-50 text-black flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white">

      {/* Back to Home / Logo Icon */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/"
          className="w-10 h-10 overflow-hidden rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors"
        >
          <Image
            src="/favicon.png"
            alt="Owolink Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto w-full px-4 sm:px-6 py-20 flex-1 flex items-center justify-center">
        <div className="w-full p-8 sm:p-10 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-blue-900/5 space-y-6 relative overflow-hidden transition-all duration-500">

          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 p-8 text-blue-50 pointer-events-none">
            <Sparkles className="h-32 w-32" />
          </div>

          {/* Success Icon Header */}
          <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-100 animate-ping opacity-50" />
            <div className="relative h-20 w-20 bg-blue-50 border border-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner">
              <CheckCircle2 className="h-10 w-10" />
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Verified Secure Payment</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-black">
              Thank You!
            </h1>
            <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
              Your contribution has been successfully sent to the host.
            </p>
          </div>

          {/* Amount Card / Verification State */}
          {isVerifying ? (
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center gap-2.5 text-gray-600 text-sm">
              <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
              <span className="font-medium">Verifying contribution...</span>
            </div>
          ) : amount ? (
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 text-center space-y-1 relative overflow-hidden">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
                Amount Sent
              </span>
              <span className="text-3xl font-black text-blue-600">
                ₦{Number(amount).toLocaleString()}
              </span>
              {reference && (
                <span className="block text-[10px] text-gray-400 mt-2 font-mono bg-white px-2 py-1 rounded border border-gray-200 inline-block">
                  Ref: {reference}
                </span>
              )}
            </div>
          ) : null}

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleShare}
              className="w-full py-3.5 px-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-black font-bold text-sm border border-gray-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <Share2 className="h-4 w-4 text-blue-600" />
              <span>{copied ? 'Link Copied to Clipboard!' : 'Share Event with Friends'}</span>
            </button>

            <Link
              href={slug ? `/e/${slug}` : '/'}
              className="w-full py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all group active:scale-[0.98]"
            >
              <span>Back to Event</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6 text-center text-xs text-gray-500 space-y-3">
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">
            O
          </div>
          <span className="font-bold text-black text-sm">Owolink (owolink.com)</span>
        </div>
        <p>© {new Date().getFullYear()} Owolink Technologies. All rights reserved. Secured by Paystack.</p>
      </footer>

    </div>
  );
}