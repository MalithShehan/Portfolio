import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from "react-icons/ai";
import {
    DiCss3,
    DiHtml5,
    DiJava,
    DiJavascript,
    DiJavascript1,
    DiNodejsSmall,
    DiPhotoshop,
    DiPython,
    DiReact,
} from "react-icons/di";
import { FiFigma } from "react-icons/fi";

const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left"
                >
                    <TypeAnimation
                        sequence={[
                            "Frontend Developer",
                            1000,
                            "Web Developer",
                            1000,
                            "Mobile App Developer",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-lg sm:text-xl md:text-3xl italic mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
                    >
                        HEY, I'M <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">
                            MALITH SHEHAN
                        </span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-md mx-auto md:mx-0 text-base sm:text-lg md:text-2xl mb-6"
                    >
                        I'M STILL FOLLOWING DIPLOMA IN SOFTWARE ENGINEERING AT IJSE
                    </motion.p>

                    {/* Download CV Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <a
                            href="src\assets\cv\Malith Shehan CV.pdf"
                            download
                            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-6 sm:px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            Download CV
                        </a>

                        {/* Social Media Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2 }}
                            className="flex justify-center md:justify-start flex-wrap gap-4 mt-6"
                        >
                            <a
                                href="https://www.facebook.com/profile.php?id=100021818805499"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:scale-110 transition-transform duration-300"
                            >
                                <AiOutlineFacebook size={40} />
                            </a>
                            <a
                                href="https://github.com/MalithShehan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:scale-110 transition-transform duration-300"
                            >
                                <AiOutlineGithub size={40} />
                            </a>
                            <a
                                href="https://www.instagram.com/malith__shehan__/?next=%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:scale-110 transition-transform duration-300"
                            >
                                <AiOutlineInstagram size={40} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/malith-shehan-95b506279/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:scale-110 transition-transform duration-300"
                            >
                                <AiOutlineLinkedin size={40} />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Image Section */}
                <div className="relative flex justify-center items-center">
                    {/* Glow Circle */}
                    <motion.div
                        className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-pulse opacity-70 blur-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    ></motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={profilepic}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2.5 }}
                className="flex flex-wrap justify-center items-center gap-4 mt-16"
            >
                <p className="text-gray-200 text-xl sm:text-2xl font-semibold w-full text-center mb-4">
                    My Tech Stack
                </p>
                {[ 
                    <DiHtml5 className="text-orange-600" />,
                    <DiCss3 className="text-blue-600" />,
                    <DiJavascript1 className="text-yellow-500" />,
                    <DiNodejsSmall className="text-green-600" />,
                    <DiPython className="text-blue-500" />,
                    <DiReact className="text-blue-400" />,
                    <DiJavascript className="text-yellow-500" />,
                    <DiJava className="text-green-500" />,
                    <FiFigma className="text-blue-500" />,
                    <DiPhotoshop className="text-yellow-500" />
                ].map((Icon, i) => (
                    <span key={i} className="text-5xl sm:text-6xl md:text-7xl">{Icon}</span>
                ))}
            </motion.div>
        </div>
    );
};

export default Hero;
