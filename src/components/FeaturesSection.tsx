"use client"
import { motion } from "framer-motion"
import { Calendar, Link2, ShieldCheck, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Custom Event Hosting",
      desc: "Create dedicated celebration pages for weddings, birthdays, and community fundraisers in seconds. Customize your link and share it anywhere.",
      icon: Calendar
    },
    {
      title: "Seamless Contribution Links",
      desc: "Let guests and supporters contribute effortlessly through secure payment gateways. Pool funds together with real-time tracking and zero hassle.",
      icon: Link2
    },
    {
      title: "Instant Utility Wallet",
      desc: "Manage your funds easily. Top up airtime, purchase discounted data bundles across all major networks, and pay bills directly from your wallet balance.",
      icon: Zap
    },
    {
      title: "Bank-Grade Security",
      desc: "Every transaction is fully encrypted and protected with strict authentication standards, ensuring your funds and data remain completely safe.",
      icon: ShieldCheck
    },
  ];

  return (
    <div
      id="features"
      className="mt-[10rem] w-full text-gray-900 bg-white">
      <div className="flex flex-col items-center justify-center px-6 md:py-12 md:px-12  max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl text-center leading-[1.2] font-bold tracking-tight px-4">
          Everything You Need to Host and Fund <span className="text-blue-600">Your Events.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4 md:px-[15%] text-center text-gray-600 text-lg md:text-xl mt-4 mb-[5rem] max-w-6xl">
          Owolink combines powerful event collection links with lightning-fast utility management, giving you absolute control over your celebrations and everyday mobile needs.
        </motion.p>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full pb-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-inner">
                  <f.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-2xl mb-4 text-black tracking-tight">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {f.desc}
                </p>
              </div>

              {/* Subtle Decorative Accent Bottom Line */}
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-blue-600 font-medium text-sm">
                <span>Learn more about {f.title.toLowerCase()}</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default FeaturesSection