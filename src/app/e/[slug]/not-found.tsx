"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarX, Home, ArrowLeft } from 'lucide-react';

export default function EventNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col items-center justify-center p-6 text-center font-sans selection:bg-blue-600 selection:text-white">

      {/* Top Brand Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-2"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-blue-600/20">
          O
        </div>
        <span className="font-extrabold text-2xl tracking-tight text-black">
          Owolink
        </span>
      </motion.div>

      {/* Main 404 Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-md w-full p-8 sm:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] space-y-6 relative overflow-hidden"
      >
        {/* Decorative Top Accent Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-blue-600 rounded-b-full"></div>

        {/* Icon Container */}
        <div className="h-20 w-20 bg-blue-50 border border-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
          <CalendarX className="h-10 w-10" />
        </div>

        {/* Text Area */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
            Event Not Found
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            The celebration link you opened might be invalid, expired, or removed by the organizer on <strong className="text-black">owolink.com</strong>.
          </p>
        </div>

        {/* CTA Actions */}
        <div className="pt-2 space-y-3">
          <Link
            href="/"
            className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/25"
          >
            <Home className="h-4 w-4" />
            <span>Return to Owolink Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full py-3.5 px-6 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-sm flex items-center justify-center gap-2 transition-all border border-gray-200/80"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>

      {/* Footer Support Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-xs text-gray-400"
      >
        Need assistance? Reach out to <a href="mailto:support@owolink.com" className="text-blue-600 hover:underline font-semibold">support@owolink.com</a>
      </motion.p>
    </div>
  );
}