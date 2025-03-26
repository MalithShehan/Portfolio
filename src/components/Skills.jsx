import React from "react";
import {
    DiCss3,
    DiGithub,
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
        category: "Frontend",
        technologies: [
            { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
            { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
            { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-600" /> },
            { name: "React", icon: <DiReact className="text-blue-500" /> },
        ],
    },
    {
        category: "Backend",
        technologies: [
            { name: "NodeJS", icon: <DiNodejsSmall className="text-green-500" /> },
            { name: "Express", icon: <DiNodejsSmall className="text-green-600" /> },
            { name: "MySQL", icon: <DiMysql className="text-orange-500" /> },
            { name: "MongoDB", icon: <DiMongodb className="text-green-400" /> },
        ],
    },
];

const Skills = () => {
    return (
        <div
            className="max-w-[900px] mx-auto flex flex-col justify-center px-6 py-12 text-gray-200"
            id="skills"
        >
            <Reveal>
                <motion.h2
                    className="text-4xl font-extrabold mb-8 text-center text-gradient bg-gradient-to-r"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Skills
                </motion.h2>
                <motion.p
                    className="text-center text-gray-300 mb-12 text-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    I’ve worked on various frontend and backend projects using diverse technologies.
                    Check out my projects{" "}
                    <a
                        href="#"
                        className="text-purple-400 hover:text-purple-600 underline transition-colors"
                    >
                        here
                    </a>
                    .
                </motion.p>

                <div className="grid md:grid-cols-2 gap-10">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="group border border-purple-800 p-8 rounded-2xl bg-gradient-to-br from-purple-800/20 to-gray-800 shadow-lg transform transition duration-300 hover:scale-105"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-center text-white group-hover:text-purple-400 transition-colors">
                                {skill.category}
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {skill.technologies.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="flex flex-col items-center space-y-2 text-center group-hover:text-purple-400 transition-colors"
                                    >
                                        <motion.span
                                            className="text-4xl"
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            {tech.icon}
                                        </motion.span>
                                        <span className="text-lg font-medium">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Reveal>
        </div>
    );
};

export default Skills;
