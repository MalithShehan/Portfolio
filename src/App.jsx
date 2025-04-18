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
            <Navbar />
            <Hero />
            <Skills />
            <Portfolio />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}