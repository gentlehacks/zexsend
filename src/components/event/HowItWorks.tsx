"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: DollarSign,
      title: '1. Enter Amount',
      description: 'Choose or enter the custom amount you wish to contribute to the celebration host.',
    },
    {
      icon: ShieldCheck,
      title: '2. Pay Securely',
      description: 'Complete your transfer safely using Card, USSD, or Bank Transfer via Paystack.',
    },
    {
      icon: HeartHandshake,
      title: '3. Host Receives',
      description: 'Your contribution and heartfelt well-wishes go straight to the host in real time.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="p-8 sm:p-10 rounded-[2.5rem] bg-gray-50/80 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
    >
      <div className="text-center mb-8">
        <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
          Transparent Process
        </span>
        <h3 className="text-xl font-extrabold text-black mt-3">
          How Owolink Contributions Work
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 shadow-inner">
                <Icon className="h-7 w-7" />
              </div>
              <h4 className="text-base font-bold text-black mb-2">{step.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}