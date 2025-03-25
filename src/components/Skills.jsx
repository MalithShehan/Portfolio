import React from "react";
import {DiCss3, DiGithub, DiHtml5, DiJavascript1, DiMongodb, DiMysql, DiNodejsSmall, DiReact} from "react-icons/di";

const skills = [
    {
        category: 'Frontend',
        technologies: [
            {name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
            {name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
            {name: 'Javascript', icon: <DiJavascript1 className='text-yellow-600' /> },
            {name: 'React', icon: <DiReact className='text-blue-500' /> },

        ],
    },

    {
        category: 'Backend',
        technologies: [
            {name: 'NodeJS', icon: <DiNodejsSmall className='text-green-500'/>},
            {name: 'Express', icon: <DiNodejsSmall className='text-green-600'/>},
            {name: 'MySql', icon: <DiMysql className='text-orange-500'/>},
            {name: 'MongoDB', icon: <DiMongodb className='text-yellow-300'/>},
            {name: 'GitHub', icon: <DiGithub className='text-black-600'/>},
        ],
    },
]
const Skills = () => {
    return (
        <div className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
            <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
            <p className="text-center mb-8 ">
                I worked on various frontend and backend projects. Check them <a href="#" className="underline">there</a>
            </p>

            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1000px] mx-auto">
                {skills.map((skill, index) => (
                    <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2">
                        <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skill.technologies.map((tech, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <span className="text-2xl">{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;