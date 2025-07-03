export const Review = () => {
    return (
        <section className="bg-sky-100 py-12 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    What Our <span className="text-cyan-600">Clients Say</span>
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Here's what our clients say about working with us.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Card 1 */}
                <div className="bg-orange-200 shadow-md rounded-lg p-4 hover:shadow-lg transition">
                    <p className="text-sm text-gray-700 italic">
                        “Excellent work and professional service!”
                    </p>
                    <div className="mt-4 text-right text-cyan-600 text-sm font-medium">
                        — Ravi S.
                    </div>
                </div>
            </div>
        </section>
    );
};
