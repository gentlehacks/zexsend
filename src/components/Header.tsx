"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <motion.header id="header"
      initial={{ y: "-70px" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full flex items-center justify-center py-8 px-8 md:px-12 bg-gray-50 ">
      {/* Mobile  */}
      {isOpenMenu && (
        <MobileNav
          setIsOpenMenu={setIsOpenMenu}
        />
      )}
      <ul className="w-full flex items-center justify-between">
        <div className="flex items-center">
          {/* Pexelxus - Logo */}
          <Link href="#" className="flex items-center">
            <Image
              src="/icon-circle.png"
              width={300}
              height={300}
              alt="ZexSend - Send thoughtfull support"
              priority
              className="w-[2rem] "
            />
            <h1 className="font-bold text-[1.5rem] ml-3 text-gray-800">ZexSend</h1>
          </Link>


        </div>
        <div className="flex items-center">
          {/* Desktop Nav */}
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group"
                >
                  {/* Text */}
                  <span
                    className={`transition-colors duration-300 ${isActive ? "text-blue-500" : "group-hover:text-blue-500"
                      }`}
                  >
                    {link.name}
                  </span>


                </Link>
              )
            })}

          </nav>
          <div className='flex items-center space-x-4'>
            {/* Moile Nav Icon */}
            <motion.button
              initial={{ scale: 1 }}
              whileTap={{ scale: [0.8, 1.1, 1] }}
              transition={{duration:0.4}}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="block md:hidden ml-5 bg-gray-500 hover:bg-gray-600 transition-all duration-200 rounded-lg p-1 mr-4">
              <RiMenu3Fill className="text-[1.5rem] text-white" />
            </motion.button>

          </div>
          <Link href="/#cta" className="hidden md:flex">
            <button className="px-6 py-3 rounded-full bg-yellow-400 text-gray-800 text-md font-normal  ml-6">
              Download
            </button>
          </Link>

      </div>
    </ul>
    </motion.header >

  )
}

export default Header