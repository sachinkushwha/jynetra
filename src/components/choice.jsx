import { CheckCircle2, ShieldCheck, Zap, Clock, Users } from 'lucide-react';

export const Choice = () => {
  const points = [
    { 
      title: "Custom-Tailored Solutions", 
      text: "Every client is unique. We build tools specifically for your business goals.",
      icon: <Users className="text-[#2563EB]" /> 
    },
    { 
      title: "Performance & Security", 
      text: "Fast, scalable, and secure codebase using the latest modern technologies.",
      icon: <ShieldCheck className="text-[#2563EB]" /> 
    },
    { 
      title: "On-Time Delivery", 
      text: "Transparent communication and strict adherence to project deadlines.",
      icon: <Clock className="text-[#2563EB]" /> 
    },
    { 
      title: "Ongoing Support", 
      text: "We don't just build and leave; we partner for your long-term success.",
      icon: <Zap className="text-[#F97316]" /> 
    },
  ];

  return (
    <section className="bg-white py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#2563EB] font-bold tracking-widest uppercase text-sm bg-[#2563EB]/10 px-3 py-1 rounded-md">
            The Jynetra Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mt-6 tracking-tight">
            Why partner with <span className="text-[#2563EB]">Jynetra?</span>
          </h2>
          <p className="mt-4 text-[#111827]/60 text-lg sm:text-xl leading-relaxed">
            We bring experience, innovation, and reliability to every project, ensuring your digital growth is seamless.
          </p>
        </div>

        {/* Choice Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {points.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-start gap-4 bg-[#F3F4F6]/30 hover:bg-white p-8 rounded-3xl border border-transparent hover:border-[#2563EB]/10 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#111827]/70 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Subtle Checkmark indicator */}
              <div className="mt-2 flex items-center gap-2 text-[#2563EB]/40 group-hover:text-[#2563EB] transition-colors">
                <CheckCircle2 size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Verified Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};