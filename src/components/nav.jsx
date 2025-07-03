import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 relative">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="https://wa.me/+919334167296" target="_blank" class="fixed bottom-5 right-5 z-50">
                    <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" class="w-12 h-12 hover:scale-110 transition-transform duration-300" />
                </a>
                {/* Logo */}
                <Link to="/" className="text-white text-2xl font-bold">Jynetra</Link>

                {/* Hamburger Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(true)}
                >
                    ☰
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6 ">
                    <Link to="/" className="text-cyan-200 font-bold hover:text-yellow-400 transition">
                        Home
                    </Link>
                    <Link to="/about" className="text-cyan-200 font-bold hover:text-yellow-400 transition">
                        About
                    </Link>
                    <Link to="tel:+919334167296" className="text-cyan-200 font-bold hover:text-yellow-400 transition">
                        Contact
                    </Link>
                    <a href="/service" className="text-cyan-200 font-bold hover:text-yellow-400 transition">
                        Services
                    </a>
                </div>
            </div>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0  bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-30 bg-gray-900 z-50 p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close button */}
                <button
                    className="text-white mb-6"
                    onClick={() => setIsOpen(false)}
                >
                    ✕ Close
                </button>
                <nav className="flex flex-col space-y-4">
                    <a href="/about" className="text-white hover:text-yellow-400 transition">
                        About
                    </a>
                    <Link to="tel:+919334167296" className="text-white hover:text-yellow-400 transition">
                        Contact
                    </Link>
                    <Link to="/service" className="text-white hover:text-yellow-400 transition">
                        Services
                    </Link>
                </nav>
            </div>
        </nav>
    );
};
