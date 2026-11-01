"use client"
import { motion } from "framer-motion";
import { Users, ShieldCheck, Zap, Globe2, HeartHandshake, Sparkles } from "lucide-react";

const whyUsItems = [
  {
    title: "Built for Nigerian Celebrations",
    desc: "Designed specifically for local events like weddings, birthdays, and community fundraisers where family and friends want to support easily.",
    icon: Sparkles,
  },
  {
    title: "Lightning-Fast Utility Wallet",
    desc: "Beyond collecting funds, instantly convert your balance into cheap data, airtime top-ups, and bill payments across all Nigerian networks.",
    icon: Zap,
  },
  {
    title: "Trusted Security & Reliability",
    desc: "Bank-grade encryption, secure payment gateways, and automated instant refund protocols ensure every contribution is safe and transparent.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Event Links",
    desc: "Create personalized owolink.com links that reflect your brand or celebration, making it simple to share via WhatsApp, Instagram, or SMS.",
    icon: Globe2,
  },
  {
    title: "Real-Time Tracking",
    desc: "Monitor every contribution as it comes in with a comprehensive dashboard that updates instantly so you never miss a supporter.",
    icon: Users,
  },
  {
    title: "Community & Support Focused",
    desc: "Join thousands of organizers and contributors who trust Owolink to simplify how milestones are funded and celebrated.",
    icon: HeartHandshake,
  },
];

const WhyItWork = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-[10rem] py-12 px-6 md:px-12 bg-white text-black">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-16"
      >
        <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
          Why Choose Owolink
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 leading-tight">
          Built for the Way <span className="text-blue-600">Nigerians Celebrate</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          See why event organizers and communities trust Owolink to handle their contributions and everyday mobile utilities.
        </p>
      </motion.div>

      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyUsItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-100 transition-all duration-300 group"
          >
            <div>
              {/* Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Subtle bottom tag */}
            <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-blue-600 uppercase tracking-wider">
              <span>Owolink Advantage</span>
              <span>&bull;</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default WhyItWork;