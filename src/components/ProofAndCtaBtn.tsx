"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";


const ProofAndCtaBtn = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[3rem]">
      {/* <motion.h1 
        initial={{opacity: 0, scale: 0.7}}
        whileInView={{opacity: 1, scale: 1}}
        viewport={{ 
          margin: "0px 0px -15% 0px"
        }}
        transition={{duration: 0.5, type: 'spring', stiffness: 400}}
        
      className="text-xl mb-[10rem]">
       💜 Designed for Nigerians
      </motion.h1> */}
      <motion.div className="flex items-center px-2">
        <div className="flex items-center mr-3">
          <div className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex items-center justify-center border-2 border-gray-400 rounded-full overflow-hidden mr-[-0.8rem]">
            <Image
              src="/lanre.jpg"
              alt="Proof Image"
              width={100}
              height={100}
            />  
          </div>
          <div className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex items-center justify-center border-2 border-gray-400 rounded-full overflow-hidden mr-[-0.8rem]">
            <Image
              width={100}
              src="/desola.jpg"
              alt="Proof Image"
              height={100}
            />  
          </div>
          <div className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex items-center justify-center border-2 border-gray-400 rounded-full overflow-hidden mr-[-0.8rem]">
            <Image
              src="/mustapha.jpg"
              alt="Proof Image"
              width={100}
              height={100}
            />  
          </div>
          <div className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex items-center justify-center border-2 border-gray-400 rounded-full overflow-hidden mr-[-0.8rem]">
            <Image
              src="/muhammed-salihu.PNG"
              alt="Proof Image"
              width={100}
              height={100}
            />  
          </div>
          <div className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex items-center justify-center border-2 border-gray-400 rounded-full overflow-hidden ">
            <Image
              src="/aliyu-suleiman.jpg"
              alt="Proof Image"
              width={100}
              height={100}
            />  
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <FaStar className="text-lg text-yellow-400" />
            <FaStar className="text-lg text-yellow-400" />
            <FaStar className="text-lg text-yellow-400" />
            <FaStar className="text-lg text-yellow-400" />
            <FaStar className="text-lg text-yellow-400" />
          </div>
          <p className="text-md text-gray-900 mt-2">
            5,000+ Users Joined!
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center mt-[3rem]">
        <Link href="#waitlistform">
          <motion.button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
            initial={{scale: 0.8, opacity: 0}}
            whileInView={{scale: 1, opacity: 1}}
            whileTap={{y: [3, 0], backgroundColor: 'blue'}}
            whileHover={{y: 2}}
            transition={{duration: 0.4, ease: 'easeInOut'}}
            viewport={{ 
              margin: "0px 0px -15% 0px" // Only check bottom 25%
          }}
          >
            Join Waitlist Today
          </motion.button>
        </Link>
      </div>
      {/* <h3 className="mt-[1rem] text-center text-gray-600 px-5">
        Be among the first Nigerians to flex payments socially.
      </h3> */}
    </div>
  )
}

export default ProofAndCtaBtn