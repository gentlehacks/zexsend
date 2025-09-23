"use client"

import {motion} from "framer-motion"
import Link from "next/link";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";

export default function ContactPage() {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("");
    setSubmitting(true)
    if (!name || !email || !message) {
      setStatus("Please fill out all field!");
      setSubmitting(false)
      return
    }
    setStatus("Sending...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus("Status sent successfully ✅")
        setName("")
        setEmail("")
        setMessage("")
        setStatus("")
        setSubmitting(false)
      } else {
        setStatus("Failed to send message ❌")
        setSubmitting(false)
      }
    } catch (err: unknown) {
      console.log(err)
      setStatus("Error sending message ❌")
      setSubmitting(false)
    }
  }

  setTimeout(() => setStatus(""), 10000)

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-2 pt-16 pb-25 md:px-20">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold flex items-center justify-center">
          Get in Touch
        </h1>
        <p className="text-lg  text-gray-800">
          Have questions about PexelXus or want to partner with us? 
          Fill out the form below or connect with us on social media.
        </p>
      </section>

      {/* Contact Form */}
      <section className="w-[100%] max-w-3xl mx-auto mt-15 bg-white shadow-lg rounded-2xl py-8 px-5 border-1 border-blue-200 hover:border-blue-300 transition-all duration-200">
        <h2 className="text-xl md:text-2xl font-semibold w-full text-gray-800 mb-8">Contact form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {status && <p className="mt-3 text-blue-400 mb-6">{status}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow transition
              ${submitting ? 'bg-blue-400 hover:bg-blue-400 ' : 'bg-blue-600 hover:bg-blue-700'}  
            `}
          >
            {submitting ? (
            <p className="flex items-center justify-center">
              Sending...
              <motion.div 
                initial={{rotate: 0}}
                animate={{rotate: 360}}
                transition={{duration: 0.4}}
              className="flex items-center justify-center"
              >
                <AiOutlineLoading className="ml-2" />
              </motion.div>
            </p>
            ) : (
            <p className="flex items-center justify-center">
              Send Message 
              <FiSend className="ml-2" />
            </p>
            )}
          </button>
        </form>
      </section>

      {/* Social Media & Email */}
      <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center mb-10 mt-25">Contact</h1>
      <section className="w-full mx-auto flex flex-col items-center justify-center md:flex-row gap-20 mt-10">
        <Link href="mailto:support@pexelxus.com" className="w-[80%] max-w-[20rem] flex flex-col bg-blue-200 p-6 rounded-3xl border-1 border-blue-400 hover:border-blue-600 transition-all duration-200">
          <div className="bg-blue-300 flex items-center justify-center w-12 h-12 rounded-2xl">
            <IoMailOutline className="text-blue-500 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-black mt-3">Email Support</h3>
          <div className="px-2 py-1 bg-gradient-to-r from-blue-500 to-blue-300 text-xs rounded-full text-blue-800 border-1 border-blue-300 font-semibold mt-2 w-fit mt-3">Email</div>
          <div className="px-4 py-3 rounded-lg border-1 border-blue-400 flex items-center bg-blue-300 text-sm text-gray-600 mt-3">
            support@pexelxus.com
          </div>
          <p className="text-xs mt-3 text-gray-700">
            Get help via email. We typically respond within 24 hours.
          </p>
        </Link>
        <Link href="x.com/pexelxus" className="w-[80%] max-w-[20rem] flex flex-col bg-blue-200 p-6 rounded-3xl border-1 border-blue-400 hover:border-blue-600 transition-all duration-200">
          <div className="bg-blue-300 flex items-center justify-center w-12 h-12 rounded-2xl">
            <FaXTwitter className="text-blue-500 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-black mt-3">Twitter/X</h3>
          <div className="px-2 py-1 bg-gradient-to-r from-blue-500 to-blue-300 text-xs rounded-full text-blue-800 border-1 border-blue-300 font-semibold mt-2 w-fit mt-3">Social media</div>
          <div className="px-4 py-3 rounded-lg border-1 border-blue-400 flex items-center bg-blue-300 text-sm text-gray-600 mt-3">
            @pexelxus
          </div>
          <p className="text-xs mt-3 text-gray-700">
            Follow us for updates and quick support on Twitter/X.
          </p>
        </Link>
      </section>
    </main>
  );
}
