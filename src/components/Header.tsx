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
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.header
      id="header"
      initial={{ y: "-70px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full sticky top-0 z-50 flex items-center justify-center py-5 px-6 md:px-12 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      {/* Mobile Nav Drawer */}
      {isOpenMenu && (
        <MobileNav
          setIsOpenMenu={setIsOpenMenu}
        />
      )}

      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 overflow-hidden rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
           <Image src="/favicon.png" alt="Owolink Logo" width={100} height={100} className="object-contain" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-black">
            Owolink
          </span>
        </Link>

        {/* Desktop Navigation & Actions */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Download CTA Button */}
          <Link href="/#cta" className="hidden md:flex">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="md:hidden bg-gray-100 hover:bg-gray-200 transition-colors rounded-xl p-2.5 text-black"
            aria-label="Toggle Menu"
          >
            <RiMenu3Fill className="text-xl" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;