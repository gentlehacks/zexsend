"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";
import { RiUserCommunityLine } from "react-icons/ri";
import { LuSmartphoneCharging } from "react-icons/lu";
// import { BiDownload } from "react-icons/bi";
import { FaShieldAlt } from "react-icons/fa";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";
import { SiApple } from "react-icons/si";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

const HeroSection = () => {
  return (
    <div className="pt-12   relative flex flex-col  items-center justify-center pb-0 px-5">
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
        <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
        </div>
      </div>
      <div className="w-[90%] md:w-[70%] flex flex-col items-center justify-center ">
        <h1 className="text-gray-800 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3rem] font-semibold  text-center ">
          Don&apos;t Just Send Money. Send Thoughtful Support.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: '50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-md md:text-lg text-center px-5 md:px-12 text-gray-600  mt-4 ">
          With ZexSend, wrap your Naira in care. Choose a purpose for your gift and let your loved one decide to use it as you hoped or get it as cash. It&apos;s meaningful help that always fits.
        </motion.p>

        {/* CTA */}
        <div className="mt-[2rem] w-full flex items-center justify-center gap-5 md:mt-[4rem] lg:mt-[3rem]">
          <AppStoreButton theme="dark" />
          <PlayStoreButton theme="dark" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-[3rem]">
        {/* Mockups */}
        <motion.div className="relative w-[100%] flex items-center justify-center mt-[2rem] boder-gray-400"
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/mockup.svg"
            alt="ZexSend Mockup"
            width={360}
            height={340}
            priority={true}
            className="w-[80%] sm:w-[70%] md:w-[60%] max-w-[25rem]"
          />
        </motion.div>
      </div>




    </div>
  )
}

export default HeroSection