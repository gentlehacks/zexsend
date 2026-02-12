"use client"
import { motion } from "framer-motion"

const StepsVariants = {
  initial: { opacity: 0, y: "100px", scale: 0.95 },
  animate: { opacity: 1, y: "0px", scale: 1 },
}

const HowItWorkSection = () => {
  return (
    <motion.div id="how-it-works"
      whileInView={{ backgroundColor: "#050a02", color: "#ffffff" }}
      viewport={{ margin: "0px 0px -20% 0px" }} // Only check bottom 25%
      transition={{duration: 1, delay: 1}}
    className="p-6 py-22 pb-44 rounded-3xl bg-gray-50 transition-all duration-1000 w-full flex items-center justify-center flex-col mt-[10rem] overflow-hidden">
      <h1 className="text-3xl md:text-5xl text-center text-gay-800 leading-[1.2] font-semibold px-6 md:px-[20%] ">
        How Thoughtful Giving Works in Three Steps
      </h1>
      <div className="w-full flex flex-col px-6 md:px-8 items-center justify-center lg:gap-2 mt-[5rem]">
        {/* Step 01 */}
        <motion.div className="w-[70%] flex flex-col items-center justify-center"
          variants={StepsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            margin: "0px 0px -15% 0px" // Only check bottom 25%
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-[4rem] h-[4rem] rounded-full bg-blue-500 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">1</h2>
            </div>
            <h1 className="text-xl font-semibold mt-6">
              You Choose & Personalize
            </h1>
            <p className="text-lg text-center text-gray-400 mt-2 max-w-[30rem]">
              Pick a Gift Intent, add amount and a personal note.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[1.5rem] mb-[1.5rem]">
            <div className="w-[3px] h-[6rem] bg-gray-400 rounded-xl" />
          </div>
        </motion.div>
        {/* Step 02 */}
        <motion.div className="w-[70%] flex flex-col items-center justify-center"
          variants={StepsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            margin: "0px 0px -15% 0px" // Only check bottom 25%
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-[4rem] h-[4rem] rounded-full bg-blue-500 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">2</h2>
            </div>
            <h1 className="text-xl font-semibold mt-4">
              They Receive & Feel the Care
            </h1>
            <p className="text-lg text-center text-gray-400 mt-2 max-w-[30rem]">
              They get a heartfelt notification with your message.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[1.5rem] mb-[1.5rem]">
            <div className="w-[3px] h-[6rem] bg-gray-400 rounded-xl" />
          </div>
        </motion.div>
        {/* Step 03 */}
        <motion.div className="w-[70%] flex flex-col items-center justify-center"
          variants={StepsVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            margin: "0px 0px -15% 0px" // Only check bottom 25%
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="w-[4rem] h-[4rem] rounded-full bg-blue-500 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">3</h2>
            </div>
            <h1 className="text-xl font-semibold mt-4">
              They Use It Their Way
            </h1>
            <p className="text-lg text-center text-gray-400 mt-2 max-w-[30rem]">
              They use it for your purpose or take it as cash—no guilt, no hassle.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default HowItWorkSection