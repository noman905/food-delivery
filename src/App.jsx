
import { Hero } from "./Component.jsx/hero";
import { Categories } from "./Component.jsx/categories";
import { Bestsales } from "./Component.jsx/Popular";
import { Peoplechoose } from "./Component.jsx/Peoplechoose";
import { Inbox } from "./Component.jsx/Inbox";
import { Dessert } from "./Category.jsx/dessertca/dessert";
import { Breakfast } from "./Category.jsx/Breakfast/Breakfast";

import { About } from "./Category.jsx/About/About";
import { motion } from "framer-motion";

export const App = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ }}
      >
      <Hero />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ }}
      >
        <Categories />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{  }}
      >
        <Peoplechoose />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ }}
      >
        <Bestsales />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ }}
      >
        <Breakfast />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ }}
      >
        <Dessert />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ }}
      >
        <About />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ }}
      >
        <Inbox />
      </motion.section>
    </>
  );
};