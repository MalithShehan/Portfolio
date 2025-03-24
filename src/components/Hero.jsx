import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from "react-icons/ai";
import {DiHtml5, DiJavascript1, DiNodejsSmall} from "react-icons/di";
import ShinyEffect from "./ShinyEffect.jsx";

const Hero = () => {
    return (
        <div className='mt-24 max-w-[1200px] mx-auto position-relative'>
            <div className='grid md:grid-cols-2 place-items-center gap-8'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once: true}}
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
                        className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{once: true}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                    >
                        HEY, I'M <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white"
                        >MALITH SHEHAN</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{once: true}}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        I'M STILL FOLLOWING DIPLOMA IN SOFTWARE ENGINEERING AT IJSE
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{once: true}}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-row items-center gap-6 my-4 md:mb-0"
                    >
                        <motion.button whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(0,0,0,0.3)' }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
                        >
                            Download CV
                        </motion.button>

                        <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                            <motion.a whileHover={{ scale: 1.2 }} href="#">
                                <AiOutlineGithub/>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="#">
                                <AiOutlineLinkedin/>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="#">
                                <AiOutlineFacebook/>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.2 }} href="#">
                                <AiOutlineInstagram/>
                            </motion.a>

                        </div>

                    </motion.p>
                </motion.div>

                <div className="relative flex justify-center items-center">
                    {/* Circle 1 - Top Left */}
                    <motion.div
                        className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full"
                        style={{ backgroundColor: 'rgba(255, 111, 97, 0.3)' }} /* Red-Orange with transparency */
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>

                    {/* Circle 2 - Bottom Right */}
                    <motion.div
                        className="absolute bottom-[-50px] right-[-50px] w-[400px] h-[400px] rounded-full"
                        style={{ backgroundColor: 'rgba(255, 213, 79, 0.3)' }} /* Golden Yellow with transparency */
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    ></motion.div>

                    {/* Circle 3 - Center */}
                    <motion.div
                        className="absolute w-[500px] h-[500px] rounded-full"
                        style={{ backgroundColor: 'rgba(79, 195, 247)' }} /* Sky Blue with transparency */
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    ></motion.div>

                    {/* Profile Image */}
                    <motion.img
                        src={profilepic}
                        className="relative w-[300px] md:w-[450px] rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 2 }}
                    className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
                >
                    <p className="text-gray-200 mr-6">My Tech Stack</p>
                    <DiHtml5 className="text-orange-600 mx-2"/>
                    <DiHtml5 className="text-blue-600 mx-2"/>
                    <DiJavascript1 className="text-yellow-500 mx-2"/>
                    <DiNodejsSmall className="text-green-600 mx-2"/>
                </motion.div>

                <div className="absolute inset-0 hidden md:block">
                    <ShinyEffect left={0} top={0} size={1400}/>
                </div>

            </div>



        </div>
    )
}

export default Hero;