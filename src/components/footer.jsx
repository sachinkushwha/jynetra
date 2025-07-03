export const Footer = ({ data }) => {
  return (
    <footer className="bg-gradient-to-r from-cyan-700 to-cyan-500 text-white py-5 px-4 shadow-inner">
      {/* Add grid and spacing for mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {data.map((datas, index) => (
          <ul key={index} className="space-y-2 flex justify-center flex-col items-center">
            <li className="text-xl font-bold mb-3 border-b border-white/30 pb-2">{datas.name}</li>
            
            {datas.data.map((item, idx) => (
              <li
                key={idx}
                className="hover:translate-x-1 transition-transform duration-200 hover:text-white/90 text-white/80 "
              >
                {item}
              </li>
            ))}
            
          </ul>
        ))}
      </div>

      <div className="mt-12 border-t border-white/30 pt-6 text-center text-sm sm:text-base text-white/80">
        <p>© 2025 <span className="font-semibold text-white">Jynetra</span>. All rights reserved.</p>
        <p className="mt-1">Developed by <span className="font-semibold text-white">Sachin Kushwaha</span></p>
      </div>
    </footer>
  );
};
