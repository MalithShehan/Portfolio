import React from "react";
import Reveal from "./Reveal.jsx";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const contactChannels = [
  {
    label: "WhatsApp",
    value: "+94 75 398 0857",
    href: "https://wa.me/94753980857",
    icon: <AiOutlineWhatsApp className="text-2xl text-green-400" />,
    newTab: true,
  },
  {
    label: "Phone",
    value: "+94 72 559 2323",
    href: "tel:+94725592323",
    icon: <FiPhoneCall className="text-2xl text-cyan-300" />,
  },
];

const Contact = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20" id="contact">
      <Reveal width="100%">
        <div className="section-shell p-10 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="badge-pill">Collaboration</span>
            <h3 className="text-4xl font-semibold mt-5">
              Ready to build something valuable together?
            </h3>
            <p className="mt-5 text-lg text-cyan-50/80 leading-relaxed">
              I enjoy working with teams that care about users, quality, and measurable results.
              Contact me for internship opportunities, freelance projects, or product collaborations.
            </p>

            <div className="mt-10 space-y-6 text-cyan-50/80">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-100/60">Email</p>
                <a href="mailto:shehansandakalum2003@gmail.com" className="gradient-link">
                  shehansandakalum2003@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-100/60">Location</p>
                <p>Galle, Sri Lanka · Open to remote opportunities</p>
              </div>
              <div className="soft-divider" />
              <div className="space-y-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.newTab ? "_blank" : undefined}
                    rel={channel.newTab ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 hover:border-white/40 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span>{channel.icon}</span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.4em] text-cyan-100/60">{channel.label}</p>
                        <p className="text-lg text-cyan-50">{channel.value}</p>
                      </div>
                    </div>
                    <span className="text-xs text-cyan-100/60">Tap to open</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            <h4 className="text-2xl font-semibold mb-6">Start a conversation</h4>
            <form
              action="https://getform.io/f/ayvkmlmb"
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent border border-white/15 text-cyan-50 p-4 rounded-2xl focus:outline-none focus:border-white/40 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-white/15 text-cyan-50 p-4 rounded-2xl focus:outline-none focus:border-white/40 transition"
              />
              <textarea
                name="message"
                placeholder="What would you like to create?"
                rows="5"
                className="w-full bg-transparent border border-white/15 text-cyan-50 p-4 rounded-2xl focus:outline-none focus:border-white/40 transition"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#19b7a6] to-[#f8b94b] text-[#052029] font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
