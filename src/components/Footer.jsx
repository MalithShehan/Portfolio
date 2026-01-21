function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-6 py-10 text-center text-gray-400 text-sm tracking-[0.3em] uppercase">
                &copy; {new Date().getFullYear()} Malith Shehan · Building thoughtful products one sprint at a time.
            </div>
        </footer>
    );
}

export default Footer;
