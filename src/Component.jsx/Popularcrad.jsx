
import { motion } from "framer-motion";
import { RiTimeFill } from "react-icons/ri";
import { MdOutlineFoodBank } from "react-icons/md";

export const Popularcard = (props) => {
  const { link, name, category } = props.current;

  return (
    <motion.section
      className="flex flex-col w-[300px] rounded-xl border-[1px] p-3 gap-3 bg-[#f0f2f3]"
      initial={{ opacity: 0, y: 10 }}  // Start off with no opacity and slightly below
      whileInView={{ opacity: 1, y: 0 }}  // Fade in when the card comes into view
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{
        scale: 1.05, // Scale effect on hover
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Shadow effect on hover
      }}
      viewport={{ }}  // Animation triggers only once when the element comes into view
    >
      <img
        src={link}
        className="w-[96%] h-[150px] m-auto rounded-xl"
        alt={name}
      />

      <h1 className="text-xl font-serif font-semibold">{category}</h1>

      <div className="flex gap-5">
        <p className="flex justify-center items-center font-serif">
          <RiTimeFill /> 30 Minutes
        </p>
        <p className="flex justify-center items-center font-semibold">
          <MdOutlineFoodBank /> {name}
        </p>
      </div>
    </motion.section>
  );
};





