"use client"
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        {/* Pulsing Owolink Logo Loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="w-14 h-14 rounded-2xl border-4 border-blue-100 border-t-blue-600 shadow-lg shadow-blue-600/10"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center gap-1.5"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <p className="text-gray-500 text-sm font-semibold tracking-wide">Loading Owolink...</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Loading