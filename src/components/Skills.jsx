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
        description: "Component-driven interfaces with focus on animation, accessibility, and performance.",
        technologies: [
            { name: "HTML", icon: <DiHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <DiCss3 className="text-blue-500" /> },
            { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-400" /> },
            { name: "React", icon: <DiReact className="text-cyan-400" /> },
            { name: "Tailwind", icon: <DiCss3 className="text-teal-400" /> },
            { name: "Flutter", icon: <DiReact className="text-blue-400" /> },
            
        ],
        tools: ["Tailwind", "Framer Motion", "Vite"],
    },
    {
        category: "Backend & Dev Tools",
        description: "Lightweight APIs, database modeling, and developer tooling that supports fast iteration.",
        technologies: [
            { name: "Node", icon: <DiNodejsSmall className="text-green-400" /> },
            { name: "Express", icon: <DiNodejsSmall className="text-green-500" /> },
            { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
            { name: "MySQL", icon: <DiMysql className="text-orange-400" /> },
            { name: "Python", icon: <DiJavascript1 className="text-yellow-600" /> },
            { name: "Java", icon: <DiJavascript1 className="text-red-400" /> },
            { name: "Firebase", icon: <DiMongodb className="text-yellow-400" /> },
        ],
        tools: ["REST", "Git", "TypeScript"],
    },
];

const Skills = () => {
    return (
        <section className="max-w-[1100px] mx-auto px-6 py-20" id="skills">
            <Reveal width="100%">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <span className="badge-pill">Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-semibold mt-5">
                        A balanced stack to move from idea to polished product.
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Frontend craft, backend fundamentals, and collaboration habits that keep teams shipping.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 mt-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="section-shell p-8"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-semibold">{skill.category}</h3>
                                <div className="text-sm text-gray-400 uppercase tracking-[0.3em]">Core</div>
                            </div>
                            <p className="mt-4 text-gray-300 leading-relaxed">{skill.description}</p>
                            <div className="soft-divider my-6" />

                            <div className="grid grid-cols-2 gap-6">
                                {skill.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex items-center gap-3 text-lg font-medium"
                                    >
                                        <span className="text-4xl">{tech.icon}</span>
                                        {tech.name}
                                    </div>
                                ))}
                            </div>

                            <div className="soft-divider my-6" />
                            <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Tooling</p>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {skill.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-4 py-2 rounded-full bg-white/5 text-sm text-gray-200"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
};

export default Skills;
