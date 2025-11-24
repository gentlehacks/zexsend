"use client"
import {motion} from "framer-motion"
import { LuClock } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiSpeedtest } from "react-icons/si";

const ProblemSection = () => {
  return (
      <motion.section className="py-20 px-6 max-w-6xl mx-auto mt-[8rem] flex flex-col items-center justify-center">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center px- mb-[5rem]">Why Nigerians Choose <span className="text-blue-500 border-b-1 border-green-600"> ZexSend </span></h2>
        <div className="w-full flex flex-col overflow-hidden md:w-[95%] lg:w-[85%] border-1 border-blue-300 hover:border-blue-500 rounded-3xl p-3">
          <div className="flex flex-col">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
              <h3 className="font-semibold text-md px-3 py-1 rounded-xl  bg-blue-200 w-fit ">Built for Nigerians</h3>
            </div>
            <p className="text-gray-700">We understand how Nigerians use fintech - no hidden subscription , just simple transaction where you always get value.</p>
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
              <h3 className="font-semibold text-md px-3 py-1 rounded-xl  bg-blue-200 w-fit ">Earn While you Spend</h3>
            </div>
            <p className="text-gray-700">Every airtime or data purchase earns tiny cashback, so using Pexelxus feels rewarding.</p>
          </div>
        </div>
        <div className="py-[4rem] lg:gap-10 flex flex-col md:flex-row items-center justify-center border-l-3 border-gray-100 md:px-[5rem] lg:px-[10rem] mt-[6rem] overflow-hidden w-full">
          <div>
            <motion.div 
              initial={{opacity: 0, x: "-50%", y: "300", rotate: "-30deg"}}
              whileInView={{opacity: 1, x: 0, y: 0, rotate: "-3deg"}}
              transition={{duration: 1}}
            className="relative">
              <h3 className="px-6 py-2 rounded-xl font-medium flex items-center justify-center bg-blue-200 w-fit">
                <SiSpeedtest className="mr-2 text-blue-600 text-lg" />
                Share Instantly 
              </h3>
              <motion.div 
                initial={{scale: 1}}
                animate={{scale: [0.7, 1, 0.7, 1]}}
                transition={{duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut'}}
                viewport={{ 
                  margin: "0px 0px -20% 0px" 
                }}
              className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-400" /> 
            </motion.div>
            <motion.div 
              initial={{opacity: 0, x: "50%", y: "300", rotate: "30deg"}}
              whileInView={{opacity: 1, x: 0, y: 0, rotate: "3deg"}}
              transition={{duration: 1}}
            className="relative mt-[15rem]">
              <h3 className="px-6 py-2 rounded-xl font-medium flex items-center justify-center bg-blue-200 w-fit">
                <LuClock className="mr-2 text-blue-600 text-xl" />
                Fast transaction
              </h3>
              <motion.div 
                initial={{scale: 1}}
                animate={{scale: [0.7, 1, 0.7, 1]}}
                transition={{duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut'}}
                viewport={{ 
                  margin: "0px 0px -20% 0px" 
                }}
              className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-400" /> 
            </motion.div>
          </div>
          <div>
            <motion.div 
              initial={{opacity: 0, x: "-50%", y: "300", rotate: "-30deg"}}
              whileInView={{opacity: 1, x: 0, y: 0, rotate: "-3deg"}}
              transition={{duration: 1}}
            className="relative mt-[15rem]">
              <h3 className="px-6 py-2 rounded-xl font-medium flex items-center justify-center bg-blue-200 w-fit">
                <RiSecurePaymentFill className="mr-2 text-blue-600 text-xl" />
                Secured by Paystack
              </h3>
              <motion.div 
                initial={{scale: 1}}
                animate={{scale: [0.7, 1, 0.7, 1]}}
                transition={{duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut'}}
                viewport={{ 
                  margin: "0px 0px -20% 0px" 
                }}
              className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-400" /> 
            </motion.div>
            <motion.div 
              initial={{opacity: 0, x: "50%", y: "300", rotate: "30deg"}}
              whileInView={{opacity: 1, x: 0, y: 0, rotate: "3deg"}}
              transition={{duration: 1}}
            className="relative mt-[15rem]">
              <h3 className="px-6 py-2 rounded-xl font-medium flex items-center justify-center bg-blue-200 w-fit">
                <IoPeopleOutline className="mr-2 text-blue-600 text-xl" />
                Made For Nigerians
              </h3>
              <motion.div 
                initial={{scale: 1}}
                animate={{scale: [0.7, 1, 0.7, 1]}}
                transition={{duration: 2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut'}}
                viewport={{ 
                  margin: "0px 0px -20% 0px" 
                }}
              className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-400" /> 
            </motion.div>
          </div>    
        </div>
      </motion.section>
  )
}

export default ProblemSection