"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { HiBadgeCheck } from "react-icons/hi";
import { RiUserCommunityLine } from "react-icons/ri";
import { LuSmartphoneCharging } from "react-icons/lu";
// import { BiDownload } from "react-icons/bi";
import { FaShieldAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-black lg:h-screen w-full flex flex-col items-center sm:flex-col md:flex-col lg:flex-row justify-center p-4 pt-[4rem] pb-15 lg:pb-0 lg:pt-0 bg-gradient-hero">
      <div className="w-[90%] flex flex-col items-center justify-center lg:pl-[5%]">
        <motion.div 
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.4, delay: 0}}
        className="flex items-center justify-center px-2 py-1 text-[13px] text-[10px] sm:text-[12px] md:text-sm lg:text-md rounded-full bg-blue-300 border-1 border-green-400 text-gray-800 mb-2">
          <HiBadgeCheck className="text-green-600 text-[1.2rem] xs:text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] font-medium mr-1" />
          Gift Airtime • Pay Bills • Flex with Friends.
        </motion.div>
        <h1 className="mt-3 text-gray-100 text-[1.8rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[2.2rem] font-semibold  text-center lg:text-left">
          The Smart Nigeria&apos;s Everyday 
          <span className="text-green-400"> Super App </span>
        </h1>
        <motion.p 
          initial={{opacity: 0, y: '50px'}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, type: 'spring', stiffness: 100, delay: 0.5}}
        className="text-md text-gray-300 sm:text-lg text-center lg:text-left mt-4 ">
          The first social app that makes airtime, data, and payments fun, rewarding, and 
          <span className="border-b-1 border-green-500"> stress-free.</span>
        </motion.p>

        {/* CTA */}
        <div className="mt-[3rem] w-full flex items-center justify-center md:mt-[4rem] lg:mt-[3rem]">
          <Link href="/download">
            <motion.button 
              whileHover={{y: "4px"}}
              whileTap={{y: "4px"}}
              transition={{duration: 0.2}}
            className="py-3 px-6 rounded-full bg-blue-700 hover:bg-blue-800 hover:shadow-xl text-gray-100 flex items-center text-[0.9rem] shadow-lg justify-center text-sm transition-all duration-100 cursor-pointer">
              {/* <BiDownload className="mr-1 text-xl" /> */}
              Join the Waitlist
            </motion.button>
          </Link>
        </div>
        <p className="mt-[5rem] text-gray-100 flex items-center">
          <FaShieldAlt className="text-xl mr-2" /> 
          Secured by Paystack
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center lg:mt-[-5rem]">
        {/* Mockups */}
        <motion.div className="relative w-[100%] flex items-center justify-center mt-[2rem] boder-gray-400"
          initial={{y: "200px", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 1, ease: 'easeOut', delay: 1}}
        >
          <Image 
            src="/phone-mockups.svg" 
            alt="Phone Mockups" 
            width={100} 
            height={100} 
            priority
            className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[80%] max-w-[40rem] max-h-[40rem]" 
          />
        </motion.div>
        <div className="w-full flex items-center justify-between px-[1.5rem] sm:px-[4rem] md:px-[7rem] lg:px-[3rem] ">
        <motion.div
          initial={{opacity: 0, scale: 0.7}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1, type: 'spring', stiffness: 200}}
          viewport={{ 
            margin: "0px 0px -12% 0px"
          }}
        className="px-2 py-1 bg-gray-800 text-gray-100 flex items-center justify-center rounded-xl"
        >
            <RiUserCommunityLine />
            <p className="ml-3">Connect</p>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.7}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1, type: 'spring', stiffness: 200, delay: 0.5}}
            viewport={{ 
              margin: "0px 0px -12% 0px" 
            }}
          className="px-2 py-1 bg-gray-800 text-gray-100 flex items-center justify-center rounded-xl"
          >
            <LuSmartphoneCharging />
            <p className="ml-3 text-">Recharge</p>
          </motion.div>
        </div>
      </div>
      

      

    </div>
  )
}

export default HeroSection