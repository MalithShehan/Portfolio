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
    DiCss3, DiExtjs,
    DiHtml5,
    DiJava,
    DiJavascript,
    DiJavascript1,
    DiNodejsSmall, DiPhotoshop,
    DiPython,
    DiReact,
    DiTypo3
} from "react-icons/di";
import {FiFigma} from "react-icons/fi";

const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto position-relative">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Frontend Developer",
                            1000,
                            "Web Developer",
                            1000,
                            "Mobile App Developer",
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
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
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
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
                            href="../assets/cv/Malith%20Shehan%20CV.pdf"
                            download
                            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            Download CV
                        </a>

                        {/* Social Media Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 2 }}
                            className="flex items-center gap-6 mt-8"
                        >
                            <a
                                href="https://www.facebook.com/profile.php?id=100021818805499"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:scale-110 transition-transform duration-300"
                            >
                                <AiOutlineFacebook size={50} />
                            </a>
                            <a
                                href="https://github.com/MalithShehan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 hover:scale-110 transition-transform duration-300"
                            >
                                <AiOutlineGithub size={50} />
                            </a>
                            <a
                                href="https://www.instagram.com/malith__shehan__/?next=%2F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:scale-110 transition-transform duration-300"
                            >
                                <AiOutlineInstagram size={50} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/malith-shehan-95b506279/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:scale-110 transition-transform duration-300"
                            >
                                <AiOutlineLinkedin size={50} />
                            </a>
                        </motion.div>
                    </motion.div>

                </motion.div>

                {/* Image and Styles Section */}
                <div className="relative flex justify-center items-center">
                    {/* Outer Glow */}
                    <motion.div
                        className="absolute w-[510px] h-[510px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-pulse opacity-70 blur-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    ></motion.div>

                    {/* Profile Image Container */}
                    <motion.div
                        className="relative w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Profile Image */}
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
                className="flex flex-row text-7xl px-17 md:px-0 w-full justify-center items-center py-24"
            >
                <p className="text-gray-200 mr-6">My Tech Stack</p>
                <DiHtml5 className="text-orange-600 mx-2" />
                <DiCss3 className="text-blue-600 mx-2" />
                <DiJavascript1 className="text-yellow-500 mx-2" />
                <DiNodejsSmall className="text-green-600 mx-2" />
                <DiPython className="text-blue-500 mx-2" />
                <DiReact className="text-blue-400 mx-2" />
                <DiJavascript className="text-yellow-500 mx-2" />
                <DiJava className="text-green-500 mx-2" />
                <FiFigma className="text-blue-500 mx-2" />
                <DiPhotoshop className="text-yellow-500 mx-2" />
            </motion.div>
        </div>
    );
};

export default Hero;
