"use client"
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: "/aliyu-suleiman.jpg",
      name: "Aliyu Suleiman",
      comment: "Using Owolink for our community fundraiser was effortless. We created our link in seconds, shared it on WhatsApp, and tracked every contribution live without stress.",
      category: "Product Designer"
    },
    {
      id: 2,
      image: "/james.jpg",
      name: "James Kalu",
      comment: "The ability to pool funds for events and immediately convert part of my balance to buy cheap data or airtime right inside the app is a total game-changer.",
      category: "Fullstack Developer"
    },
    {
      id: 3,
      image: "/mustapha.jpg",
      name: "Mustapha Bello",
      comment: "Clean UI, lightning-fast transactions, and zero hidden charges. Owolink makes collecting support for celebrations feel completely professional.",
      category: "UI/UX Designer"
    },
    {
      id: 4,
      image: "/lanre.jpg",
      name: "Lanre Tobi",
      comment: "I love how secure and structured the contribution links are. My family and friends contributed to our family gathering without any payment friction.",
      category: "Healthcare Professional"
    },
    {
      id: 5,
      image: "/desola.jpg",
      name: "Desola Adebayo",
      comment: "From custom event links to instant utility top-ups, Owolink is hands-down the most practical fintech platform built for modern celebrations.",
      category: "Software Engineer"
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center mt-[10rem] py-12 px-6 md:px-12 bg-white text-black">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-16"
      >
        <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
          Verified Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 leading-tight">
          Loved by Organizers & <span className="text-blue-600">Contributors Alike</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          See how event hosts and everyday users are redefining how celebrations and contributions are managed.
        </p>
      </motion.div>

      {/* Testimonials Grid Container */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={item.id}
            index={index}
            image={item.image}
            name={item.name}
            comment={item.comment}
            category={item.category}
          />
        ))}
      </div>

    </section>
  )
}

export default Testimonials;