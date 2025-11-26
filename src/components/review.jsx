export const Review = () => {
    const reviewData = [
        { username: "— Ravi S.", details: "Is company ke saath kaam karke bahut accha laga. Unhone project ko time par deliver kiya aur har step par professional guidance di. Unki service aur support dono hi outstanding the. Main unke kaam se bahut impressed hoon aur recommend karunga." },
        { username: "— Sambhav v.", details: "Mainne is software company ke saath kaam kiya aur experience bahut hi accha raha. Unhone mere project ko samajhne ke baad professional tareeke se kaam kiya aur deadline ke andar high-quality solution deliver kiya. Unki communication clear aur timely thi, aur unka approach highly cooperative tha. Main definitely unhe recommend karunga." },
        { username: "— Vicky Kumar.", details: "Ye software company sach me professional aur reliable hai. Unhone mere requirements ko perfectly samjha aur project ko efficiently complete kiya. Unka approach solution-oriented aur detail-focused tha. Kaam ka quality aur communication dono bahut accha tha. Main future me bhi unke saath kaam karna pasand karunga." },
        
    ];


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

            {/* 🔥 REVIEWS — GRID */}

            <div className="flex overflow-x-auto gap-6 scrollbar-hide">
                {reviewData.map((review, index) => (
                    <div
                        key={index}
                        className="bg-orange-200 shadow-md rounded-lg p-4 w-[228px] min-h-[90px] flex-shrink-0 hover:shadow-lg transition"
                    >
                        <p className="text-sm text-gray-700 italic whitespace-normal">
                            “{review.details}”
                        </p>
                        <div className="mt-2 text-right text-cyan-600 text-sm font-medium">
                            {review.username}
                        </div>
                    </div>
                ))}
            </div>
            {/* <button className="block mx-auto mt-10 bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-300">
  Give Your Review
</button> */}


        </section>
    );
};
