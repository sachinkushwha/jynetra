export const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-[url('/hero.jpeg')] bg-contain bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 ">
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <h1 className="relative text-sm sm:text-2xl md:text-3xl font-bold text-cyan-200 text-center">
        Empowering Your Digital Vision
      </h1>
      <p className="relative mt-3 text-sm sm:text-base md:text-lg text-cyan-200 text-center">
        Website | Software | Branding
      </p>

      {/* Buttons */}
      <div className="relative mt-6 flex space-x-4">
        <button className="bg-cyan-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-cyan-600 transition">
          Get Started
        </button>
        <a href="tel:+919334167296" className="bg-white text-cyan-600 px-5 py-2 rounded-lg font-medium hover:bg-cyan-100 transition">
          Contact Us
        </a>
      </div>
      
    </div>
  );
};
