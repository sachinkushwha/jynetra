import { Github, Twitter, Linkedin, Mail } from 'lucide-react'; // Icons optional hain par premium lagte hain

export const Footer = ({ data }) => {
  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10 px-6 sm:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column (Always good for premium feel) */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-extrabold mb-6 tracking-tight">
              Jynetra<span className="text-[#2563EB]">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building next-generation digital solutions for global startups and local businesses.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <a href="#" className="text-gray-400 hover:text-[#2563EB] transition-colors"><Twitter size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-[#2563EB] transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-[#2563EB] transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Dynamic Data Columns */}
          {data.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-[#F3F4F6] font-bold text-lg mb-6 border-l-2 border-[#2563EB] pl-3 leading-none">
                {section.name}
              </h4>
              <ul className="space-y-4">
                {section.data.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#2563EB] text-sm font-medium transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Jynetra</span>. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
             <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};