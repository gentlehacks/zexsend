"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-50 w-full min-h-screen flex flex-col items-center mx-auto pt-10 p-8">
      <Image 
        src="/404.svg"
        alt="Not found"
        width={100}
        height={100}
        priority
        className="w-[70%] sm:w-[50%] md:w-[35%] lg:w-[25%] max-w-[30rem]"
      />
      <motion.button onClick={() => router.back()}
        initial={{scale: 1, y: 0}} 
        whileTap={{y: [1, 0], scale: 1.1}}
        whileHover={{y: 1}}
      className="w-[90%] max-w-[15rem] bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl mt-15">
        Go Back
      </motion.button>
    </div>
  )
}

export default NotFound