"use client"
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaEnvelope, FaHeadset, FaHandshake, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const contactOptions = [
    {
      icon: FaEnvelope,
      title: "Email",
      email: "hello@zexsend.com",
      description: "For general inquiries, feedback, or press.",
      color: "text-blue-600"
    },
    {
      icon: FaHeadset,
      title: "Support",
      email: "support@zexsend.com",
      description: "Need help with a gift or your wallet? We respond within 24 hours.",
      color: "text-green-600"
    },
    {
      icon: FaHandshake,
      title: "Partnerships",
      email: "business@zexsend.com",
      description: "Interested in integrating with us or becoming a partner? Let's talk.",
      color: "text-purple-600"
    }
  ];

  const faqs = [
    {
      question: "Is ZexSend a bank?",
      answer: "No. We are a technology platform that partners with licensed financial institutions (like Paga) to provide our services securely."
    },
    {
      question: "When will ZexSend launch?",
      answer: "We're in active development. Join our waitlist to get early access and be the first to send thoughtful gifts."
    },
    {
      question: "How do you make money?",
      answer: "We charge a small, transparent flat fee (starting from ₦50) on each gift sent. This keeps the lights on and the experience free for recipients."
    }
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      label: "Instagram",
      handle: "@zexsend",
      url: "https://instagram.com/zexsend"
    },
    {
      icon: FaTwitter,
      label: "Twitter/X",
      handle: "@zexsend",
      url: "https://twitter.com/zexsend"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      handle: "ZexSend",
      url: "https://linkedin.com/company/zexsend"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-blue-50 to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="w-full flex items-center justify-center">
            <div className="w-fit px-2 py-1 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <h2 className="text-md font-medium text-gray-800">Contact Us</h2>
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            We&apos;d Love to Hear From You.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Whether you have a question, want to partner with us, or just want to say &quot;this is exactly what Nigeria needs&quot; — we&apos;re all ears.
          </p>
        </motion.div>
      </section>

      {/* Contact Options Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Reach Out Anytime.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <IconComponent className={`${option.color} text-5xl mb-4`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <a
                    href={`mailto:${option.email}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold mb-3 inline-block"
                  >
                    {option.email}
                  </a>
                  <p className="text-gray-600 leading-relaxed">
                    {option.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Follow Us on Social
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors group"
                  >
                    <IconComponent className="text-3xl group-hover:scale-125 transition-transform" />
                    <div className="text-left">
                      <p className="font-semibold">{social.label}</p>
                      <p className="text-sm text-gray-600">{social.handle}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Got Questions? We&apos;ve Got Answers.
            </h2>
            <p className="text-gray-600 text-lg text-center mb-12">
              Before you reach out, you might find your answer here:
            </p>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "0px 0px -50px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Q: {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    A: {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                Link to full FAQ page →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Warmth Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Thank You for Being Part of Our Story.
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                ZexSend is built for Nigerians, by someone who believes that even the smallest act of support can be wrapped in dignity and love.
              </p>
              <p className="font-semibold text-blue-600">
                We can&apos;t wait to help you send your next thoughtful gift.
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                — The ZexSend Team 💙
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;