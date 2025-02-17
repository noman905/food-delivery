import { motion } from "framer-motion";

export const About = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{}} // Triggers every time the component comes into view
        className="flex flex-col md:flex-row justify-around items-center m-4 mb-14 mt-14"
      >
        {/* Image Section */}
        <div className="group flex justify-center md:justify-start">
          <img
            src="./about/aboutimage.webp"
            alt="about"
            className="rounded-[300px] w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw]"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 p-5 w-full md:w-[50vw] lg:w-[40vw]">
          <h1 className="text-4xl md:text-5xl font-semibold text-center md:text-left">
            About Us
          </h1>
          <p className="text-justify text-base sm:text-lg font-normal font-serif">
            <span className="text-[#1dddff]">
              At Delice, we make enjoying great food easy by delivering your
            </span>{" "}
            favorite meals straight to your door. We partner with top local
            restaurants to offer a wide variety of options, ensuring you never{" "}
            <span className="text-[#1dddff]">run out of choices.</span> Fast,
            reliable, and delicious — that's our promise to you. Thank you for
            choosing us!{" "}
            <span className="text-[#30e0ff]">
              With a user-friendly app and reliable delivery team,
            </span>{" "}
            we’re committed to bringing you an effortless and enjoyable food
            experience, every time. We believe in convenience.
          </p>
        </div>
      </motion.section>
    </>
  );
};




