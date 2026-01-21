import React from "react";
import cropMonitoring from "../assets/crop-monitoring.jpg";
import chatApp from "../assets/chat-app.jpg";
import library from "../assets/library.png";
import southlankafireworkswebsite from "../assets/southlankafireworkswebsite.jpg";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Reveal from "./Reveal.jsx";
import { motion } from "framer-motion";

const projects = [
  {
    img: cropMonitoring,
    title: "Crop Monitoring Platform",
    description:
      "Dashboards for plantation teams to interpret soil data, watering schedules, and remote drone captures.",
    links: {
      site: "#",
      github: "https://github.com/MalithShehan/Crop-monitoring-system.git",
    },
    stack: ["React", "Node", "MongoDB"],
  },
  {
    img: library,
    title: "Library Management System",
    description:
      "Cross-platform application that streamlines lending, member onboarding, and analytics for campus libraries.",
    links: {
      site: "#",
      github: "https://github.com/MalithShehan/RAD-Final-Project.git",
    },
    stack: ["Java", "Firebase", "Figma"],
  },
  {
    img: chatApp,
    title: "Real-time Chat Application",
    description:
      "Feature-rich messaging experience with authentication, typing states, and optimistic UI updates.",
    links: {
      site: "#",
      github: "https://github.com/MalithShehan/chat_application-Malith_Shehan-GDSE-68.git",
    },
    stack: ["React", "Socket.io", "Tailwind"],
  },
  {
    img: southlankafireworkswebsite,
    title: "South Lanka Fireworks Website",
    description:
      "A vibrant e-commerce platform showcasing a wide range of fireworks products with seamless navigation and secure checkout.",
    links: {
      site: "https://slfireworks.com/",
      github: "https://github.com/MalithShehan/South-Lanka-Fireworks-Web.git",
    },
    stack: ["React", "TailwindCss", "JavaScript"],
  }
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="max-w-[1200px] mx-auto px-6 py-20"
      aria-label="Portfolio Projects"
    >
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="badge-pill">Selected Work</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-5">
          Case studies that pair UX empathy with reliable engineering.
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Rapid experiments, iterative delivery, and strong documentation keep my projects measurable and maintainable.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mt-16">
        {projects.map((project, index) => (
          <Reveal key={project.title} width="100%">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="section-shell overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-3 flex-wrap">
                  {project.stack.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Featured</p>
                  <h3 className="text-2xl font-semibold mt-3">{project.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-black bg-gradient-to-r from-purple-500 to-cyan-400"
                    aria-label={`View live site of ${project.title}`}
                  >
                    <AiOutlineLink />
                    Live preview
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2 border border-white/20 text-sm"
                    aria-label={`View GitHub repository of ${project.title}`}
                  >
                    <AiOutlineGithub />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
