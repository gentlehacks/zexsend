"use client";

import {motion} from "framer-motion"
import { HiXMark } from "react-icons/hi2";

interface Props {
  name: string;
  email: string;
  amount: string | number;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setAmount: (amount: string | number) => void;
  message: string;
  submitting: boolean;
  setOpenModal: (openModal: boolean) => void;
  handleDonate: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DonateModal = ({name, setName, email, setEmail, amount, setAmount,  message, submitting, setOpenModal, handleDonate}: Props) => {
  return (
    <motion.div
      className="fixed z-100 top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.4)] flex items-center justify-center"
    >
      <motion.form onClick={(e) => e.stopPropagation()} onSubmit={handleDonate} 
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.3, ease: 'easeInOut'}}
      className="w-[95%] max-w-[30rem] mx-auto bg-white shadow-xl rounded-2xl py-8 px-4 sm:px-6 md:px-8 text-center border-1 border-blue-400 hover:border-blue-500">
        <div className="w-full flex items-center justify-between mb-6">
          <h2 className="text-gray-900 text-2xl font-bold">
            Make a Donation
          </h2>
          <button onClick={() => setOpenModal(false)} className="text-gray-700 hover:text-gray-900">
            <HiXMark className="text-xl" />
          </button>
        </div>
        

        {/* Name */}
        <div className="flex flex-col text-left mb-2">
          <label className="text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Full Name"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        

        {/* Email */}
        <div className="flex flex-col text-left mb-2">
          <label className="text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {/* Amount */}
        <div className="flex flex-col text-left mb-2">
          <label className="text-sm font-semibold text-gray-700 mb-1">Donation Amount (₦)</label>
          <input
            type="text"
            placeholder="Enter amount in Naira"
            className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min={100}
          />
        </div>
        
        <p className="mb-3">{message}</p>

        {/* Paystack Button */}
        <div className="flex items-center justify-between gap-3 mt-2">
          <button onClick={() => setOpenModal(false)}
            className={`w-full text-gray-800 font-semibold px-4 py-3 rounded-xl shadow bg-gray-200 hover:bg-gray-300 transition-all duration-100 cursor-pointer
          `}
          >
            Cancel
          </button>
          <button
            disabled={submitting}
            type="submit"
            className={`w-full  text-white font-semibold px-4 py-3 rounded-xl shadow hover:bg-blue-700 transition
              ${submitting ? 'bg-blue-400 hover:bg-blue-400 cursor-loader hover:bg-blue-700' : 'bg-blue-600 cursor-pointer'}
          `}
          >
            {submitting ? 'Proccessing...' : 'Donate Now'}
          </button>
        </div>
        

        <p className="mt-6 text-sm text-gray-600 mt-5">
          100% of your donation goes into building and maintaining Pexelxus.
        </p>
      </motion.form>
    </motion.div>
  )
}

export default DonateModal