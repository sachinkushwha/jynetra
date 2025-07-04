import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div className="relative sm:h-[80vh] h-[30vh] w-full overflow-hidden bg-[url('/hero.jpeg')] bg-contain bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-4 ">
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <h1 className="relative text-sm mt-17 sm:mt-30 sm:text-2xl md:text-3xl font-bold text-cyan-200 text-center">
        Empowering Your Digital Vision
      </h1>
      <p className="relative sm:mt-3 mt-2 text-sm sm:text-base md:text-lg text-cyan-200 text-center">
        Website | Software | Branding
      </p>

      {/* Buttons */}
     <div className="relative mt-3 sm:mt-6 flex space-x-3 sm:space-x-4">
  <Link
    to="/form"
    className="bg-cyan-500 text-white px-3 py-1 sm:px-5 sm:py-2 rounded-md font-medium hover:bg-cyan-600 transition text-xs sm:text-base"
  >
    Get Started
  </Link>
  <a
    href="tel:+919334167296"
    className="bg-white text-cyan-600 px-3 py-1 sm:px-5 sm:py-2 rounded-md font-medium hover:bg-cyan-100 transition text-xs sm:text-base"
  >
    Contact Us
  </a>
</div>


      
    </div>
  );
};
