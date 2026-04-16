import { CheckCircle, Code, ShoppingBag, Smartphone, Palette, Layout, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Service = () => {
  const services = [
    { title: 'Custom Website Development', icon: <Code />, desc: 'High-performance websites built with modern frameworks.' },
    { title: 'E-commerce Solutions', icon: <ShoppingBag />, desc: 'Seamless online stores with secure payment integration.' },
    { title: 'Software & App Development', icon: <Smartphone />, desc: 'Scalable mobile and desktop applications for your business.' },
    { title: 'Branding & Logo Design', icon: <Palette />, desc: 'Unique visual identities that make your brand stand out.' },
    { title: 'UI/UX Design', icon: <Layout />, desc: 'Intuitive and beautiful user interfaces focused on conversion.' },
    { title: 'Digital Transformation', icon: <Rocket />, desc: 'Helping traditional businesses shift to a digital-first model.' },
  ];

  return (
    <section className="bg-[#F3F4F6] py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-4">
            Our <span className="text-[#2563EB]">Services</span>
          </h2>
          <p className="text-[#111827]/60 max-w-2xl mx-auto text-lg">
            We deliver end-to-end digital solutions tailored to help your business thrive in a competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-transparent hover:border-[#2563EB]/20 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#111827] mb-3">
                {service.title}
              </h3>
              <p className="text-[#111827]/70 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Subtle "Learn More" or Link indicator */}
              <div className="flex items-center text-[#2563EB] font-semibold text-sm gap-2">
                <CheckCircle size={16} />
                Expert Delivery
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA below services */}
        <div className="mt-16 text-center">
          <p className="text-[#111827] font-medium mb-6">Need a custom solution for your project?</p>
          <Link to='tel:9334167296' className="bg-[#2563EB] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1d4ed8] transition shadow-lg hover:shadow-[#2563EB]/30">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};