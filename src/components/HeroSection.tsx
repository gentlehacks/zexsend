"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

const HeroSection = () => {
  return (
    <div className="pt-12 relative flex flex-col items-center justify-center pb-0 px-4 sm:px-5">
      {/* Background Grid Accent */}
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#000000_0.08px,transparent_1px),linear-gradient(to_bottom,#000000_0.08px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_70%)]">
        </div>
      </div>

      <div className="w-[100%] md:w-[75%] flex flex-col items-center justify-center">
        {/* Badge / Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: '-20px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs sm:text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          Event Hosting & Smart Contribution Links
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: '50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-black text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.5rem] font-bold text-center tracking-tight leading-tight">
          Smart Event Hosting. <span className="text-blue-600">Effortless Contributions.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: '50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-md md:text-lg text-center md:px-12 text-gray-700 mt-4 max-w-2xl">
          Bring your community together with personalized payment links. Collect event funds securely, track every contribution, and power your mobile life with built-in utility services.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: '30px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-[2.5rem] w-full flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AppStoreButton theme="dark" />
          <PlayStoreButton theme="dark" />
        </motion.div>
      </div>

      {/* Mockup Preview */}
      <div className="w-full flex flex-col items-center justify-center mt-[3rem]">
        <motion.div className="relative w-[100%] flex items-center justify-center mt-[1rem]"
          initial={{ y: "80px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Image
            src="/mockup.svg" // Event page & contribution dashboard mockup preview
            alt="Owolink Event Hosting & Contribution Dashboard Mockup"
            width={360}
            height={340}
            priority={true}
            className="w-[85%] sm:w-[70%] md:w-[60%] max-w-[28rem] drop-shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection