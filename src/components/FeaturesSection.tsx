"use client"
import { motion } from "framer-motion"
import {  Smartphone, Wallet, Zap, Shield } from "lucide-react";


const FeaturesSection = () => {
  return (
    <div
      id="features"
      className="mt-[10rem] w-full overflow-x-hidden text-gray-800">
      <div className="flex flex-col items-center justify-center px-6 md:px-12">
        <motion.h1
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }} // Only check bottom 25%
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-5xl text-center leading-[1.2] font-semibold px-6 md:px-22 ">
          Why Guess When You Can Gift with Purpose?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }} // Only check bottom 25%
          transition={{ duration: 0.5, delay: 0.4 }}
        className="px-8 md:px-[20%] text-center text-gray-600 text-md md:text-lg mt-4 mb-[5rem]">
          Sending plain cash is a guess. Will it be used for the bill you wanted to help with? ZexSend turns that guess into a thoughtful suggestion, giving your support clear intention while respecting their real-time needs.
        </motion.p>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }} // Only check bottom 25%
          transition={{ duration: 1, delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-15 pb-6 overflow-y-hidden">
          {[
            {
              title: "Purposeful Gifting",
              desc: "Choose a purpose for your gift, like 'Help with Bills' or 'Support My Hustle.' Your loved one can use it as intended or get it as cash.",
              icon: Wallet
            },
            {
              title: "Instant Support",
              desc: "Send airtime or data instantly to your loved ones, providing immediate support when they need it most.",
              icon: Zap
            },
            {
              title: "Secure Transactions",
              desc: "All your transactions are encrypted and secure, ensuring your financial data is protected.",
              icon: Shield
            },
            {
              title: "User-Friendly Interface",
              desc: "Our app is designed to be intuitive and easy to use, making gifting a breeze for everyone.",
              icon: Smartphone
            },
          ].map((f, i) => (
            <div key={i}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="p-6 text-center">
                <f.icon className="w-12 h-12 mx-auto text-blue-600 mb-6" />
                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-gray-600 text-lg">{f.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default FeaturesSection