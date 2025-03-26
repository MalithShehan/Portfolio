import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: "-100%",
            opacity: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-lg z-50 shadow-lg">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center px-8 md:px-12 h-20 text-gray-200">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold tracking-wide hover:text-indigo-400">
                    Malith Shehan
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-lg font-medium cursor-pointer">
                    <li className="hover:text-indigo-400">
                        <Link to="skills" smooth={true} offset={50} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="hover:text-indigo-400">
                        <Link to="projects" smooth={true} offset={50} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className="hover:text-indigo-400">
                        <Link to="contact" smooth={true} offset={50} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div onClick={toggleNav} className="md:hidden cursor-pointer text-gray-200">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                {/* Mobile Dropdown */}
                <motion.div
                    initial={false}
                    animate={nav ? "open" : "closed"}
                    variants={menuVariants}
                    className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40 p-8 md:hidden"
                >
                    <ul className="flex flex-col space-y-10 mt-20 text-center text-lg font-semibold">
                        <li>
                            <Link to="skills" onClick={closeNav} smooth={true} offset={50} duration={500} className="hover:text-indigo-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" onClick={closeNav} smooth={true} offset={50} duration={500} className="hover:text-indigo-400">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500} className="hover:text-indigo-400">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;
