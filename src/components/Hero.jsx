import React from "react";
import profilepic from "../assets/profpic.png";
import cvFile from "../assets/cv/Malith Shehan CV.pdf";
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

const stats = [
    { label: "Projects", value: "15+" },
    { label: "Years Learning", value: "02" },
    { label: "Focus", value: "Full-stack" },
];

const socialLinks = [
    { icon: <AiOutlineGithub size={28} />, url: "https://github.com/MalithShehan" },
    { icon: <AiOutlineLinkedin size={28} />, url: "https://www.linkedin.com/in/malith-shehan-95b506279/" },
    { icon: <AiOutlineInstagram size={28} />, url: "https://www.instagram.com/malith__shehan__/?next=%2F" },
    { icon: <AiOutlineFacebook size={28} />, url: "https://www.facebook.com/profile.php?id=100021818805499" },
];

const techIcons = [
    <DiHtml5 className="text-orange-500" />,
    <DiCss3 className="text-blue-500" />,
    <DiJavascript1 className="text-yellow-400" />,
    <DiNodejsSmall className="text-green-500" />,
    <DiReact className="text-cyan-400" />,
    <DiJava className="text-red-400" />,
    <DiPython className="text-blue-300" />,
    <DiPhotoshop className="text-slate-100" />,
    <DiJavascript className="text-yellow-400" />,
    <FiFigma className="text-pink-400" />,
];

const Hero = () => {
    return (
        <section className="mt-32 md:mt-40 max-w-[1200px] mx-auto px-6" id="hero">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <span className="badge-pill">Based in Sri Lanka</span>

                    <div>
                        <TypeAnimation
                            sequence={["Frontend Engineer", 1400, "Creative Developer", 1400, "UI Collaborator", 1400]}
                            speed={50}
                            repeat={Infinity}
                            className="text-lg uppercase tracking-[0.4em] text-gray-400"
                        />
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-5">
                            Crafting thoughtful digital products & delightful experiences.
                        </h1>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                        I am a software engineering student at IJSE focusing on full-stack solutions, combining
                        strong fundamentals with product thinking to ship polished, performant interfaces.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={cvFile}
                            download
                            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-black bg-gradient-to-r from-purple-500 to-cyan-400"
                        >
                            Download résumé
                        </a>
                        <a
                            href="#portfolio"
                            className="glass-button text-base font-semibold"
                        >
                            View projects
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-6 items-center">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl font-semibold">{stat.value}</p>
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-400/20 blur-3xl rounded-full" />
                    <div className="section-shell p-6">
                        <div className="rounded-[26px] overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-white/0">
                            <img
                                src={profilepic}
                                alt="Malith Shehan"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-300">
                            <div>
                                <p className="text-gray-500">Current Focus</p>
                                <p className="text-white font-semibold">Full-stack product builds</p>
                            </div>
                            <div>
                                <p className="text-gray-500">Learning Track</p>
                                <p className="text-white font-semibold">Graduate Diploma @ IJSE</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-16 section-shell px-6 py-8"
            >
                <p className="text-sm uppercase tracking-[0.5em] text-gray-400 text-center mb-6">
                    Tools I am fluent in
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-4xl sm:text-5xl text-white">
                    {techIcons.map((icon, index) => (
                        <span key={index} className="opacity-80">{icon}</span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
