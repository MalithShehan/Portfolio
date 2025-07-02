import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 12 },
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-lg z-50 shadow-lg"
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-6 md:px-12 h-20 text-gray-200">
        {/* Logo */}
        <a href="#" className="text-2xl font-thin tracking-wide hover:text-indigo-400">
          Malith Shehan
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {["skills", "projects", "contact"].map((item) => (
            <li key={item} className="hover:text-indigo-400 cursor-pointer">
              <Link to={item} smooth offset={50} duration={500}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={toggleNav}
          className="md:hidden text-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed top-0 left-0 w-full min-h-screen bg-gray-900 p-8 md:hidden z-40"
          >
            <ul className="flex flex-col space-y-10 mt-20 text-center text-lg font-semibold">
              {["skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    onClick={closeNav}
                    smooth
                    offset={50}
                    duration={500}
                    className="hover:text-indigo-400"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
