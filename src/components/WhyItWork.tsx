"use client"
import { motion } from "framer-motion";
import { FaHandsHelping, FaUsers, FaRocket, FaStar, FaRegLightbulb } from "react-icons/fa"; // Import new icons

const WhyItWork = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[10rem]">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{margin: "0px 0px -100px 0px"}}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl text-center text-gray-800 leading-[1.2] font-semibold px-6 md:px-22 "
      >
        Built for the Way Nigerians Give
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{margin: "0px 0px -100px 0px"}}
        transition={{ duration: 0.5 }}
        className="text-md md:text-lg text-center text-gray-600 mt-4 mb-[3rem] px-6 md:px-[20%]">
        Real people, real stories. See how ZexSend is changing the way Nigerians share support.
      </motion.p>

      <div className="w-full px-8 sm:px-22 md:px-12 lg:px-22 flex items-center justify-center">
        <div className="w-full flex items-center justify-center ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-[100%] p-5 rounded-2xl bg-gray-100 flex items-center justify-center">
              <div className="flex flex-col">
                <FaHandsHelping size={40} className="text-blue-500" /> {/* New icon */}
                <h2 className="text-xl font-semibold mt-4">Trusted by Thousands</h2>
                <p className="text-md text-gray-500 mt-2">Join a growing community of Nigerians who trust ZexSend for their thoughtful giving needs.</p>
              </div>
            </div>
            <div className="w-[100%] p-5 rounded-2xl bg-gray-100 flex items-center justify-center">
              <div className="flex flex-col">
                <FaUsers size={40} className="text-green-500" /> {/* New icon */}
                <h2 className="text-xl font-semibold mt-4">Real Impact Stories</h2>
                <p className="text-md text-gray-500 mt-2">Discover how ZexSend has helped Nigerians send support that truly makes a difference.</p>
              </div>
            </div>
            <div className="w-[100%] p-5 rounded-2xl bg-gray-100 flex items-center justify-center">
              <div className="flex flex-col">
                <FaRocket size={40} className="text-red-500" /> {/* New icon */}
                <h2 className="text-xl font-semibold mt-4">Designed for Nigerians</h2>
                <p className="text-md text-gray-500 mt-2">ZexSend is built with the unique needs of Nigerian givers in mind, making thoughtful giving easier than ever.</p>
              </div>
            </div>
            <div className="w-[100%] p-5 rounded-2xl bg-gray-100 flex items-center justify-center">
              <div className="flex flex-col">
                <FaStar size={40} className="text-yellow-500" /> {/* New icon */}
                <h2 className="text-xl font-semibold mt-4">Seamless Experience</h2>
                <p className="text-md text-gray-500 mt-2">Experience a smooth and intuitive platform that makes sending support effortless for Nigerians.</p>
              </div>
            </div>
            <div className="w-[100%] p-5 rounded-2xl bg-gray-100 flex items-center justify-center">
              <div className="flex flex-col">
                <FaRegLightbulb size={40} className="text-orange-500" /> {/* New icon */}
                <h2 className="text-xl font-semibold mt-4">Community Focused</h2>
                <p className="text-md text-gray-500 mt-2">ZexSend fosters a sense of community among Nigerian givers, creating a space for shared support and connection.</p>
              </div>
            </div>
            <div className="w-[100%] p-5 rounded-2xl bg-gray-100 flex items-center justify-center">
              <div className="flex flex-col">
                <FaHandsHelping size={40} className="text-purple-500" /> {/* New icon */}
                <h2 className="text-xl font-semibold mt-4">Innovative Features</h2>
                <p className="text-md text-gray-500 mt-2">Discover innovative features designed to enhance the thoughtful giving experience for Nigerians.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyItWork;