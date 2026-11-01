import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getEventBySlug } from '@/lib/api/events';
import EventHero from '@/components/event/EventHero';
import EventStats from '@/components/event/EventStats';
import ContributionForm from '@/components/event/ContributionForm';
import HowItWorks from '@/components/event/HowItWorks';
import EventNotFound from './not-found';
import Image from 'next/image';

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Event Not Found | Owolink',
    };
  }

  return {
    title: `Contribute to ${event.event_name} | Owolink`,
    description: `Send contributions and well wishes for ${event.event_name} hosted by ${event.host_name} on owolink.com.`,
    openGraph: {
      title: `Contribute to ${event.event_name} | Owolink`,
      description: `Hosted by ${event.host_name}. Support this celebration securely via Paystack.`,
      images: event.cover_image_url ? [event.cover_image_url] : [],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  let event = null;

  try {
    event = await getEventBySlug(slug);
  } catch (error) {
    return (
      <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-2xl mb-4">
          O
        </div>
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-gray-500 text-sm mb-6">Unable to load event details right now.</p>
        <Link
          href={`/e/${slug}`}
          className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors"
        >
          Try Again
        </Link>
      </div>
    );
  }

  if (!event) {
    return <EventNotFound />;
  }

  const isEnded = event.status === 'ended' || event.status === 'archived';

  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white">

      {/* Back to home icon */}
      <div className="absolute top-6 left-6 z-100 ">
        <Link
          href="/"
          className="w-10 h-10 overflow-hidden rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors"
        >
          <Image 
src="/favicon.png" alt="Owolink Logo" width={100} height={100} className="object-contain"

          />
        </Link>
      </div>

      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8 flex-1">
        <EventHero event={event} />
        <EventStats event={event} />
        <ContributionForm slug={slug} isEnded={isEnded} eventType={event.event_type}     // <-- Pass event type
          hostName={event.host_name} />
        <HowItWorks />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10 px-6 text-center text-xs text-gray-500 space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            O
          </div>
          <span className="font-bold text-black text-sm">Owolink (owolink.com)</span>
        </div>
        <p>© {new Date().getFullYear()} Owolink Technologies. All rights reserved. Secured by Paystack.</p>
        <div className="flex items-center justify-center gap-4 text-gray-600 font-medium">
          <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
          <span>•</span>
          <Link href="/" className="hover:text-blue-600 transition-colors">Create Event Link</Link>
        </div>
      </footer>
    </div>
  );
}