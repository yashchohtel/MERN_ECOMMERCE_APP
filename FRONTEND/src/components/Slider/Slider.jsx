import React from 'react';
import "./slider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const bannerData = [
    {
        id: 1,
        tag: "Trending Item",
        heading: "WOMEN'S LATEST FASHION SALE",
        description: "starting at $20.00",
        buttonText: "SHOP NOW",
        image: "/banner (8).jpg"
    },
    {
        id: 2,
        tag: "New Collection",
        heading: "SUMMER EXCLUSIVE DEALS",
        description: "Flat 40% Off",
        buttonText: "SHOP NOW",
        image: "/banner (7).jpg"
    },
    {
        id: 3,
        tag: "Limited Offer",
        heading: "MEN'S TRENDY STYLES",
        description: "starting at $15.00",
        buttonText: "SHOP NOW",
        image: "/banner (6).jpg"
    },
    {
        id: 4,
        tag: "Limited Offer",
        heading: "MEN'S TRENDY STYLES",
        description: "starting at $15.00",
        buttonText: "SHOP NOW",
        image: "https://img.freepik.com/free-photo/modern-man-casual-outfit-showing-shopping-bag-okay-sign-winking-camera-recommending-shop_1258-300002.jpg?ga=GA1.1.1778038783.1750070552&w=740&q=80"
    }
];

const Slider = () => {

    return (
        <>

            <div className="hero_slider_container container">

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    // autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                >
                    {bannerData.map((item, index) => (

                        <SwiperSlide key={index}>

                            {/* slider container */}
                            <div className="img_slide_cont">

                                {/* img */}
                                <img src={item.image} alt={`Slide ${index}`} />

                                {/* content */}
                                <div className="slide_content">
                                    <span className="tag">{item.tag}</span>
                                    <h1 className="slider_cont_head">{item.heading}</h1>
                                    <p className="description">{item.description}</p>
                                    <button className="btn">{item.buttonText}</button>
                                </div>

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </>
    )
}

export default Slider;