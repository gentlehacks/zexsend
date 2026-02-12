"use client"
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaShieldAlt, FaHeart, FaFeather, FaFlask } from "react-icons/fa";

const About = () => {
  const values = [
    {
      title: "Trust",
      description: "We handle every kobo with the same care you give your own money. Security is not an afterthought—it's the foundation.",
      icon: FaShieldAlt,
      color: "text-blue-600"
    },
    {
      title: "Empathy",
      description: "We design for real Nigerian families. We understand the pressure, the love, and the unspoken needs behind every transaction.",
      icon: FaHeart,
      color: "text-red-600"
    },
    {
      title: "Simplicity",
      description: "No complex dashboards, no confusing fees. Just clear choices and warm experiences.",
      icon: FaFeather,
      color: "text-green-600"
    },
    {
      title: "Flexibility",
      description: "Life doesn't follow a script. Your support shouldn't be rigid. We empower recipients to choose what's right for their moment.",
      icon: FaFlask,
      color: "text-purple-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-b from-blue-50 to-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl"
        >
          <motion.div 
            initial={{opacity: 0, scale: 0.6}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.4, delay: 1}}
          className="w-full flex items-center justify-center">
            <div className="w-fit px-2 py-1 bg-gray-200 rounded-full flex items-center justify-center mb-2">
              <h2 className="text-md font-medium text-gray-800">About Us</h2>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            We&apos;re on a Mission to Make Giving More Thoughtful.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            ZexSend was born from a simple observation: sending money to help should feel as good as receiving it. We&apos;re building a way for Nigerians to wrap their support in care, purpose, and flexibility.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              It Started with a Question.
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Like many Nigerians, our founder knows what it's like to send &quot;dash&quot; to family and hope it&apos;s used well. You want to help with Mama&apos;s electricity bill, but once the money leaves your account, you&apos;re left guessing.
              </p>
              <p>
                We asked ourselves: What if support could carry intention without forcing it? What if the recipient could see exactly what you hoped for—and still have the freedom to use it for what truly matters right now?
              </p>
              <p className="font-semibold text-blue-600">
                That question became ZexSend.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              A Gift That Says Exactly What You Mean.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                ZexSend isn&apos;t another payment app. It&apos;s a new way to send financial support—one that bridges the gap between what you want to help with and what your loved one actually needs.
              </p>
              <div className="bg-white p-8 rounded-lg">
                <p className="font-semibold text-gray-800 mb-4">
                  When you send a gift, you choose an Intent (Light Bill, Birthday, Data, Fuel…). Add a personal note. Then your recipient receives a beautiful notification with your message, and they decide:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">•</span>
                    <span><strong>Use the gift as you intended</strong> — pay the bill directly, in one tap.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">•</span>
                    <span><strong>Or receive the cash instantly,</strong> no questions asked.</span>
                  </li>
                </ul>
              </div>
              <p className="font-semibold text-gray-800 pt-4">
                No awkwardness. No wasted thought. Just genuine help that always lands right.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Built on Trust, Empathy, and Simplicity.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "0px 0px -50px 0px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-100 p-6 rounded-lg"
                  >
                    <IconComponent className={`${value.color} text-4xl mb-4`} />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            {/* Placeholder for founder image */}
            <div className="flex-shrink-0 w-full flex flex-col items-center justify-center md:w-1/3">
              <div className="w-64 h-84 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden flex items-center justify-center text-white">
                <Image
                  src={"/founder.JPG"}
                  alt="Founder of ZexSend"
                  width={350}
                  height={400}
                  priority={true}
                  className="w-full"
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">Founder of ZexSend</p>
            </div>

            {/* Founder content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Behind ZexSend Is a Developer Who Wanted to Build More Than Code.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Hi, I&apos;m <span className="font-semibold text-gray-800">Salihu Adamu</span>. I built ZexSend because I believe technology's highest purpose is to bring people closer—not just move money faster.
                </p>
                <p>
                  I spent years building software for others, but I wanted to create something that makes my own mother smile when she receives help from my sister abroad. Something that turns a bank transfer into a moment of connection.
                </p>
                <p className="font-semibold text-blue-600">
                  ZexSend is that something. And I&apos;m just getting started.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;