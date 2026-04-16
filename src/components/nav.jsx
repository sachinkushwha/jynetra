import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react"; // Icons ke liye lucide-react use karein

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for premium feel
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-[#111827] text-2xl font-extrabold tracking-tight">
            Jynetra<span className="text-[#2563EB]">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#111827] font-medium hover:text-[#2563EB] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[#111827] font-medium hover:text-[#2563EB] transition-colors">
              About
            </Link>
            <Link to="/service" className="text-[#111827] font-medium hover:text-[#2563EB] transition-colors">
              Services
            </Link>
            
            {/* CTA Button (Orange) */}
            <Link 
              to="tel:+919334167296" 
              className="bg-[#F97316] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#ea580c] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Phone size={18} />
              Contact
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="text-[#111827] md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* WhatsApp Floating (Always Visible) */}
      <a 
        href="https://wa.me/+919334167296" 
        target="_blank" 
        rel="noreferrer"
        className="fixed sm:bottom-20 bottom-20 right-8 z-[60] group"
      >
        <div className="absolute -top-12 right-0 bg-[#111827] text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us!
        </div>
        <img 
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" 
          alt="WhatsApp" 
          className="w-14 h-14 drop-shadow-2xl hover:scale-110 transition-transform duration-300" 
        />
      </a>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-[#111827]/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[101] shadow-2xl p-8 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <span className="text-xl font-bold text-[#111827]">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-[#111827] p-1">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[#111827] hover:text-[#2563EB]">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[#111827] hover:text-[#2563EB]">
            About
          </Link>
          <Link to="/service" onClick={() => setIsOpen(false)} className="text-lg font-medium text-[#111827] hover:text-[#2563EB]">
            Services
          </Link>
          <hr className="border-gray-100" />
          <Link 
            to="tel:+919334167296" 
            className="bg-[#2563EB] text-white text-center py-3 rounded-xl font-bold shadow-lg"
          >
            Call Now
          </Link>
        </nav>
      </div>
    </>
  );
};