"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import {
  FaShieldAlt,
  FaHeart,
  FaLayerGroup,
  FaBolt,
  FaCalendarAlt,
  FaWallet,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import { Sparkles, Users, Award, Lock } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Bank-Grade Trust",
      description: "We handle every single kobo with strict security. Powered by Paystack's PCI-DSS infrastructure, safety is built directly into our core.",
      icon: FaShieldAlt,
      badge: "Security First"
    },
    {
      title: "Empathy-Driven UX",
      description: "Designed specifically for modern Nigerian events. We eliminate awkward account number sharing and streamline contribution collection.",
      icon: FaHeart,
      badge: "Built for People"
    },
    {
      title: "Instant Simplicity",
      description: "No tedious onboarding or confusing fees. Create a custom event link in seconds and share it straight to WhatsApp or Instagram.",
      icon: FaBolt,
      badge: "Zero Friction"
    },
    {
      title: "All-in-One Utility",
      description: "Funds land instantly in your Owolink wallet, ready to transfer to any bank or use directly for airtime, data, and utility bills.",
      icon: FaLayerGroup,
      badge: "Total Freedom"
    }
  ];

  const stats = [
    { number: "100%", label: "Secure Payments", subtext: "Processed via Paystack" },
    { number: "Instant", label: "Wallet Settlement", subtext: "Real-time fund tracking" },
    { number: "0 Failures", label: "Reliability Focus", subtext: "Automated webhook sync" },
    { number: "24/7", label: "Utility Access", subtext: "Airtime, Data & Power" }
  ];

  const features = [
    {
      icon: FaCalendarAlt,
      title: "Custom Event Links",
      description: "Generate a beautiful landing page (owolink.com/e/your-event) tailored with your celebration notes, dates, and cover images."
    },
    {
      icon: Users,
      title: "Real-Time Tracking",
      description: "Get push notifications instantly whenever a guest contributes, complete with well-wishes and donor names."
    },
    {
      icon: FaWallet,
      title: "Integrated Utility Wallet",
      description: "Withdraw directly to any Nigerian bank account or pay everyday bills directly from your event earnings."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-black font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-b from-blue-50/70 via-white to-gray-50 border-b border-gray-100 overflow-hidden">

        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl relative z-10"
        >
          {/* Header Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full flex items-center justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                About Owolink
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tight mb-8 leading-[1.1]">
            Redefining How Nigeria <br className="hidden sm:inline" />
            <span className="text-blue-600">Celebrates &amp; Contributes.</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Owolink was built on a single premise: event hosting and crowd-funded support should be effortless, elegant, and instantly accessible.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/e/create"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-base shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Create Event Link</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#story"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-gray-100 text-gray-800 font-bold text-base border border-gray-200 transition-all flex items-center justify-center"
            >
              Read Our Story
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="w-full px-6 md:px-12 lg:px-24 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-center"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mb-1">
                {stat.number}
              </h3>
              <p className="text-sm font-bold text-blue-600 mb-1">{stat.label}</p>
              <p className="text-xs text-gray-400">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section id="story" className="w-full px-6 md:px-12 lg:px-24 py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                The Origin
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">
                It Started with a Common Challenge.
              </h2>

              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  In Nigeria, organizing weddings, birthdays, housewarmings, or community fundraisers has always involved pasting raw bank account numbers into chat groups or broadcasting PDFs.
                </p>
                <p>
                  Hosts spent countless hours manually tracking who sent what, while guests lacked a dedicated, beautiful space to send personalized well-wishes along with their gifts.
                </p>
                <p className="p-4 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-2xl font-semibold text-black">
                  We asked: What if every host could launch an aesthetic event page in seconds, collect funds securely via Paystack, and get real-time push alerts on their phone?
                </p>
                <p className="font-bold text-blue-600 text-xl">
                  That vision became Owolink (owolink.com).
                </p>
              </div>
            </motion.div>

            {/* Visual Decorative Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
                      O
                    </div>
                    <span className="font-bold text-lg">Owolink Link</span>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Live
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                    <p className="text-xs text-blue-200 uppercase font-semibold">Event Target</p>
                    <p className="text-2xl font-extrabold text-white">₦2,500,000</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                    <p className="text-xs text-blue-200 uppercase font-semibold">Total Raised</p>
                    <p className="text-2xl font-extrabold text-emerald-400">₦1,850,000</p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 italic text-center">
                  &quot;Connecting hosts and supporters with complete clarity.&quot;
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. The Ecosystem Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-gray-100/70 border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto space-y-16">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
              The Owolink Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">
              More Than Just a Contribution Link
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We engineered a complete event hosting and financial hub so you can raise, track, and utilize your funds seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-4 hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)] transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{feat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Our Core Values Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-28">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight">
              Built on Security, Speed &amp; Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        <IconComponent className="text-2xl" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full border border-gray-100">
                        {value.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-black mb-3">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Founder Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-28 bg-gray-100/80 border-t border-gray-200/80">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 rounded-[3rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)]"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">

              {/* Founder Image Container */}
              <div className="flex-shrink-0 w-full md:w-5/12 flex flex-col items-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-88 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-900 to-black">
                  <Image
                    src="/founder.JPG"
                    alt="Salihu Adamu - Founder of Owolink"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-extrabold text-black">Salihu Adamu</h4>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Founder &amp; Software Engineer
                  </p>
                </div>
              </div>

              {/* Founder Narrative */}
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                  Leadership Note
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-black tracking-tight leading-tight">
                  Building Software That Solves Real Everyday Problems.
                </h3>

                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>
                    Hi, I&apos;m <strong className="text-black">Salihu Adamu</strong>. I created Owolink because I believe digital technology in Africa should eliminate real operational headaches—making life easier for organizers and supporters alike.
                  </p>
                  <p>
                    As a full-stack developer, I set out to build a platform that combines bank-grade transaction infrastructure with simple, beautiful social interfaces.
                  </p>
                  <p className="font-semibold text-blue-600 italic">
                    &quot;Owolink makes sure that every celebration link looks professional, functions smoothly, and settles instantly.&quot;
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4 text-xs font-bold text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-blue-600" /> Full-Stack Architecture
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-blue-600" /> Paystack Secured
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Bottom Call To Action */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
            Ready to Host Your Next Event?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Create your custom contribution link in less than 2 minutes and start receiving support seamlessly on owolink.com.
          </p>
          <div className="pt-4">
            <Link
              href="/e/create"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-base shadow-xl shadow-blue-600/25 transition-all"
            >
              <span>Get Started Now</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;