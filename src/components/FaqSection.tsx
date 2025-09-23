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
        Got questions about PexelXus? We&apos;ve got answers.
      </p>
      <div className="w-full flex flex-col items-center justify-center mt-[4rem]">
        {/* Q - 01 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md">What is PexelXus?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
               PexelXus is a Nigerian startup where you can buy airtime, data, 
              gift friends, and share content. We aim to make digital life 
              easier and more connected. Want to learn more? Go to 
              <Link href="/about" className="text-blue-600"> About page</Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 02 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md">How do I donate to support PexelXus?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
               You can support our mission by donating through our{" "}
              <Link href="/donate" className="text-blue-600 hover:underline">
                Donate Page
              </Link>. All donations go towards building a better platform.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 03 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md">Is my payment secure?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              Yes! We use Paystack for payments, ensuring world-class security 
              and encryption for all your transactions.
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
                join our waitlist
              </Link>{" "}
              and be the first to know when we launch new features.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Q - 05 */}
        <Accordion type="single" collapsible className='px-4 w-[93%] sm:w-[93%] md:w-[85%] lg:w-[70%] border-2 border-gray-300 rounded-xl transition-all duration-200 mb-3'>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-md">When will PexelXus launch?</AccordionTrigger>
            <AccordionContent className="text-gray-800">
              PexelXus is under building right now and will be available on App Store & Play Store soon. 
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