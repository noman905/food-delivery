



import { motion } from "framer-motion";

export const Choosecard = ({ current }) => {
  const { link, reason, ready, bigreason } = current;

  return (
    <motion.section
      className="flex flex-col items-center rounded-[8px] sm:rounded-xl border-[2px] border-black p-3
                 w-[48%] sm:w-[48%] md:w-[45%] lg:w-[30%] xl:w-[24%] 
                 h-[220px] sm:h-[280px] md:h-[290px] lg:h-[300px] 
                 mx-auto mb-3"
      initial={{ opacity: 0, y: 10 }} // Initial opacity and y position (slight move up)
      whileInView={{ opacity: 1, y: 0 }} // On view, set opacity to 1 and move back to original position
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      viewport={{ once: false }} // The animation triggers every time it comes into view
      whileHover={{
        scale: 1.05, // Slightly scale up the card on hover
        transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition for scaling
      }}
    >
      {/* Image Container - No Cropping */}
      <div className="w-full relative overflow-hidden rounded-md sm:rounded-lg"
           style={{ height: "55%" }}> 
        <img
          src={link}
          alt={bigreason}
          className=" h-[119%]   w-full sm:h-[110%] object-contain"
        />
      </div>

      {/* Heading - Big Reason (Bold) */}
      <h1 className="text-sm sm:text-base md:text-lg font-bold font-serif mt-2 text-center">
        {bigreason}
      </h1>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base font-serif mt-1 text-justify px-2">
        {reason}
      </p>

      {/* Button */}
      <button
        className="mt-2 text-xs sm:text-sm md:text-base font-medium font-serif bg-[#94e9fa]
                   w-full sm:w-3/4 rounded-md py-1"
      >
        {ready}
      </button>
    </motion.section>
  );
};
