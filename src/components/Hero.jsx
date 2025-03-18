import React from "react";
// import profilepic from " .. /assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
// import ShinyEffect from "./ShinyEffect";
// import {
//     AiOutlineGithub,
//     AiOutlineInstagram,
//     AiOutlineLinkedin,
// } from "react-icons/ai";
// import {
//     DiCss3,
//     DiHtm15,
//     DiJavascript1,
//     DiNodejsSmall,
//     DiReact,
// } from "react-icons/di";
import { motion } from "framer-motion";

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

                    >
                        <motion.button whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(0,0,0,0.3)' }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
                        >
                            Download CV
                        </motion.button>

                    </motion.p>

                </motion.div>
            </div>

        </div>
    )
}

export default Hero;