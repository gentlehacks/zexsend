"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Sparkles } from 'lucide-react';
import { Event } from '@/types/event';

interface EventHeroProps {
  event: Event;
}

export default function EventHero({ event }: EventHeroProps) {
  const dateObj = new Date(event.event_date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
    >
      {/* Cover Image or Elegant Blue Gradient Header */}
      <div className="relative h-60 sm:h-80 w-full bg-gradient-to-r from-blue-900 via-blue-800 to-black">
        {event.cover_image_url ? (
          <img
            src={event.cover_image_url}
            alt={event.event_name}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.4),transparent)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Floating Category Badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-blue-600 shadow-lg border border-blue-100">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{event.event_type || 'Special Celebration'}</span>
          </span>
        </div>
      </div>

      {/* Event Details Content Box */}
      <div className="relative px-8 sm:px-12 pb-10 pt-6">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4 leading-tight">
          {event.event_name}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
            <User className="h-4 w-4 text-blue-600" />
            <span>
              Hosted by <strong className="text-black font-semibold">{event.host_name}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
            <Calendar className="h-4 w-4 text-blue-600" />
            <span suppressHydrationWarning className="font-semibold text-black">{formattedDate}</span>
          </div>
        </div>

        {event.event_message && (
          <div className="bg-blue-50/60 border border-blue-100/80 p-6 rounded-2xl relative">
            <span className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              Host Message
            </span>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
              &quot;{event.event_message}&quot;
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}