import { ExternalLink, Layers } from 'lucide-react';

export const Project = ({ project }) => {
  return (
    <section className="bg-white py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-[#2563EB] font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mt-2">
              Our <span className="text-[#2563EB]">Featured</span> Projects
            </h2>
          </div>
          <p className="text-[#111827]/60 text-lg md:max-w-xs">
            Showcasing our commitment to quality and digital excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#F3F4F6]/50 rounded-3xl p-8 border border-transparent hover:border-[#2563EB]/20 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-0 h-1.5 bg-[#F97316] group-hover:w-full transition-all duration-500"></div>

              {/* Icon / Category Placeholder */}
              <div className="mb-6 text-[#2563EB]">
                <Layers size={32} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#111827] mb-3 group-hover:text-[#2563EB] transition-colors">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-[#111827]/70 text-sm leading-relaxed mb-8 line-clamp-3">
                {item.dis}
              </p>

              {/* Action Link */}
              <div className="mt-auto">
                <a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#111827] font-bold text-sm group/btn hover:text-[#F97316] transition-colors"
                >
                  View
                  <ExternalLink size={16} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};