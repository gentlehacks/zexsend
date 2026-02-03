"use client";
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  return (
    <div 
      id="faq"
    className="w-full flex flex-col items-center justify-center mt-[9rem]">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
        Frequently Asked <span className="border-b-1 border-blue-600"> Question </span>
      </h1>
       <p className="mt-2 text-gray-700 text-gray-700 px-6 text-center">
        Got questions about ZexSend? We&apos;ve got answers.
      </p>
      <div className="w-full flex flex-col items-center justify-center mt-[4rem]">
        {/* Q - 01 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md">What is ZexSend?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
               ZexSend is a Nigerian startup that let users to share Thoughtful finacial gifts to friends an love ones by adding intent with heartfelt messages. Learn more on our{" "}
              <Link href="/about" className="text-blue-600"> About page</Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 02 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md"> Is this just another money transfer app?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              No. We wrap your transfer in thoughtfulness and flexibility, making support more meaningful.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 03 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md">What if my recipient needs cash instead?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              They can instantly convert your gift intent to cash. You showed your care, they get what they need.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Q - 04 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md">Can I join the waitlist?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              Absolutely! You can{" "}
              <Link href="/#waitlistform" className="text-blue-600 hover:underline">
                join our waitlist now
              </Link>{" "}
              and be the first to know when we launch new features.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 05 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md">When will ZexSend launch?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              ZexSend is under building right now and will be available on App Store & Play Store soon. And also through a Whatsapp chatbot for easy access for everyone. 
              <Link href="/#waitlistform" className="text-blue-600 hover:underline">
                join our waitlist
              </Link>{" "}
              to be one of those to know when we launch and get your Early user reward 🎁.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FaqSection