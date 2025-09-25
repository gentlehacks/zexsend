"use client";
// import { error } from "console";
import { useState } from "react";
import { CgGift } from "react-icons/cg";
import Footer from "@/components/Footer"
import DonateModal from "@/components/DonateModal"

export default function DonatePage() {
  const [name, setName] = useState<string>(""); 
  const [amount, setAmount] = useState<number | string>(""); 
  const [email, setEmail] = useState<string>(""); 
  const [message, setMessage] = useState<string>(""); 
  const [submitting, setSubmitting] = useState<boolean>(false); 
  const [openModal, setOpenModal] = useState<boolean>(false);
  

  const handleDonate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !email || !amount) {
      setMessage("Please fill in all fields")
      return
    };
    try {
      setSubmitting(true)
      setMessage("")

      const res = await fetch("/api/paystack/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Payment initiation failed")
      }

      if (data.authorization_url) {
        window.location.href = data.authorization_url // redirect to Paystack checkout
      }
      setName("")
      setEmail("")
      setAmount("")
      setSubmitting(false)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message || "Something went wrong")
      } else {
        console.error("Unknown error:", error)
      }     
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pt-16">
      <section className="w-full md:w-[80%] mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-10 flex items-center justify-center">
          <h1 className="text-gray-900 text-xl font-bold bg-gray-200 px-4 py-2 rounded-2xl w-fit">Support Pexelxus 🎁</h1>
        </div>
        
        <p className="text-lg text-gray-700 mt-[1.5rem] px-3 leading-[1.2]">
          Help us build <span className="font-medium"> Nigeria&apos;s trusted platform </span> for airtime, data, and gift sharing, Every donation makes a difference. Your donation regardless of size, fuels our ongoing efforts to develop innovative features, uphold our platform's stability, and expand our reach to users in Nigeria.
        </p>
        <button onClick={() => setOpenModal(!openModal)}
        className="px-6 py-3 rounded-full border-2 border-gray-800 hover:border-black flex items-center text-lg font-medium cursor-pointer mt-20"
        >
          <CgGift className="mr-2" />
          Donate
        </button>
      </section>

      {openModal && (
        <DonateModal 
          name={name}
          email={email}
          amount={amount}
          setName={setName}
          setEmail={setEmail}
          setAmount={setAmount}
          message={message}
          submitting={submitting}
          setOpenModal={setOpenModal}
          handleDonate={handleDonate}
        />
      )}
      

      <Footer />
    </main>
  );
}
