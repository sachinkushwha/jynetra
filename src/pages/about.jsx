export const About = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* Subtle Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#2563EB] uppercase bg-[#2563EB]/10 rounded-full">
          Our Vision
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] mb-8 tracking-tight">
          Redefining Digital with <span className="text-[#2563EB]">Jynetra</span>
        </h2>

        {/* Content Box with subtle section background */}
        <div className="relative p-1">
          <div className="absolute inset-0 bg-[#F3F4F6] rounded-3xl -rotate-1 scale-[1.02] opacity-50"></div>
          <div className="relative bg-white border border-[#F3F4F6] p-8 md:p-12 rounded-3xl shadow-sm">
            <p className="text-base sm:text-lg md:text-xl text-[#111827]/80 leading-relaxed font-medium">
              Jynetra is an independent software services brand based in India, 
              dedicated to empowering startups, entrepreneurs, and small businesses. 
            </p>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#111827]/80 leading-relaxed">
              We specialize in building <span className="text-[#111827] font-semibold">fast, secure, and scalable</span> websites 
              along with custom digital tools designed to amplify your online presence and 
              supercharge business efficiency.
            </p>
          </div>
        </div>

        {/* Stats or Trust Markers (Optional Premium Touch) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#2563EB]">Fast</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Performance</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-[#2563EB]">Secure</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Architecture</p>
          </div>
          <div className="text-center hidden md:block">
            <p className="text-2xl font-bold text-[#2563EB]">Scalable</p>
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};