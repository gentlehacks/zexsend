"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  category: string;
  comment: string;
  image: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, category, comment, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-gray-50/80 backdrop-blur-sm border border-gray-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-blue-100 transition-all duration-300 group relative"
    >
      <div>
        {/* Quote Icon Accent */}
        <div className="absolute top-8 right-8 text-blue-200/60 group-hover:text-blue-300 transition-colors">
          <Quote className="w-10 h-10 rotate-180" />
        </div>

        {/* Comment */}
        <p className="text-gray-700 text-lg leading-relaxed italic relative z-10 mb-8">
          &quot;{comment}&quot;
        </p>
      </div>

      {/* User Info Row */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200/60">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-600/20 group-hover:border-blue-600 transition-colors">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg text-black">{name}</h3>
          <p className="text-sm font-medium text-blue-600">{category}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;