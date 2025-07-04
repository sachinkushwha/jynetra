import { CheckCircle } from 'lucide-react';

export const Choice = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Why <span className="text-sky-500">Choose Us?</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          We bring experience, innovation, and reliability to every project.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        {[
          "Custom-Tailored Solutions for Every Client",
          "Fast, Scalable, and Secure Codebase",
          "On-Time Delivery with Transparent Communication",
          "Ongoing Support & Long-Term Partnership",
        ].map((point, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition p-6 rounded-lg shadow-sm border-l-4 border-sky-500"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <CheckCircle className="text-sky-500 w-7 h-7 sm:w-6 sm:h-6 flex-shrink-0" />
            <p className="text-gray-700 text-sm sm:text-base">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
