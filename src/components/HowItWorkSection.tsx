"use client"
import { motion } from "framer-motion"
import { CalendarPlus, Share2, WalletCards } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Create Your Custom Event Link",
    desc: "Set up your celebration page in seconds for weddings, birthdays, or fundraisers. Define your target goal and personalize your event branding.",
    icon: CalendarPlus,
  },
  {
    step: "02",
    title: "Share & Collect Contributions",
    desc: "Share your unique owolink.com link with friends, family, and guests via WhatsApp or social media. They can contribute securely from anywhere instantly.",
    icon: Share2,
  },
  {
    step: "03",
    title: "Pool Funds & Top Up Utilities",
    desc: "Withdraw pooled funds directly to your bank account or use your wallet balance to buy cheap data, top up airtime, and pay bills on the go.",
    icon: WalletCards,
  },
]

const HowItWorkSection = () => {
  return (
    <section
      id="how-it-works"
      className="mt-[10rem] w-full bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-200 to-transparent hidden lg:block" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mb-20"
        >
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            Simple & Transparent Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 leading-tight">
            How Owolink Works in <span className="text-blue-600">Three Easy Steps</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            From launching your celebration page to managing your wallet utilities, getting support has never been this seamless.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 w-full relative">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-[2.5p_rem] p-8 md:p-10 flex flex-col justify-between relative shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)] hover:border-blue-100 transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Icon & Step Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <span className="text-4xl font-extrabold text-gray-200 group-hover:text-blue-100 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black tracking-tight mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-8 pt-6 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-blue-600 uppercase tracking-wider">
                <span>Step {item.step} of 03</span>
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorkSection