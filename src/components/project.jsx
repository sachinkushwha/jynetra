export const Project = ({ project }) => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-cyan-600">Completed</span> Projects
        </h1>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.map((Projects, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {Projects.name}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {Projects.dis}
            </p>

            {/* <div className="mt-4">
              <a
                href={Projects.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 text-sm font-medium hover:underline"
              >
                View Project →
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};
