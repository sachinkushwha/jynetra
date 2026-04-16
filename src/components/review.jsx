import { Star, Quote } from 'lucide-react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'
export const Review = () => {
    const reviewData = [
        { 
            username: "Ravi S.", 
            initials: "RS",
            details: "Is company ke saath kaam karke bahut accha laga. Unhone project ko time par deliver kiya aur har step par professional guidance di. Unki service aur support dono hi outstanding the." 
        },
        { 
            username: "Sambhav V.", 
            initials: "SV",
            details: "Mainne is software company ke saath kaam kiya aur experience bahut hi accha raha. Unhone mere project ko samajhne ke baad professional tareeke se kaam kiya aur deadline ke andar high-quality solution deliver kiya." 
        },
        { 
            username: "Vicky Kumar", 
            initials: "VK",
            details: "Ye software company sach me professional aur reliable hai. Unhone mere requirements ko perfectly samjha aur project ko efficiently complete kiya. Unka approach solution-oriented aur detail-focused tha." 
        },
        
    ];

    return (
        <section className="bg-[#F3F4F6] py-24 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#2563EB] font-bold tracking-widest uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mt-4">
                        What Our <span className="text-[#2563EB]">Clients Say</span>
                    </h2>
                    <div className="mt-4 flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className="fill-[#F97316] text-[#F97316]" />
                        ))}
                    </div>
                </div>

                {/* Reviews Container */}
                <div className=" pb-8 ">
                    <Swiper
                    modules={[Autoplay,Pagination]}
                    pagination
                    autoplay={{delay:2500}}
                    slidesPerView={3}
                    spaceBetween={20}
                    breakpoints={{
                        320:{slidesPerView:1},
                        640:{slidesPerView:2},
                        1024:{slidesPerView:3}
                    }}
                    >
                    {reviewData.map((review, index) => (
                        <SwiperSlide>
                        <div
                            key={index}
                            className="bg-white border border-[#111827]/5 shadow-sm hover:shadow-xl rounded-3xl p-8 flex-shrink-0 w-[300px] md:w-auto snap-center transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="text-[#2563EB]/20 mb-4" size={40} />
                                <p className="text-[#111827]/80 text-base leading-relaxed italic mb-8">
                                    “{review.details}”
                                </p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                {/* Avatar Placeholder */}
                                <div className="w-12 h-12 bg-[#2563EB] text-white flex items-center justify-center rounded-full font-bold text-sm">
                                    {review.initials}
                                </div>
                                <div>
                                    <div className="text-[#111827] font-bold text-sm">
                                        {review.username}
                                    </div>
                                    <div className="text-[#2563EB] text-xs font-semibold">
                                        Verified Client
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>

                {/* Optional CTA */}
                
            </div>
        </section>
    );
};