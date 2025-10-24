"use client"
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      image: "/aliyu-suleiman.jpg",
      name: "Aliyu",
      address: "Niger state",
      comment: "I gift airtime to my babe, she smiled like I bought her ice cream 😂 PexelXus is a new way life Saver!",
      category: "Graphic designer"
    },
    {
      id: 2,
      image: "/james.jpg",
      name: "James",
      address: "Lagos",
      comment: "Bought data at 2AM for my assignment. Delivery took only 3 seconds - no lies!",
      category: "Freelancer"
    },
    {
      id: 3,
      image: "/mustapha.jpg",
      name: "Mustapha",
      address: "Niger state",
      comment: "The App is very easy to get started and has very user-friendly UI.",
      category: "Ui/Ux designer"
    },
    {
      id: 4,
      image: "/lanre.jpg",
      name: "Lanre Tobi",
      address: "Kano",
      comment: "I just got free 2GB because i send referral link to my friends 😂🔥",
      category: "Nurse"
    },
    {
      id: 5,
      image: "/desola.jpg",
      name: "Densola",
      address: "Lagos",
      comment: "Finally a nigerian app that have great UX right. Smooth tansaction no 'pending' wahala!",
      category: "Software Developer"
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[10rem]">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-semibold">
        What Early Users <span className="border-b-2 border-blue-600"> Say </span>
      </h1>

      {/* Social Proofs */}
      <div className="w-full flex flex-col items-center justify-center gap-12 md:gap-15  mt-[4rem] "
      >
        {/* Cards */}
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              id={t.id}
              image={t.image}
              name={t.name}
              address={t.address}
              comment={t.comment}
              category={t.category}
            />
          ))}
        </div>


    </div>
  )
}

export default Testimonials