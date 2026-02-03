"use client"
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      image: "/aliyu-suleiman.jpg",
      name: "Aliyu",
      address: "Niger state",
      comment: "Zexsend is a great app, I love the user interface and how fast the delivery is. Keep up the good work!  ",
      category: "Graphic designer"
    },
    {
      id: 2,
      image: "/james.jpg",
      name: "James",
      address: "Lagos",
      comment: "ZexSend made it so easy to send gifts to my brothers. The app is user-friendly and reliable.",
      category: "Freelancer"
    },
    {
      id: 3,
      image: "/mustapha.jpg",
      name: "Mustapha",
      address: "Niger state",
      comment: "ZexSend is a game-changer for Nigerian gift-giving. The app is intuitive and the delivery is fast.",
      category: "Ui/Ux designer"
    },
    {
      id: 4,
      image: "/lanre.jpg",
      name: "Lanre Tobi",
      address: "Kano",
      comment: "I love how ZexSend allows me to add heartfelt messages to my gifts. It makes the experience so much more personal.",
      category: "Nurse"
    },
    {
      id: 5,
      image: "/desola.jpg",
      name: "Densola",
      address: "Lagos",
      comment: "ZexSend is the best app for sending airtime and data gifts in Nigeria. The app is easy to use and the customer service is excellent.",
      category: "Software Developer"
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[10rem]">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-semibold">
        What Early Users <span className="border-b-2 border-blue-600"> Say </span>
      </h1>
      <p className="mt-2 text-gray-700 text-gray-700 px-6 text-center text-md md:text-lg lg:text-lg">
        79% of Nigerians prefer our 'Gift Intent' model over plain transfers.
      </p>

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