import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App(){
    return (
        <>
            <div className="app-noise" />
            <div className="ambient-orb w-[350px] h-[350px] bg-[#18b6a1]/30 top-[8%] left-[-130px]" />
            <div className="ambient-orb w-[420px] h-[420px] bg-[#f6b65b]/20 top-[20%] right-[-180px]" />
            <div className="ambient-orb w-[360px] h-[360px] bg-[#1d7994]/28 bottom-[-120px] left-[35%]" />
            <main className="relative pb-16">
            <Navbar />
            <Hero />
            <Skills />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
            </main>
        </>
    )
}