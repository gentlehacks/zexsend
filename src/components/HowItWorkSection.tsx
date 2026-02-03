"use client"
import { motion } from "framer-motion"

const StepsVariants = {
  initial: { opacity: 0, y: "100px" },
  animate: { opacity: 1, y: "0px" },
}

const HowItWorkSection = () => {
  return (
    <div
      id="how-it-works"
      className="bg-bluw-500 w-full flex items-center justify-center flex-col mt-[10rem] overflow-hidden">
      <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold">
        How to get started
      </h1>
      <div className="w-full flex flex-col px-6 md:px-8 sm:flex-col md:flex-col lg:flex-row items-center justify-center lg:gap-2 mt-[5rem]">
        {/* Step 01 */}
        <motion.div className="w-[70%] flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center"
          variants={StepsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            margin: "0px 0px -15% 0px" // Only check bottom 25%
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-blue-500 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">1</h2>
            </div>
            <h1 className="text-lg font-semibold mt-4">
              Add Your Thought
            </h1>
            <p className="text-md text-center text-gray-800 mt-2">
              Pick a category like "Light Bill" or "Birthday" and add a heartfelt message.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[1.5rem] mb-[1.5rem]">
            <div className="w-[3px] h-[6rem] bg-gray-400 rounded-xl lg:rotate-[90deg]" />
          </div>
        </motion.div>
        {/* Step 02 */}
        <motion.div className="w-[70%] flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center"
          variants={StepsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            margin: "0px 0px -15% 0px" // Only check bottom 25%
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-blue-500 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">2</h2>
            </div>
            <h1 className="text-lg font-semibold mt-4">
              Send Heartfelt Support
            </h1>
            <p className="text-md text-center text-gray-800 mt-2">
              The recipient gets a beautiful notification with your message and gift intent.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[1.5rem] mb-[1.5rem]">
            <div className="w-[3px] h-[6rem] bg-gray-400 rounded-xl lg:rotate-[90deg]" />
          </div>
        </motion.div>
        {/* Step 03 */}
        <motion.div className="w-[70%] flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center"
          variants={StepsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            margin: "0px 0px -15% 0px" // Only check bottom 25%
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-blue-500 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">3</h2>
            </div>
            <h1 className="text-lg font-semibold mt-4">
              Empower Their Choice
            </h1>
            <p className="text-md text-center text-gray-800 mt-2">
              They use it for your purpose or take it as cash—no guilt, no hassle.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default HowItWorkSection