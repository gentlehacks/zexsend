"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/aliyu-suleiman.jpg",
      name: "Aliyu",
      comment: "Zexsend is a great app, I love the user interface and how fast the delivery is. Keep up the good work!",
      category: "Graphic designer"
    },
    {
      id: 2,
      image: "/james.jpg",
      name: "James",
      comment: "ZexSend made it so easy to send gifts to my brothers. The app is user-friendly and reliable.",
      category: "Freelancer"
    },
    {
      id: 3,
      image: "/mustapha.jpg",
      name: "Mustapha",
      comment: "ZexSend is a game-changer for Nigerian gift-giving. The app is intuitive and the delivery is fast.",
      category: "Ui/Ux designer"
    },
    {
      id: 4,
      image: "/lanre.jpg",
      name: "Lanre Tobi",
      comment: "I love how ZexSend allows me to add heartfelt messages to my gifts. It makes the experience so much more personal.",
      category: "Nurse"
    },
    {
      id: 5,
      image: "/desola.jpg",
      name: "Densola",
      comment: "ZexSend has transformed how I send gifts to loved ones across Nigeria. As a developer, I appreciate the clean code architecture and seamless API integration. Highly recommended!",
      category: "Software Developer"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[10rem]">
      <motion.h1 className="text-3xl md:text-5xl text-center leading-[1.2] font-semibold px-6 md:px-22 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Early Users Say
      </motion.h1>
      <motion.p className="mt-2 text-gray-700 text-center text-md md:text-lg lg:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        79% of Nigerians prefer our &apos;Gift Intent&apos; model over plain transfers.
      </motion.p>

      {/* Social Proofs */}
      <div className="w-full flex flex-col items-center justify-center gap-12 md:gap-15 mt-[4rem]">
        {/* Cards */}
        <div className="flex overflow-hidden relative w-full max-w-[600px]">
          <TestimonialCard
            key={testimonials[currentIndex].id}
            id={testimonials[currentIndex].id}
            image={testimonials[currentIndex].image}
            name={testimonials[currentIndex].name}
            comment={testimonials[currentIndex].comment}
            category={testimonials[currentIndex].category}
          />
        </div>
        <button onClick={prevTestimonial} className="w-[3.2rem] h-[3.2rem] bg-blue-500/50 text-gray-100 rounded-full flex items-center justify-center absolute left-4 md:left-8 lg:left-22">
          <FaArrowLeft size={16} />
        </button>
        <button onClick={nextTestimonial} className="w-[3.2rem] h-[3.2rem] bg-blue-500/50 text-gray-100 rounded-full flex items-center justify-center absolute right-4 md:right-8 lg:right-22">
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default Testimonials;