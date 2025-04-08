function Footer() {
    return (
        <footer className="bg-auto text-white py-6 tex border-2 border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center ">
                        <p className="text-sm text-xl">
                            &copy; {new Date().getFullYear()} <span className="font-semibold items-center">Malith Shehan</span><br/> All rights reserved.
                        </p>
                    </div>
            </div>
        </footer>
    );
}

export default Footer;
