import React from "react";
import  chatApp from "../assets/chat-app.jpg";
import cropMonitoring from "../assets/crop-monitoring.jpg";
import library from "../assets/library.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal.jsx";
import { motion } from "framer-motion";

const projects = [
    {
        img: cropMonitoring,
        title: "Project #1",
        description:
            "The Crop Monitoring System is a comprehensive solution designed to help manage and monitor crop health, field conditions, and agricultural operations. This system provides users with insights into crop performance, enabling better decision-making for improved productivity and resource management.",
        links: {
            site: "#",
            github: "https://github.com/MalithShehan/Crop-monitoring-system.git",
        },
    },
    {
        img: library,
        title: "Project #2",
        description:
            "The RAD Final Project is a full-stack application developed as part of the Mobile Application Developer course. It is designed to serve as a library management system, allowing users to efficiently manage books, users, and borrow/return transactions.",
        links: {
            site: "#",
            github: "https://github.com/MalithShehan/RAD-Final-Project.git",
        },
    },
    {
        img: chatApp,
        title: "Project #4",
        description:
            "A real-time Chat Application with secure authentication and seamless messaging across devices.",
        links: {
            site: "#",
            github: "https://github.com/MalithShehan/chat_application-Malith_Shehan-GDSE-68.git",
        },
    },
];

const Portfolio = () => {
    return (
        <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
            <motion.h2
                className="text-4xl font-bold text-gray-200 mb-10 text-center"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Projects
            </motion.h2>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <Reveal key={index}>
                        <motion.div
                            className={`flex flex-col md:flex-row ${
                                index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 p-4">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                                <h3 className="text-3xl font-semibold text-gray-200 mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-6">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.links.site}
                                        className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition duration-300 shadow-md"
                                    >
                                        View Site
                                    </a>
                                    <a
                                        href={project.links.github}
                                        className="px-6 py-2 flex items-center bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
                                    >
                                        <AiOutlineGithub className="mr-2 text-lg" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
