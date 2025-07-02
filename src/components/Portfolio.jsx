import React from "react";
import cropMonitoring from "../assets/crop-Monitoring.jpg";
import chatApp from "../assets/chat-app.jpg";
import library from "../assets/library.png";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Reveal from "./Reveal.jsx";
import { motion } from "framer-motion";

const projects = [
  {
    img: cropMonitoring,
    title: "Crop Monitoring System",
    description:
      "A comprehensive solution to monitor crop health and field conditions, helping to improve productivity and resource management.",
    links: {
      site: "#",
      github: "https://github.com/MalithShehan/Crop-monitoring-system.git",
    },
  },
  {
    img: library,
    title: "Library Management System",
    description:
      "Full-stack app for managing books, users, and borrow/return transactions, developed as a mobile app course final project.",
    links: {
      site: "#",
      github: "https://github.com/MalithShehan/RAD-Final-Project.git",
    },
  },
  {
    img: chatApp,
    title: "Real-time Chat Application",
    description:
      "Secure and seamless messaging app with real-time sync across devices and user authentication.",
    links: {
      site: "#",
      github: "https://github.com/MalithShehan/chat_application-Malith_Shehan-GDSE-68.git",
    },
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="max-w-[1100px] mx-auto px-6 py-20"
      aria-label="Portfolio Projects"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-200 mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        My <span className="text-primary-color">Projects</span>
      </motion.h2>

      <div className="flex flex-col gap-16">
        {projects.map((project, i) => {
          const isOdd = i % 2 !== 0;
          return (
            <Reveal key={i}>
              <motion.article
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isOdd ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-200 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
                      aria-label={`View live site of ${project.title}`}
                    >
                      <AiOutlineLink className="mr-2 text-xl" />
                      View Site
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                      aria-label={`View GitHub repository of ${project.title}`}
                    >
                      <AiOutlineGithub className="mr-2 text-xl" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
