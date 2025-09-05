"use client"
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

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
    <main className="min-h-screen bg-gray-50 text-gray-900 px-4 pt-16 pb-25 md:px-20">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4 mt-8">
          <h1 className="text-lg font-extrabold px-4 py-2 bg-gray-200 rounded-2xl w-fit">
            Contact Us
          </h1>
        </div>
        
        <p className="text-lg text-gray-600">
          Have questions or want to <span className="border-b-1 border-blue-500 font-medium"> partner with us? </span> We&apos;d love to hear from you.
          Fill out the form below or connect with us on social media.
        </p>
      </section>

      {/* Contact Form */}
      <section className="w-[100%] max-w-3xl mx-auto mt-15 bg-white shadow-lg rounded-2xl py-8 px-5">
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

          {status && <p className="mt-3 mb-6">{status}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow transition
              ${submitting ? 'bg-blue-400 hover:bg-blue-400 ' : 'bg-blue-600 hover:bg-blue-700'}  
            `}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>

      {/* Social Media */}
      <section className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
        <div className="flex justify-center gap-6">
          <Link
            href="https://www.x.com/salihuadamu4678"
            target="_blank"
            className="text-gray-600 hover:text-blue-500 text-2xl transition"
          >
            <FaTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/gent.lemanxus"
            target="_blank"
            className="text-gray-600 hover:text-pink-500 text-2xl transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/salihu-adamu-3b9b97290"
            target="_blank"
            className="text-gray-600 hover:text-blue-700 text-2xl transition"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61575434355333"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 text-2xl transition"
          >
            <FaFacebook />
          </Link>
        </div>
      </section>
    </main>
  );
}
