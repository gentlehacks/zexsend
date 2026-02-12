"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SiApple } from "react-icons/si"

const AppStoreButton = ({theme}: {theme: string}) => {
  return (
    <Link href="/#cta">
      <motion.button
        whileHover={{ y: "4px" }}
        whileTap={{ y: "4px" }}
        transition={{ duration: 0.2 }}
        className={`py-3 px-6 rounded-full  hover:shadow-md flex items-center justify-center  transition-all duration-100 cursor-pointer 
           ${theme === "light" ? "bg-gray-100 hover:bg-gray-200 text-gray-900" : "bg-gray-900 hover:bg-gray-800 text-gray-100"}
        `}>
        <div className="mr-3">
          <SiApple size={30} />
        </div>
        <div>
          <div className="text-xs">
            Download on the
          </div>
          <div className="-mt-1 font-sans text-xl font-semibold">
            App Store
          </div>
        </div>
      </motion.button>
    </Link>
  )
}

export default AppStoreButton