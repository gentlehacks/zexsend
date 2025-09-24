"use client"
import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Download = () => {
  return (
    <div className="w-full h-screen p-6 bg-gray-50 text-gray-900 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center mt-[-3rem]">
        <motion.div 
          animate={{backgroundColor: ['rgba(211, 211, 211, 1)', 'rgba(71, 111, 221, 0.75)']}}
          transition={{duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut'}}
        className="w-[4rem] h-[4rem] p-2 bg-[rgba(230, 230, 230, 0.55)] rounded-2xl shadow-sm border-1 border-blue-200 hover:border-blue-300 overflow-hidden">
          <Image 
            src="/favicon-black.png"
            alt="PexelXus Logo"
            width={100}
            height={100}
            priority
            className="w-full"
          />
        </motion.div>
      </div>
      
      <h1 className="mt-[4rem] text-[1.5rem] font-semibold text-gray-900">
        Comming Soon...
      </h1>
      <p className="text-center mt-4 text-gray-700">
        We&apos;re building the easiest way to buy airtime and share gift to friends in Nigeria.
      </p>
      <Link href="/#waitlistform"
        className="mt-[4rem]"
      >
        <motion.button 
          initial={{y: 0}}
          whileTap={{y: [0, 3, 0]}}
          whileHover={{y: 3}}
          transition={{duration: 0.2}}
        className="flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-center text-white transition-all duration-200 cursor-pointer"
        >
          🎁 Join Waitlist for Early Access!
        </motion.button>
      </Link>
    </div>
  )
}

export default Download