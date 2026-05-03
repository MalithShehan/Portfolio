import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Skills",      id: "skills",      number: "01" },
  { label: "Projects",    id: "portfolio",   number: "02" },
  { label: "Experience",  id: "experience",  number: "03" },
  { label: "Contact",     id: "contact",     number: "04" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navOpen]);

  // Prevent stuck drawer state when viewport changes from mobile to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enable keyboard close for accessibility
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.07, duration: 0.35 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#051720]/70 backdrop-blur-2xl"
    >
      {/* ── Top bar ── */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 h-16 md:h-20 text-cyan-50">
        <a href="#" className="flex flex-col leading-tight">
          <span className="text-[9px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.45em] uppercase text-cyan-200/70">Full-Stack Developer</span>
          <span className="text-lg sm:text-2xl font-semibold tracking-tight">Malith Shehan</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-cyan-100/80">
          {navItems.map((item) => (
            <li key={item.id} className="cursor-pointer">
              <Link
                to={item.id}
                smooth
                spy
                offset={-80}
                duration={600}
                onSetActive={() => setActiveSection(item.id)}
                className={`transition ${activeSection === item.id ? "text-white" : "text-cyan-100/80 hover:text-white"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Link to="contact" smooth offset={-60} duration={600} className="accent-button text-sm cursor-pointer">
            Hire me
          </Link>
        </div>

        {/* Hamburger / Close */}
        <button
          onClick={toggleNav}
          className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-50 transition hover:border-white/40"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          aria-controls="mobile-navigation-drawer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {navOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <AiOutlineClose size={20} />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <AiOutlineMenu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[80] h-dvh w-full md:hidden flex flex-col"
            style={{
              background: "linear-gradient(145deg, #071e2b 0%, #0a2c3e 100%)",
            }}
          >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 pt-[calc(1.5rem+env(safe-area-inset-top))] pb-5 border-b border-white/10">
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] tracking-[0.35em] uppercase text-cyan-200/60">Full-Stack Developer</span>
                  <span className="text-base font-semibold tracking-tight text-white">Malith Shehan</span>
                </div>
                <button
                  onClick={closeNav}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-50 hover:border-white/40 transition"
                  aria-label="Close menu"
                >
                  <AiOutlineClose size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-6 pt-8 pb-4 overflow-y-auto">
                <ul className="space-y-1">
                  {navItems.map((item, i) => (
                    <motion.li key={item.id} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                      <Link
                        to={item.id}
                        onClick={() => {
                          setActiveSection(item.id);
                          closeNav();
                        }}
                        smooth
                        spy
                        offset={-70}
                        duration={600}
                        onSetActive={() => setActiveSection(item.id)}
                        className={`group flex items-center gap-4 px-4 py-4 rounded-2xl cursor-pointer transition ${
                          activeSection === item.id ? "bg-white/10" : "hover:bg-white/5"
                        }`}
                      >
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-cyan-400/60 w-5 shrink-0">{item.number}</span>
                        <span className={`h-px w-6 transition-colors ${activeSection === item.id ? "bg-cyan-400/70" : "bg-white/15 group-hover:bg-cyan-400/60"}`} />
                        <span className={`text-base font-semibold tracking-wide uppercase transition-colors ${activeSection === item.id ? "text-white" : "text-cyan-50/85 group-hover:text-white"}`}>
                          {item.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA + social */}
              <div className="px-6 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-4 border-t border-white/10 space-y-4">
                <Link
                  to="contact"
                  onClick={() => {
                    setActiveSection("contact");
                    closeNav();
                  }}
                  smooth
                  offset={-60}
                  duration={600}
                  className="accent-button w-full justify-center text-sm cursor-pointer"
                >
                  Hire me
                </Link>
                <div className="flex items-center justify-center gap-4 pt-1">
                  <a href="https://github.com/MalithShehan" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-cyan-50/70 hover:text-white hover:border-white/40 transition">
                    <AiOutlineGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/malith-shehan-95b506279/" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-cyan-50/70 hover:text-white hover:border-white/40 transition">
                    <AiOutlineLinkedin size={18} />
                  </a>
                </div>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
