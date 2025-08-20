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
                    <div className="heading_wrapper">
                        <h1 className='heading'>Shop by brands</h1>
                    </div>

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
                                    <img src="/logo-tech (4).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (6).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (7).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (8).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (5).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (10).png" alt="Slide 3" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (9).png" alt="Slide 4" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (1).png" alt="Slide 1" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (2).png" alt="Slide 2" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-tech (3).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={9}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                        >

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (10).png" alt="Slide 3" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (9).png" alt="Slide 4" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (1).png" alt="Slide 1" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (2).png" alt="Slide 2" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (3).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (4).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (5).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (6).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (7).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-fashion (8).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={9}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                        >

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (2).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (4).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (5).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (6).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (7).png" alt="Slide 3" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (8).png" alt="Slide 4" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (3).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (9).png" alt="Slide 1" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (1).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-acces (10).png" alt="Slide 2" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={9}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                        >

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (2).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (4).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (5).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (1).jpeg" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (6).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (7).png" alt="Slide 3" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (8).png" alt="Slide 4" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (3).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (9).png" alt="Slide 1" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-pref (10).png" alt="Slide 2" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={9}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                        >

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (1).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (2).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (3).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (4).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (5).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (6).png" alt="Slide 5" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (7).png" alt="Slide 3" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (8).png" alt="Slide 4" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (9).png" alt="Slide 1" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="img_slide_cont">
                                    <img src="/logo-skin-care (10).png" alt="Slide 2" />
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