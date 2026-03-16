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
      "Built a data-rich dashboard for plantation teams to monitor soil conditions, automate watering alerts, and review drone captures.",
    links: {
      site: "",
      github: "https://github.com/MalithShehan/Crop-monitoring-system.git",
    },
    stack: ["React", "Node", "MongoDB"],
  },
  {
    img: library,
    title: "Library Management System",
    description:
      "Developed a cross-platform solution that streamlines lending operations, member onboarding, and reporting for education institutes.",
    links: {
      site: "",
      github: "https://github.com/MalithShehan/RAD-Final-Project.git",
    },
    stack: ["Java", "Firebase", "Figma"],
  },
  {
    img: chatApp,
    title: "Real-time Chat Application",
    description:
      "Engineered a real-time messaging app with authentication, typing indicators, and responsive UX across devices.",
    links: {
      site: "",
      github: "https://github.com/MalithShehan/chat_application-Malith_Shehan-GDSE-68.git",
    },
    stack: ["React", "Socket.io", "Tailwind"],
  },
  {
    img: southlankafireworkswebsite,
    title: "South Lanka Fireworks Website",
    description:
      "Designed and shipped a vibrant e-commerce platform with product discovery, conversion-focused pages, and secure purchase flows.",
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
      className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-20"
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
        <h2 className="text-3xl md:text-5xl font-semibold mt-4 sm:mt-5 leading-tight">
          Product case studies that combine business impact and engineering quality.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-cyan-50/75">
          Each project below reflects how I approach requirements, architecture, and implementation with practical outcomes in mind.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-7 sm:gap-12 mt-10 sm:mt-16">
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
                  className="w-full h-52 sm:h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-3 flex-wrap">
                  {project.stack.map((tag) => (
                    <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-full bg-white/20 text-xs sm:text-sm text-cyan-50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-cyan-100/60">Featured</p>
                  <h3 className="text-xl sm:text-2xl font-semibold mt-2 sm:mt-3">{project.title}</h3>
                </div>
                <p className="text-cyan-50/80 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <div className="grid sm:flex gap-3 sm:gap-4">
                  {project.links.site ? (
                    <a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="accent-button text-sm"
                      aria-label={`View live site of ${project.title}`}
                    >
                      <AiOutlineLink />
                      Live preview
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm border border-white/20 text-cyan-100/70">
                      <AiOutlineLink />
                      Private deployment
                    </span>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 border border-white/20 text-sm text-cyan-50"
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
