"use client";

import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#050B14] text-white pt-20 pb-12 mt-28 overflow-hidden border-t border-gray-800">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800/80">

          {/* Brand Info Column */}
          <div className="lg:col-span-2 flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                <span className="text-xl">O</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Owolink
              </span>
            </Link>

            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              The premier platform for hosting events, collecting seamless contributions via Paystack, and managing everyday mobile utilities.
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Official Domain: <strong className="text-white">owolink.com</strong></span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>Support: <strong className="text-white">support@owolink.com</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg tracking-wide">Company</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Community */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg tracking-wide">Connect</h4>
            <div className="flex items-center gap-3">
              <Link
                href="https://x.com/owolinkng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com/owolinkng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/owolink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-sm">
          <p>
            Owolink © {new Date().getFullYear()} Owolink All rights reserved.
          </p>
          <p className="mt-4 sm:mt-0">
            Powered by secure Paystack payments & high-availability VTU infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}