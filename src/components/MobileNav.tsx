"use client"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { RiDownload2Fill } from "react-icons/ri";

interface MobileNavProps {
  setIsOpenMenu: (isOpenMenu: boolean) => void;
};

const MobileNav = ({ setIsOpenMenu }: MobileNavProps) => {
  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpenMenu(false)}
        className="fixed inset-0 z-50 w-full h-screen bg-black/50 backdrop-blur-sm flex flex-col"
      >
        <motion.div
          initial={{ opacity: 0, y: '-30px' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-30px' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 left-0 w-full bg-white rounded-b-[2.5rem] shadow-2xl border-b border-gray-100 p-6 pt-8 pb-10 flex flex-col justify-between"
        >
          {/* Top Bar: Brand & Close Button */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
            <Link
              href="/"
              onClick={() => setIsOpenMenu(false)}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                O
              </div>
              <span className="font-extrabold text-xl tracking-tight text-black">
                Owolink
              </span>
            </Link>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpenMenu(false)}
              className="p-2 rounded-xl bg-gray-100 text-black hover:bg-gray-200 transition-colors"
              aria-label="Close Menu"
            >
              <FaXmark className="text-xl" />
            </motion.button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 mb-8">
            {mobileNavLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpenMenu(false)}
                  className="w-full py-3.5 px-4 rounded-xl text-lg font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-gray-300 group-hover:text-blue-600 transition-colors">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link
                href="/#cta"
                onClick={() => setIsOpenMenu(false)}
                className="w-full px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <RiDownload2Fill className="text-xl" />
                Get Started / Download
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MobileNav