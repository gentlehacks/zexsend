"use client";

import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer" className="relative py-6 pt-10 md:py-[24px] bg-gray-900 mt-[5rem]">
      <div className="relative">
        {/* Main container */}
        <div className="relative w-full max-w-[1731px] mx-auto px-4 sm:px-6 md:px-[32px] xl:px-[96px] mt-10">
          <div className="flex flex-col lg:flex-row items-start justify-between pb-8 lg:pb-[34px] space-y-8 lg:space-y-0">
            <div className="flex flex-col gap-4 md:gap-[23px] w-full lg:w-auto pb-6 lg:pb-[52px]">
              <Link href="/" className="flex items-center">
                <figure className="w-40">
                  <Image
                    alt="ZexSend logo"
                    src="/zexsend-banner.png"
                    width={128}
                    height={40}
                    className="object-cover w-full"
                  />
                </figure>
              </Link>

              <h5 className="mt-4 text-[#FFFFFFB2] text-base md:text-base leading-relaxed md:leading-[39px] max-w-full md:max-w-[497px]">
                Gift Airtime • Share gift to Love Ones
              </h5>

              <h2 className="mt-10  text-base md:text-[18.58px] font-medium text-white lg:hidden">
                SOCIALS
              </h2>

              {/* Social icons */}
              <div className="flex flex-wrap gap-4 md:gap-[46px] items-center">
                <Link
                  href="https://x.com/pexelxus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaXTwitter className="w-6 h-6 text-blue-500" />
                  <span className="text-white text-sm md:text-[15.52px] leading-[18.21px]">
                    Twitter
                  </span>
                </Link>
                <Link
                  href="https://instagram.com/pexelxus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaInstagram className="w-6 h-6 text-blue-500" />
                  <span className="text-white text-sm md:text-[15.52px] leading-[18.21px]">
                    Instagram
                  </span>
                </Link>
                <Link
                  href="https://facebook.com/profile.php?id=61575434355333&sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaFacebook className="w-6 h-6 text-blue-500" />
                  <span className="text-white text-sm md:text-[15.52px] leading-[18.21px]">
                    Facebook
                  </span>
                </Link>
              </div>

              {/* Product Hunt badge */}
              <Link
                href="https://www.producthunt.com/products/pexelxus?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-pexelxus" 
                target="_blank"
              >
                <Image
                  alt="PexelXus - Buy&#0032;airtime&#0044;&#0032;data&#0044;&#0032;gift&#0032;friends&#0032;&#0038;&#0032;love&#0032;ones | Product Hunt"
                  width={250}
                  height={104}
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1017599&theme=light&t=1758535860719"
                  className="w-[10rem]"
                />
              </Link>
            </div>

            {/* Links, Support, Legal */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20 md:gap-[100px] w-full lg:w-auto">
              <ul className="space-y-4">
                <p className="text-xl md:text-[18.58px] leading-[39px] font-bold text-white">
                  Links
                </p>
                <li className="flex flex-col gap-5 md:gap-[20px] mt-2 md:mt-[18px]">
                  <Link
                    href="#features"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <p className="text-[#FFFFFFB2] text-sm md:text-base leading-relaxed md:leading-[39px]">
                      Features
                    </p>
                  </Link>
                  <Link
                    href="#faq"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <p className="text-[#FFFFFFB2] text-sm md:text-base leading-relaxed md:leading-[39px]">
                      FAQ
                    </p>
                  </Link>
                  <Link
                    href="/#waitlistform"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <button className="bg-blue-600 rounded-full text-white  flex items-center justify-center px-4 md:px-6 py-2 md:py-3 text-sm md:text-md">
                      Join waitlist
                    </button>
                  </Link>
                </li>
              </ul>

              <ul>
                <p className="text-xl md:text-[18.58px] leading-[39px] font-bold text-white">
                  Support
                </p>
                <li className="flex flex-col gap-[20px] mt-[18px]">
                  <Link href="/about">
                    <p className="text-[#FFFFFFB2] text-sm md:text-base leading-[39px] font-normal transition-all duration-300">
                      About Us
                    </p>
                  </Link>
                  <Link href="/contact">
                    <p className="text-[#FFFFFFB2] text-sm md:text-base leading-[39px] font-normal transition-all duration-300">
                      Contact Us
                    </p>
                  </Link>
                  <Link href="/donate">
                    <p className="text-[#FFFFFFB2] text-sm md:text-base leading-[39px] font-normal transition-all duration-300">
                      Donate
                    </p>
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-[#FFFFFF1A] h-px mt-4 md:mt-6"></div>

      {/* Footer bottom text */}
      <div className="pt-4 md:pt-[32px]">
        <p className="text-[#FFFFFF99] mx-auto text-center text-sm md:text-base xl:text-[18px] leading-relaxed md:leading-[39px]">
          ZexSend © {new Date().getFullYear()} all rights reserved.
        </p>
      </div>
    </footer>
  );
}
