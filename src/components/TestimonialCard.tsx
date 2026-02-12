"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";

interface TestimonialCardProps {
  id: number;
  name: string;
  category: string;
  comment: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ id, name, category, comment, image }) => {
  return (

    <AnimatePresence>
      <motion.div key={id} className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mx-auto"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{  }}
        transition={{ duration: 0.5, delay: id * 0.2 }}
      >
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          priority={true}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <div className="text-center">
          <p className="text-gray-600 italic">"{comment}"</p>
          <h3 className="text-lg font-semibold mt-4">{name}</h3>
          <p className="text-gray-500">{category}</p>
        </div>
      </motion.div>
    </AnimatePresence>

  );
};



export default TestimonialCard;