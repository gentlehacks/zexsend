"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy } from 'lucide-react';
import { Event } from '@/types/event';

interface EventStatsProps {
  event: Event;
}

export default function EventStats({ event }: EventStatsProps) {
  const raisedAmount = Number(event.total_raised || 0);
  const formattedAmount = raisedAmount.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
      {/* Total Raised Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Funds Raised</span>
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Trophy className="h-5 w-5" />
          </div>
        </div>
        <p
          suppressHydrationWarning
          className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight"
        >
          ₦{formattedAmount}
        </p>
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-medium text-blue-600">
          <span>Secure Paystack Pool</span>
        </div>
      </motion.div>

      {/* Contributors Count Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Supporters</span>
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Users className="h-5 w-5" />
          </div>
        </div>
        <p
          suppressHydrationWarning
          className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight"
        >
          {event.contributor_count || 0}
        </p>
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-medium text-blue-600">
          <span>Active Contributors</span>
        </div>
      </motion.div>
    </div>
  );
}