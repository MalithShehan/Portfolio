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
    AiOutlineArrowRight,
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
    { label: "Completed Projects", value: "15+" },
    { label: "Years Building", value: "2+" },
    { label: "Current Role", value: "Software Engineer" },
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
                            sequence={["Software Engineer", 1400, "Frontend Specialist", 1400, "Full-stack Builder", 1400]}
                            speed={50}
                            repeat={Infinity}
                            className="text-sm md:text-base uppercase tracking-[0.35em] text-cyan-100/80"
                        />
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mt-5">
                            I design and build production-ready web experiences that feel premium and perform fast.
                        </h1>
                    </div>

                    <p className="text-lg text-cyan-50/80 leading-relaxed max-w-xl">
                        I am Malith Shehan, a software engineering student at IJSE and an intern at Sri Lanka Telecom.
                        I focus on building clean interfaces, scalable systems, and practical digital products for real users.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={cvFile}
                            download
                            className="accent-button"
                        >
                            Download Resume
                        </a>
                        <a
                            href="#portfolio"
                            className="glass-button text-base font-semibold inline-flex items-center gap-2"
                        >
                            View projects
                            <AiOutlineArrowRight />
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-6 items-center">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 hover:-translate-y-0.5 transition"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-3xl font-semibold">{stat.value}</p>
                                <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">{stat.label}</p>
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
                    <div className="absolute -inset-6 bg-gradient-to-r from-[#1ab8a8]/25 via-transparent to-[#f8ba50]/25 blur-3xl rounded-full" />
                    <div className="section-shell p-6">
                        <div className="rounded-[26px] overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-white/0">
                            <img
                                src={profilepic}
                                alt="Malith Shehan"
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-cyan-50/80">
                            <div>
                                <p className="text-cyan-200/60">Current Focus</p>
                                <p className="text-white font-semibold">Full-stack developper</p>
                            </div>
                            <div>
                                <p className="text-cyan-200/60">Learning Track</p>
                                <p className="text-white font-semibold">GDSE at IJSE</p>
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
                <p className="text-sm uppercase tracking-[0.5em] text-cyan-100/70 text-center mb-6">
                    Tools I work with
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
