"use client";
import { motion } from "framer-motion";
import Link from "next/link"

const faqData = [
  {
    id: 1,
    question: "What is ZexSend?",
    answer: "ZexSend is a Nigerian startup that let users to share Thoughtful finacial gifts to friends an love ones by adding intent with heartfelt messages. Learn more on our About page",
  },
  {
    id: 2,
    question: "How does ZexSend work?",
    answer: "ZexSend allows users to send financial gifts with personalized messages. You can choose the amount, add a heartfelt message, and send it to your loved ones. The recipient can then redeem the gift through our app.",
  },
  {
    id: 3,
    question: "Is ZexSend secure?",
    answer: "Yes, ZexSend uses industry-standard security measures to protect your information and transactions. We prioritize the safety and privacy of our users.",
  },
  {
    id: 4,
    question: "Can I use ZexSend internationally?",
    answer: "Currently, ZexSend is focused on serving users within Nigeria. However, we are exploring options for international expansion in the future.",
  },
  {
    id: 5,
    question: "How can I contact ZexSend support?",
    answer: "You can contact our support team by visiting our Contact page on the website or by emailing us at support@zexsend.com",
  },
  
]

const FaqSection = () => {
  return (
    <div 
      id="faq"
    className="w-full flex flex-col items-center justify-center mt-[9rem]">
      <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{margin: "0px 0px -100px 0px"}}
          transition={{ duration: 0.5 }}
      className="text-3xl md:text-5xl text-center leading-[1.2] font-semibold px-6 md:px-22 ">
        Frequently Asked Question 
      </motion.h1>
       <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{margin: "0px 0px -100px 0px"}}
          transition={{ duration: 0.5, delay: 0.3 }}
       className="mt-2 text-gray-700 text-center text-md md:text-lg lg:text-lg">
        Got questions about ZexSend? We&apos;ve got answers.
      </motion.p>
      <div className="w-full flex flex-col items-center justify-center mt-[4rem]">
    
        {faqData.map((faq, index) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-[90%] max-w-2xl mb-4"
          >
            <details className="group border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors duration-300 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-lg text-gray-800 group-open:text-blue-600">
                {faq.question}
                <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </p>
            </details>
          </motion.div>
        ))}

        <Link href="/contact" className="mt-6 text-blue-600 hover:underline">
          Still have questions? Contact us.
        </Link>
     </div>
    </div>
  )
}

export default FaqSection