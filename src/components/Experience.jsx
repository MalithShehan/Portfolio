import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const experience = [
  {
    school: "St/Aloysius College",
    period: "2009 - 2019 · Galle, Sri Lanka",
    description: "Completed foundational studies and Ordinary Level examinations with a strong focus on analytical subjects.",
  },
  {
    school: "St/Aloysius College",
    period: "2019 - 2022 · Galle, Sri Lanka",
    description: "Completed Advanced Level studies while developing early interests in software systems and digital product development.",
  },
  {
    school: "Institute Of Java Software Engineering",
    period: "2023 - 2025 · Galle, Sri Lanka",
    description: "Pursued the Graduate Diploma in Software Engineering, gaining hands-on experience in full-stack development and teamwork.",
  },
  {
    school: "Sri Lanka Telecom (SLT)",
    period: "2025 - Present · Colombo, Sri Lanka",
    description: "Software Engineer building internal dashboards, automation pilots, and operations tooling for business teams.",
  },
];

const Experience = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-20" id="experience">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="badge-pill">Journey</span>
        <h2 className="text-4xl md:text-5xl font-semibold mt-5">
          Education and experience that shaped my engineering mindset.
        </h2>
      </div>

      <div className="relative">
        <span className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1ab8a8]/70 to-[#f7ba54]/70" />

        <div className="space-y-10">
          {experience.map((item, index) => (
            <Reveal key={`${item.school}-${item.period}`} width="100%">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="section-shell p-8 pl-16 relative"
              >
                <span className="absolute left-4 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-[#1ab8a8] to-[#f7ba54]" />
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-100/60">{item.period}</p>
                <h3 className="text-2xl font-semibold mt-3">{item.school}</h3>
                <p className="text-cyan-50/80 mt-4">{item.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
