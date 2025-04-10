import React from "react";
import Reveal from "./Reveal.jsx";

const Contact = () => {
    return (
        <div className="px-6 mx-w-[1000px] mx-auto md:my-12" id="contact">
            <Reveal>
                <div className="grid md:grid-cols-2 gap-12 place-items-center">
                    {/* About Me Section */}
                    <div className="text-gray-300 my-3">
                        <h3 className="text-4xl font-semibold mb-5 text-gray-100 text-center">About <span className="text-primary-color">Me</span></h3>
                        <p className="text-justify leading-7 w-full md:w-11/12 mx-auto mb-6">
                            I am a motivated software development student with skills in HTML,
                            CSS, JavaScript, Java, Python, and TypeScript. I am passionate about
                            learning and applying modern technologies to build responsive and
                            efficient applications. As I continue to grow my expertise, I am
                            eager to gain real-world experience through internship opportunities
                            where I can contribute, learn, and further develop my skills.
                        </p>


                    </div>

                    {/* Contact Form Section */}
                    <div className="max-w-lg w-full p-6 md:p-10 bg-transparent rounded-xl shadow-xl">
                        <p className="text-gray-100 font-bold text-2xl mb-5">Let's Connect!</p>
                        <form
                            action="https://getform.io/f/ayvkmlmb"
                            method="POST"
                            className="space-y-4"
                            id="form"
                        >
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Your Name..."
                                name="name"
                                className="w-full p-4 rounded-md border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-color bg-gray-700 text-gray-100"
                            />
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Your Email..."
                                name="email"
                                className="w-full p-4 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-color bg-gray-700 text-gray-100"
                            />
                            <textarea
                                id="textarea"
                                placeholder="Enter Your Message..."
                                name="message"
                                rows="4"
                                className="w-full p-4 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-color bg-gray-700 text-gray-100"
                            />
                            <button
                                type="submit"
                                className="w-full py-3 rounded-md text-lg text-white font-semibold bg-primary-color hover:bg-primary-color-dark transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default Contact;
