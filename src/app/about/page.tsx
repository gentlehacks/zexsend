"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CgGift } from "react-icons/cg";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="pt-30 md:px-20 pb-30">
        {/* Header */}
        <section className="max-w-4xl mx-auto text-center mb-30">
          <div className="w-full flex items-center justify-center ">
            <h1 className="text-lg font-extrabold rounded-2xl bg-gray-200 px-4 py-3 w-fit mb-10 ">
              About ZexSend
            </h1>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center px-6 font-extrabold mb-6">
            The Nigeria&apos;s Everyday Super App!
          </h1>
          <p className="text-lg text-gray-700 px-4">
            ZexSend is a Nigerian startup where you can{" "}
            <span className="font-medium ">
              share airtime & mobile data as a gift 
            </span>{" "}
            for occasions{" "}
            <span className="font-medium ">
              like birthday, christmas, Eid, or just for hep someone.
            </span>
            . We are building a platform that&apos;s simple, reliable, and 
            made for
            Nigerians. 
          </p>
        </section>

        {/* Founder Section */}
        <section className=" max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            whileHover={{bottom: 3}}
            transition={{type: 'spring', stiffness: 300}}
          className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-black h-[30rem] p-5 py-8 text-gray-100 rounded-2xl border-1 border-blue-300 hover:border-blue-400 bg-gradient-founder">
            <h2 className="bg-gradient-to-r from-blue-500 to-gray-800 text-2xl font-semibold rounded-xl p-1 px-2 w-fit mt-2">Meet the Founder</h2>
            <p className="text-gray-100 leading-[2] mt-8">
              Hi, I&apos;m <span className="font-semibold text-gray-100 border-b-1 border-blue-500">Salihu Adamu,</span> the founder
              of ZexSend. I started this journey to make digital transactions
              easier for Nigerians — giving you the power to connect, gift,
              share to friend and family with simplicity and trust.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-[1rem] ml-2 mt-10 w-full">
              <Link href="https://www.github.com/gentlehacks">
              <FaGithub className="text-xl" />
                <p className="text-blue-600 hover:text-blue-500 mt-1">Github</p>
              </Link>
              <Link href="https://www.linkedin.com/in/salihu-adamu-3b9b97290">
                <FaLinkedin className="text-xl" />
                <p className="text-blue-600 hover:text-blue-500 mt-1">LinkeIn</p>
              </Link>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-12">
              <Link
                href="/#waitlistform"
                className="px-6 py-3 text-center flex items-center justify-center rounded-xl bg-gray-900 border-2 border-gray-700 text-white font-semibold shadow-md hover:bg-gray-800 transition-all duration-100"
              >
                Join Waitlist
              </Link>
              <Link
                href="/donate"
                title="Support PexelXus!"
                className="relative px-6 py-3 text-center flex items-center justify-center rounded-xl bg-gray-900 border-2 border-gray-700 font-semibold shadow-md hover:bg-gray-800 transition-all duration-100"
              >
                <CgGift className="mr-2 text-xl" />
                Donate
                <motion.div 
                  animate={{scale: [1, 0.8, 1]}}
                  transition={{duration: 1, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut'}}
                className="absolute -top-1 right-0 bg-blue-500 w-3 h-3 rounded-full" />
              </Link>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{skewX: '2deg', skewY: '2deg'}}
            whileTap={{skewX: '2deg', skewY: '2deg'}}
            transition={{type: 'spring', stiffness: 300}}
          className="relative w-full h-[30rem] rounded-2xl overflow-hidden shadow-lg border-3 border-gray-400">
            <Image
              src="/ceo-1.JPG" 
              alt="Founder"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* Vision / Mission */}
        <section className="max-w-4xl mx-auto mt-25 text-center flex flex-col items-center justify-center">
          <div className="w-[95%] flex items-center justify-center mb-4 border-1 border-blue-300 hover:border-blue-400 transition-all duration-200 rounded-3xl p-4">
            <h1 className="text-xl lg:text-2xl font-semibold py-2 px-4 rounded-2xl bg-gradient from-blue-500 to-blue-200 w-fit">Our Vision</h1>
          </div>
          
          <p className="text-lg md:text-1xl text-gray-700 px-4 mt-6">
            At ZexSend, we believe in making technology more{" "}
            <span className="font-medium">accessible</span> and{" "}
            <span className="font-medium">empowering</span> for
            everyone. Our mission is to connect people 
            through simple, secure, and
            fun digital experiences. And make gift sharing to be easy, enjoying, and super excited. 😃
          </p>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}

export default About