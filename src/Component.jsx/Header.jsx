

import "./header.css";

import { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion"; // Importing Framer Motion
import { NavLink } from "react-router-dom";



export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mb-12">
      <section className="flex h-16 w-full bg-white text-black justify-between items-center px-6 md:px-12 font-medium font-serif">
        {/* Logo */}
        <div className="logo font-bold text-2xl">
          <h1>Delish</h1>
        </div>

        {/* Hamburger Menu for Mobile with Animation */}
        <motion.div
          className="md:hidden cursor-pointer"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0 }} // Rotates when clicked
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu className="text-3xl" />
        </motion.div>

        {/* Desktop Navigation (Always Visible) */}
        <nav className="hidden md:flex items-center gap-9">
          <ul className="flex gap-9 text-lg font-medium">
            <NavLink
              to="/"
              className="hover:text-[#49cfe6] active:text-blue-500"
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className="hover:text-[#54d6ed] active:text-blue-500"
            >
              About
            </NavLink>
            <NavLink
              to="/Best-sales"
              className="hover:text-[#5dd9ef] active:text-blue-500"
            >
              Best Sales
            </NavLink>
            <NavLink
              to="/Contact"
              className="hover:text-[#56d1e7] active:text-blue-500"
            >
              Contact
            </NavLink>
          </ul>
        </nav>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ul className="flex flex-col gap-4 text-lg font-medium">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#49cfe6] hover:text-white px-4 py-2 rounded-lg text-center active:bg-blue-500 active:text-white"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/About"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#54d6ed] hover:text-white px-4 py-2 rounded-lg text-center active:bg-blue-500 active:text-white"
                >
                  About
                </NavLink>
                <NavLink
                  to="/Best-sales"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#5dd9ef] hover:text-white px-4 py-2 rounded-lg text-center active:bg-blue-500 active:text-white"
                >
                  Best Sales
                </NavLink>
                <NavLink
                  to="/Contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-[#56d1e7] hover:text-white px-4 py-2 rounded-lg text-center active:bg-blue-500 active:text-white"
                >
                  Contact
                </NavLink>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Social Icons */}
        <div className="hidden md:flex gap-5 text-2xl">
         <a href="https://instagram.com/thapatechnical" target="_blank"><IoLogoFacebook /></a>
          <a href=""><FaInstagramSquare /></a>
          <a href=""><AiFillTikTok /></a>
        </div>
      </section>
    </header>
  );
};







