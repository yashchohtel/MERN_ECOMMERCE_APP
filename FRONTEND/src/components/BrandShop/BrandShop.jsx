import React from 'react'
import "./brandshop.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const BrandShop = () => {
    return (
        <>
            {/* shop by brands section */}
            <section className='section shop_by_brand'>

                {/* container */}
                <div className="container">

                    {/* heading */}
                    <h1 className='heading'>Shop by brand's</h1>

                    {/* brand slider container */}
                    <div className="brand_slide_cont">

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={9}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                        >

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (10).png" alt="Slide 3" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (9).png" alt="Slide 4" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (1).png" alt="Slide 1" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (2).png" alt="Slide 2" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (3).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (4).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (5).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (6).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (7).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo (8).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>

                </div>

            </section>
        </>
    )
}

export default BrandShop