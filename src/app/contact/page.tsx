"use client"

import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaHeadset, FaHandshake, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Sparkles, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactOptions = [
    {
      icon: FaEnvelope,
      title: "General Inquiries",
      email: "hello@owolink.com",
      description: "Got questions about event hosting or press inquiries? Drop us a line anytime.",
      color: "text-blue-600",
      badge: "Quick Response"
    },
    {
      icon: FaHeadset,
      title: "Customer Support",
      email: "support@owolink.com",
      description: "Need help with a contribution link, wallet payout, or account issue? Our team is ready.",
      color: "text-blue-600",
      badge: "24/7 Assistance"
    },
    {
      icon: FaHandshake,
      title: "Partnerships & Business",
      email: "business@owolink.com",
      description: "Interested in corporate collaborations, API integrations, or vendor partnerships? Let's talk.",
      color: "text-blue-600",
      badge: "Collaborate"
    }
  ];

  const faqs = [
    {
      question: "What is Owolink?",
      answer: "Owolink (owolink.com) is a platform that empowers event hosts to create custom celebration pages, collect contributions securely via Paystack, and manage everyday mobile utilities from a single wallet."
    },
    {
      question: "Are payments and contributions secure?",
      answer: "Yes. All transactions are processed through Paystack with bank-grade encryption, ensuring your event funds are 100% safe and accounted for."
    },
    {
      question: "How do I withdraw my event contributions?",
      answer: "Funds collected on your event page settle instantly into your Owolink wallet, from where you can withdraw directly to any Nigerian bank account in seconds."
    }
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      label: "Instagram",
      handle: "@owolinkng",
      url: "https://instagram.com/owolinkng"
    },
    {
      icon: FaTwitter,
      label: "Twitter / X",
      handle: "@owolinkng",
      url: "https://twitter.com/owolinkng"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      handle: "Owolink Technologies",
      url: "https://linkedin.com/company/owolink"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-black font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-b from-blue-50/70 via-white to-gray-50 border-b border-gray-100 overflow-hidden">

        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full flex items-center justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                Get In Touch
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tight mb-8 leading-[1.1]">
            We&apos;d Love to Hear <br />
            <span className="text-blue-600">From You.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Whether you have a question about your event link, need technical assistance, or want to explore partnerships — our team is here for you.
          </p>
        </motion.div>
      </section>

      {/* 2. Contact Cards Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Reach Out Anytime
            </h2>
            <p className="text-gray-600 text-base">
              Choose the right channel below and we&apos;ll get back to you promptly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <IconComponent className="text-2xl" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full border border-gray-100">
                        {option.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-black mb-2">
                      {option.title}
                    </h3>

                    <a
                      href={`mailto:${option.email}`}
                      className="text-blue-600 hover:text-blue-700 font-extrabold text-base mb-3 inline-flex items-center gap-1.5 transition-colors"
                    >
                      {option.email}
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {option.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Social Links Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-gray-100/70 border-y border-gray-200/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                Community &amp; Socials
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black">
                Join the Conversation Online
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group w-full sm:w-auto min-w-[220px]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <IconComponent className="text-2xl" />
                    </div>
                    <div className="text-left">
                      <p className="font-extrabold text-black text-sm">{social.label}</p>
                      <p className="text-xs text-gray-500 font-medium">{social.handle}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. FAQ Preview Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="text-center space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
                Quick Answers
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-base">
                Before reaching out, you might find the answer you need right here:
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] space-y-2"
                >
                  <h3 className="text-lg font-bold text-black flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 text-xs flex items-center justify-center font-extrabold">Q</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-extrabold text-base transition-colors"
              >
                <span>Explore Full FAQ Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Closing Warmth Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-24 bg-gradient-to-b from-blue-50/50 to-white text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Thank You for Being Part of Owolink.
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Owolink is built for event organizers across Nigeria who believe celebrations deserve seamless technology, absolute security, and elegant design.
            </p>
            <p className="text-xl font-extrabold text-black pt-2">
              — The Owolink Team 💙
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;