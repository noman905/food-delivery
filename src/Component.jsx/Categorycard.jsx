


import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Categorycard = (props) => {
  const { link, name, color } = props.current;

  return (
    <motion.div
      className={`w-[41vw] sm:w-[170px] md:w-[200px] lg:w-[220px] xl:w-[200px] relative flex flex-col justify-between border-[5px] p-[4px] items-center rounded-xl`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05, // Slight scale effect on hover
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Add shadow on hover
      }}
    >
      <img
        src={link}
        className="w-full h-[150px] sm:h-[150px] md:h-[160px] lg:h-[170px] xl:h-[180px] rounded-xl bg-gray-300"
        alt={name}
      />

      <NavLink className="w-full" to={`/${name}`}>
        <motion.button
          className="text-lg sm:text-xl md:text-2xl font-[530] font-serif bg-[#a9e8f5] w-full rounded-lg"
          whileHover={{ backgroundColor: "#76d7f8", scale: 1.05 }} // Change background color and scale on hover
        >
          {name}
        </motion.button>
      </NavLink>
    </motion.div>
  );
};






