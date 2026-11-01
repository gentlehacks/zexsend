'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Loader2, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import { createContribution } from '@/lib/api/events';

interface ContributionFormProps {
  slug: string;
  isEnded?: boolean;
  eventType?: string;
  hostName?: string;
}

const PRESET_AMOUNTS = [1000, 2000, 5000, 10000];

export default function ContributionForm({
  slug,
  isEnded = false,
  eventType,
  hostName,
}: ContributionFormProps) {
  const [amount, setAmount] = useState<string>('5000');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isGeneratingWish, setIsGeneratingWish] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || '';

  const handlePresetClick = (val: number) => {
    setAmount(val.toString());
    setErrorMessage('');
  };

  const handleGenerateWish = async () => {
    try {
      setIsGeneratingWish(true);
      const res = await fetch(`${backendUrl}/api/ai/generate-wish`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType,
          hostName,
        }),
      });

      const data = await res.json();
      if (data.success && data.wish) {
        setMessage(data.wish.slice(0, 200)); // Keeps within 200 max length limit
      }
    } catch (error) {
      console.error('Failed to generate AI wish:', error);
    } finally {
      setIsGeneratingWish(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const numericAmount = parseFloat(amount.replace(/,/g, ''));

    if (isNaN(numericAmount) || numericAmount < 100) {
      setErrorMessage('Minimum contribution amount is ₦100');
      return;
    }

    try {
      setLoading(true);
      const res = await createContribution(slug, {
        amount: numericAmount,
        guest_name: guestName.trim() || undefined,
        guest_phone: guestPhone.trim() || undefined,
        message: message.trim() || undefined,
      });

      if (res.authorization_url) {
        window.location.href = res.authorization_url;
      } else {
        throw new Error('Payment gateway link was not returned.');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  if (isEnded) {
    return (
      <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 text-center shadow-xl">
        <Heart className="h-12 w-12 text-gray-400 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-black mb-2">This Event Has Ended</h3>
        <p className="text-gray-600 text-sm">
          Contributions for this event are currently closed. Thank you to everyone who contributed!
        </p>
      </div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] space-y-6"
    >
      <div className="flex items-center justify-between border-b border-gray-100 pb-5">
        <h2 className="text-2xl font-bold text-black flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Heart className="h-5 w-5 fill-blue-600" />
          </div>
          Send Contribution
        </h2>
        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-emerald-100">
          <ShieldCheck className="h-4 w-4" />
          Secured by Paystack
        </span>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
          {errorMessage}
        </div>
      )}

      {/* Preset Amounts */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
          Quick Select Amount
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PRESET_AMOUNTS.map((val) => {
            const isSelected = amount === val.toString();
            return (
              <button
                type="button"
                key={val}
                onClick={() => handlePresetClick(val)}
                className={`py-3 px-3 rounded-2xl text-sm font-bold transition-all border ${isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/25 scale-105'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                  }`}
              >
                ₦{val.toLocaleString()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Amount */}
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          Or Enter Custom Amount (₦) *
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-extrabold text-blue-600">
            ₦
          </span>
          <input
            type="number"
            min="100"
            required
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setErrorMessage('');
            }}
            placeholder="5,000"
            className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-black text-lg font-bold focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Guest Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Your Name (Optional)
          </label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="e.g. Segun Adebayo"
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-black text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-gray-400"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            value={guestPhone}
            onChange={(e) => setGuestPhone(e.target.value)}
            placeholder="08012345678"
            className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-black text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Well Wishes Message with AI Button inside Bottom-Right */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
            Well-Wishes Message (Optional)
          </label>
          <span className="text-xs font-semibold text-gray-400">{message.length}/200</span>
        </div>

        <div className="relative">
          <textarea
            maxLength={200}
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Congratulations! Wishing you joy and happiness..."
            className="w-full px-4 py-3.5 pb-10 bg-gray-50 border border-gray-200 rounded-2xl text-black text-sm font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 transition-all placeholder:text-gray-400 resize-none"
          />

          {/* AI Generator Button in Bottom-Right */}
          <button
            type="button"
            onClick={handleGenerateWish}
            disabled={isGeneratingWish}
            className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-bold border border-blue-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingWish ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Writing...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>AI Wish</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-base transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Redirecting to Paystack...</span>
          </>
        ) : (
          <>
            <Lock className="h-4 w-4" />
            <span>Contribute ₦{amount ? parseFloat(amount || '0').toLocaleString() : '0'}</span>
          </>
        )}
      </motion.button>
    </motion.form>
  );
}