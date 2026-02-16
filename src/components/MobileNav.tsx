"use client"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CgGift } from "react-icons/cg";
import { FaDownload, FaXmark } from "react-icons/fa6";
import { RiDownload2Fill } from "react-icons/ri";

interface MolbileNavProps {
  setIsOpenMenu: (isOpenMenu: boolean) => void;
};

const MobileNav = ({ setIsOpenMenu }: MolbileNavProps) => {


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpenMenu(false)}
        className="fixed w-full h-screen top-0 left-0 inset-0 z-20 bg-[rgba(0,0,0,0.4)] overflow-y-hidden flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: '-100px' }}
          animate={{ opacity: [0, 0.1, 1], y: 0 }}
          exit={{ opacity: 0, y: '-100px' }}
          transition={{ duration: 0.2, }}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 left-0 pt-10 pb-30 w-[100%] h-screen flex sm:block md:hidden lg:hiddens flex-col justify-between space-y-1 bg-white rounded-b-xl border-b-1 border-gray-100 shadow-lg">
          <div className="w-full flex flex-col iitems-center justify-center gap-[1rem]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <Link
                href="/"
                onClick={() => setIsOpenMenu(false)}
                className="w-full py-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200 mt-[2rem]"
              >Home</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <Link
                href="/about"
                onClick={() => setIsOpenMenu(false)}
                className="w-full py-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
              >About</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <Link
                href="/#faq"
                onClick={() => setIsOpenMenu(false)}
                className="w-full py-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
              >FAQ</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
            >
              <Link
                href="/contact"
                onClick={() => setIsOpenMenu(false)}
                className="w-full py-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all duration-200"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: [0.8, 1.1, 1] }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpenMenu(false)}
            className="absolute top-6 right-6 flex p-2 items-center justify-center hover:text-gray-700 cursor-pointer"
          >
            <FaXmark className="text-3xl" />
          </motion.div>

          <div className="w-full flex flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              className="w-[100%]"
            >
              <Link
                href="/#download"
                onClick={() => setIsOpenMenu(false)}
                className="w-[100%] px-6 py-4 bg-[#0F172A] text-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-200"
              >
                <RiDownload2Fill className="mr-2 text-xl" />
                Download
              </Link>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              className="w-[100%]"
            >
              <Link
                href="/#waitlistform"
                onClick={() => setIsOpenMenu(false)}
                className="w-[100%] px-6 py-4 border-2 border-[#0F172A] font-medium text-gray-900 rounded-full flex items-center justify-center hover:border-gray-800 transition-all duration-200 mt-3"
              >
                Join Waitlist
              </Link>
            </motion.div> */}
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MobileNav
