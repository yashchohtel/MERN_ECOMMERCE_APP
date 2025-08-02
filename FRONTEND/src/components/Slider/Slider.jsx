import React from 'react';
import "./slider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import 'swiper/css';

const Slider = () => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                // autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
            >
                {/* {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="img_slide_cont">
                            <img src={img} alt={`Slide ${index}`} />
                        </div>
                    </SwiperSlide>
                ))} */}

                <div className="container">


                    <SwiperSlide>
                        <div className="img_slide_cont">
                            <img src="/banner (1).jpg" alt="Slide 1" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img_slide_cont">
                            <img src="/banner (2).jpg" alt="Slide 2" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img_slide_cont">
                            <img src="/banner (6).jpg" alt="Slide 3" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img_slide_cont">
                            <img src="/banner (7).jpg" alt="Slide 4" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img_slide_cont">
                            <img src="/banner (5).jpg" alt="Slide 5" />
                        </div>
                    </SwiperSlide>

                </div>

            </Swiper>
        </>
    )
}

export default Slider;