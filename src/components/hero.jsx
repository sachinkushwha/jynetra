import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[70vh] md:min-h-[85vh] w-full overflow-hidden flex flex-col justify-center items-center px-6 text-center">
      
      {/* Background Image with Premium Dark Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/hero.jpeg')] bg-cover bg-center bg-no-repeat scale-105"
        style={{ transform: 'translateZ(0)' }}
      ></div>
      
      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/80 via-[#111827]/60 to-[#111827]/90"></div>

      {/* Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
          </span>
          <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
            Digital Excellence Redefined
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
          Empowering Your <br />
          <span className="text-[#2563EB]">Digital Vision</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Crafting high-performance <span className="text-white font-semibold">Websites</span>, 
          cutting-edge <span className="text-white font-semibold">Software</span>, 
          and iconic <span className="text-white font-semibold">Branding</span> for the modern era.
        </p>

        {/* Premium Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            to="/form"
            className="group w-full sm:w-auto bg-[#F97316] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ea580c] transition-all duration-300 shadow-xl shadow-[#F97316]/20 flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="tel:+919334167296"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-lg text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#111827] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PhoneCall size={20} />
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom Subtle Fade */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};