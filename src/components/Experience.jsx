import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const experience = [
  {
    school: 'St/Aloysius College',
    period: '2009 - 2019 · Galle, Sri Lanka',
    description: 'Ordinary Level Examination',
  },
  {
    school: 'St/Aloysius College',
    period: '2019 - 2022 · Galle, Sri Lanka',
    description: 'Advanced Level Examination',
  },
  {
    school: 'Institute Of Java Software Engineering',
    period: '2023 - 2025 · Galle, Sri Lanka',
    description: 'Graduate Diploma In Software Engineering',
  }
];

const Experience = () => {
  return (
    <section className="relative px-6 lg:px-10 py-16 max-w-[1100px] mx-auto" id="experience">
      <h1 className="text-4xl md:text-5xl text-gray-100 font-bold text-center mb-16">
        My <span className="text-primary-color">Education</span>
      </h1>

      <div className="relative border-l-4 border-purple-600 pl-6 space-y-10">
        {experience.map((item, index) => (
          <Reveal key={index}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-gray-900/40 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-md hover:shadow-2xl transition duration-300 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[35px] top-6 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-md group-hover:scale-110 transition" />

              <h3 className="text-2xl text-white font-semibold">{item.school}</h3>
              <p className="text-sm text-gray-400 italic mt-1">{item.period}</p>
              <p className="text-gray-300 mt-3 text-base">{item.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
