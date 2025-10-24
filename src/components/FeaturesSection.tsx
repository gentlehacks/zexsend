"use client"
import {motion} from "framer-motion"
import { ArrowRight, Smartphone, Wallet, Users, Zap, Shield } from "lucide-react";


const FeaturesSection = () => {
  return (
    <div 
      id="features"
    className="mt-[8rem] w-full overflow-x-hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-2xl lg:text-3xl text-center font-semibold px-6  mb-[5rem]">
          Everything you need in one app
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15 md:gap-8 pb-6 overflow-hidden">
          {[
            { icon: Smartphone, title: "Airtime & Data", desc: "Top up instantly with the best rates." },
            { icon: Wallet, title: "Smart Wallet", desc: "Fund once, use everywhere in PexelXus." },
            { icon: Users, title: "Gift & Connect", desc: "Gift airtime/data & share to love ones." },
            { icon: Shield, title: "Safe & Secure", desc: "Your transactions are encrypted and safe." },
            { icon: Zap, title: "Lightning Fast", desc: "Everything happens in seconds, not minutes." },
            { icon: ArrowRight, title: "More Coming Soon", desc: "We're building Nigeria's true super app." },
          ].map((f, i) => (
            <motion.div key={i}  
              initial={{opacity: 0, x: '30px'}}
              whileInView={{opacity: 1, x: '0px'}}
              exit={{opacity: 0, x: '30px'}}
              transition={{duration: 0.5, ease: 'easeInOut'}}
              viewport={{ 
              margin: "0px 0px -12% 0px" 
            }}
            className="bg-white rounded-2xl shadow-sm border-1 border-blue-100 hover:border-blue-200 hover:shadow-md transition-all duration-200">
              <div className="p-6 text-center">
                <f.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default FeaturesSection