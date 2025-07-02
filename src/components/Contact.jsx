import React from "react";
import Reveal from "./Reveal.jsx";

const Contact = () => {
  return (
    <div className="px-6 max-w-[1200px] mx-auto py-12 md:py-20" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* ===== About Me Section ===== */}
          <div className="text-gray-300">
            <h3 className="text-4xl font-semibold mb-6 text-center md:text-left text-gray-100">
              About <span className="text-primary-color">Me</span>
            </h3>
            <p className="text-justify leading-relaxed tracking-wide text-base md:text-lg">
              I am a motivated software development student with skills in HTML,
              CSS, JavaScript, Java, Python, and TypeScript. I am passionate about
              learning and applying modern technologies to build responsive and
              efficient applications. As I continue to grow my expertise, I am
              eager to gain real-world experience through internship opportunities
              where I can contribute, learn, and further develop my skills.
            </p>
          </div>

          {/* ===== Contact Form Section ===== */}
          <div className="bg-gray-800/50 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 backdrop-blur-md border border-gray-700">
            <h4 className="text-2xl font-bold text-gray-100 mb-6 text-center">
              Let's <span className="text-primary-color">Connect</span>!
            </h4>
            <form
              action="https://getform.io/f/ayvkmlmb"
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-gray-700 border border-gray-600 text-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-gray-700 border border-gray-600 text-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full bg-gray-700 border border-gray-600 text-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color transition"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-primary-color hover:brightness-110 text-white font-semibold text-lg rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
