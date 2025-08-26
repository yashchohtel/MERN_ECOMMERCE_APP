import React from 'react';
import "./heroSlider.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const bannerData = [
    {
        id: 3,
        tag: "Limited Offer",
        heading: "MEN'S TRENDY STYLES",
        description: "starting at $15.00",
        buttonText: "SHOP NOW",
        image: "/banner (10).png"
    },
    {
        id: 4,
        tag: "Limited Offer",
        heading: "Latest Tech For You",
        description: "starting at $15.00",
        buttonText: "SHOP NOW",
        image: "/banner (11).png"
    },
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
        id: 5,
        // sirf image aayega (baaki sab backend se empty hoga)
        image: "/banner (9).png"
    }
];

const HeroSlider = () => {

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

                                {/* content (sirf tab render hoga jab data hoga) */}
                                {(item.tag || item.heading || item.description || item.buttonText) && (
                                    <div className="slide_content">
                                        {item.tag && <span className="tag">{item.tag}</span>}
                                        {item.heading && <h1 className="slider_cont_head">{item.heading}</h1>}
                                        {item.description && <p className="description">{item.description}</p>}
                                        {item.buttonText && <button className="btn">{item.buttonText}</button>}
                                    </div>
                                )}

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default HeroSlider;