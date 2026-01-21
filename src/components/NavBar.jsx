import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "portfolio" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

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
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050612]/70 backdrop-blur-2xl"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 md:px-10 h-20 text-gray-100">
        <a href="#" className="flex flex-col leading-tight">
          <span className="text-sm tracking-[0.4em] uppercase text-gray-400">Portfolio</span>
          <span className="text-2xl font-semibold tracking-tight">Malith Shehan</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <li key={item.id} className="hover:text-white/80 transition">
              <Link to={item.id} smooth offset={-80} duration={600}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="contact"
            smooth
            offset={-60}
            duration={600}
            className="glass-button text-sm font-semibold"
          >
            Let's talk
          </Link>
        </div>

        <button
          onClick={toggleNav}
          className="md:hidden text-gray-100"
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
            className="fixed top-0 left-0 w-full min-h-screen bg-[#03030c] p-10 md:hidden z-40"
          >
            <ul className="flex flex-col space-y-10 mt-24 text-center text-xl font-semibold tracking-[0.2em]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    onClick={closeNav}
                    smooth
                    offset={-60}
                    duration={600}
                    className="hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="contact"
                  onClick={closeNav}
                  smooth
                  offset={-60}
                  duration={600}
                  className="inline-flex items-center justify-center w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-black"
                >
                  Let's talk
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
