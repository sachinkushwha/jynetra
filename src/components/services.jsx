import { CheckCircle } from 'lucide-react'; // Optional icon library (Tailwind-friendly)

export const Service = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our <span className="text-cyan-600">Services</span>
        </h2>

        <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
          {[
            'Custom Website Development',
            'E-commerce Solutions',
            'Software & App Development',
            'Branding & Logo Design',
            'UI/UX Design',
          ].map((service, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg shadow-sm transition"
            >
              <CheckCircle className="text-cyan-600 w-5 h-5 mt-1" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
