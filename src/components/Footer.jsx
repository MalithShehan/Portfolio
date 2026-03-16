function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-10 text-center text-cyan-100/65 text-[11px] sm:text-xs md:text-sm tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.28em] leading-relaxed uppercase">
                &copy; {new Date().getFullYear()} Malith Shehan · Software Engineer Portfolio · Built with React and Tailwind.
            </div>
        </footer>
    );
}

export default Footer;
