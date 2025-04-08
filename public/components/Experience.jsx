import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const experience = [
    {
        school: 'St/Aloysius College',
        period: '2009 - 2019 Galle, Sri Lanka',
        description: 'Ordinary Level Examination'
    },
    {
        school: 'St/Aloysius College',
        period: '2019 - 2022 Galle, Sri Lanka',
        description: 'Advanced Level Examination'
    },
    {
        school: 'Institute Of Java Software Engineering',
        period: '2023 - 2025 Galle, Sri Lanka',
        description: 'Graduate Diploma In Software Engineering'
    }
];

const Experience = () => {
    return (
            <div className="p-6 lg:p-10 max-w-[800px] mx-auto bg-gray-900 bg-transparent rounded-xl shadow-xl">
            <h1 className="text-4xl text-gray-100 font-semibold text-center mb-12">Education</h1>
            <motion.div
                className="space-y-8 lg:space-y-10"
                initial="hidden"
                animate="visible"
            >
                {experience.map((item, index) => (
                    <Reveal key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h2 className="text-2xl text-white font-medium tracking-tight">{item.school}</h2>
                            <p className="text-gray-300 text-lg mt-2">{item.period}</p>
                            <p className="text-gray-200 mt-4 text-sm">{item.description}</p>
                        </motion.div>
                    </Reveal>
                ))}
            </motion.div>
        </div>
    );
}

export default Experience;
