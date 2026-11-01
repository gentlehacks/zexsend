"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What is Owolink?",
    answer: "Owolink (owolink.com) is a platform built for event organizers and communities. It allows you to create custom event pages, collect contributions seamlessly through Paystack, and manage everyday utilities like airtime and data from a single wallet.",
  },
  {
    id: 2,
    question: "How do event hosting and contribution links work?",
    answer: "You create a custom event link (e.g., for weddings, birthdays, or fundraisers) and share it with friends and family via WhatsApp or social media. Guests can contribute securely online without any friction.",
  },
  {
    id: 3,
    question: "Are contributions processed securely?",
    answer: "Yes! All payments and contributions are securely processed via Paystack, ensuring bank-grade encryption, PCI-DSS compliance, and total safety for both organizers and contributors.",
  },
  {
    id: 4,
    question: "Can I use my wallet balance to buy airtime and data?",
    answer: "Absolutely. Owolink includes a built-in utility wallet. You can use your wallet balance to purchase discounted data bundles and top up airtime across all major Nigerian networks instantly.",
  },
  {
    id: 5,
    question: "How do I withdraw funds collected from my event?",
    answer: "You can withdraw your pooled event contributions directly to your verified Nigerian bank account instantly or keep them in your wallet to fund everyday utility purchases.",
  },
  {
    id: 6,
    question: "How can I contact Owolink support?",
    answer: "If you need help or have any questions, you can reach out to our team by visiting our Contact page or emailing us directly at support@owolink.com.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item open

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center justify-center mt-[10rem] py-12 px-6 md:px-12 bg-white text-black"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-16"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" /> Got Questions?
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 leading-tight">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          Everything you need to know about hosting events, collecting contributions, and managing utilities with Owolink.
        </p>
      </motion.div>

      {/* FAQ Accordion Grid */}
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-blue-100 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left font-bold text-lg md:text-xl text-black focus:outline-none group"
              >
                <span className="group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-600 text-white" : ""}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-100/60 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Support CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 text-base">
          Still have questions?{" "}
          <Link href="/contact" className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1 ml-1">
            Contact our support team &rarr;
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default FaqSection;