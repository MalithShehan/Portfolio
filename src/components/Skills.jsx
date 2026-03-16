import React from "react";
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiMongodb,
    DiMysql,
    DiNodejsSmall,
    DiReact,
} from "react-icons/di";
import Reveal from "./Reveal.jsx";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend Engineering",
        description: "I craft fast, component-driven interfaces with strong UX structure, smooth interactions, and maintainable design systems.",
        technologies: [
            { name: "HTML", icon: <DiHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <DiCss3 className="text-blue-500" /> },
            { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400" /> },
            { name: "React", icon: <DiReact className="text-cyan-400" /> },
            { name: "Tailwind", icon: <DiCss3 className="text-teal-400" /> },
            { name: "Flutter", icon: <DiReact className="text-blue-400" /> },
            
        ],
        tools: ["Tailwind", "Framer Motion", "Vite", "Figma"],
    },
    {
        category: "Backend & Dev Tools",
        description: "I build practical backend services and data layers for shipping MVPs, dashboards, and production-ready internal tools.",
        technologies: [
            { name: "Node", icon: <DiNodejsSmall className="text-green-400" /> },
            { name: "Express", icon: <DiNodejsSmall className="text-green-500" /> },
            { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
            { name: "MySQL", icon: <DiMysql className="text-orange-400" /> },
            { name: "Python", icon: <DiJavascript1 className="text-yellow-600" /> },
            { name: "Java", icon: <DiJavascript1 className="text-red-400" /> },
            { name: "Firebase", icon: <DiMongodb className="text-yellow-400" /> },
        ],
        tools: ["REST APIs", "Git", "TypeScript", "Postman"],
    },
];

const Skills = () => {
    return (
        <section className="max-w-[1100px] mx-auto px-4 sm:px-6 py-14 sm:py-20" id="skills">
            <Reveal width="100%">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <span className="badge-pill">Capabilities</span>
                    <h2 className="text-3xl md:text-5xl font-semibold mt-4 sm:mt-5 leading-tight">
                        A balanced engineering toolkit from UX concept to live deployment.
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-cyan-50/75">
                        My work combines technical depth and product thinking, so interfaces are not only beautiful but genuinely useful.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mt-10 sm:mt-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="section-shell p-5 sm:p-8"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl sm:text-2xl font-semibold">{skill.category}</h3>
                                <div className="text-xs sm:text-sm text-cyan-100/70 uppercase tracking-[0.2em] sm:tracking-[0.3em]">Core</div>
                            </div>
                            <p className="mt-3 sm:mt-4 text-cyan-50/80 leading-relaxed text-sm sm:text-base">{skill.description}</p>
                            <div className="soft-divider my-6" />

                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                {skill.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-medium text-cyan-50"
                                    >
                                        <span className="text-3xl sm:text-4xl">{tech.icon}</span>
                                        {tech.name}
                                    </div>
                                ))}
                            </div>

                            <div className="soft-divider my-6" />
                            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-cyan-100/60">Tooling</p>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {skill.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 sm:px-4 py-2 rounded-full bg-white/5 text-xs sm:text-sm text-cyan-50/85"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-10 text-center">
                    <p className="text-sm md:text-base text-cyan-100/70 tracking-normal sm:tracking-wide">
                        Also experienced with Agile teamwork, Git workflows, and rapid prototype-to-production cycles.
                    </p>
                </div>
            </Reveal>
        </section>
    );
};

export default Skills;
