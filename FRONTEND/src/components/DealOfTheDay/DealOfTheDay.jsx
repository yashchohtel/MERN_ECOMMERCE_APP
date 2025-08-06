import React from 'react'
import DealOfTheDayCard from './DealOfTheDayCard'
import './DealOfTheDay.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const dotdProducts = [
    {
        image: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg",
        title: "Apple MacBook M3",
        description: "Powerful performance with the new M3 chip and stunning Retina display.",
        ratingStars: "★★★★☆",
        ratingCount: 120,
        originalPrice: 99999,
        discountedPrice: 87999,
        timeout: { hour: 10, minute: 29, second: 30 }
    },
    {
        image: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jewellery-1.jpg",
        title: "Wireless Headphones",
        description: "Experience immersive sound with noise cancellation and 40-hour battery life.",
        ratingStars: "★★★★★",
        ratingCount: 328,
        originalPrice: 4999,
        discountedPrice: 3499,
        timeout: { hour: 5, minute: 15, second: 12 }
    },
    {
        image: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-4.jpg",
        title: "Leather Backpack",
        description: "Elegant and durable backpack for daily use, office, or travel.",
        ratingStars: "★★★★☆",
        ratingCount: 204,
        originalPrice: 3599,
        discountedPrice: 2499,
        timeout: { hour: 3, minute: 58, second: 45 }
    },
    {
        image: "https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/sports-4.jpg",
        title: "Men’s Sports Shoes",
        description: "Comfortable and stylish shoes for gym, running, and casual wear.",
        ratingStars: "★★★☆☆",
        ratingCount: 98,
        originalPrice: 2799,
        discountedPrice: 1999,
        timeout: { hour: 12, minute: 0, second: 5 }
    },
    {
        image: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg",
        title: "Smart Watch Pro",
        description: "Track your health, calls, and workouts with advanced smart features.",
        ratingStars: "★★★★☆",
        ratingCount: 455,
        originalPrice: 6999,
        discountedPrice: 5599,
        timeout: { hour: 1, minute: 22, second: 18 }
    }
];

const DealOfTheDay = () => {
    return (
        <>
            {/* Deal of the Day Section */}
            <div className="container deal_of_the_day_container">

                {/* heading */}
                <h2 className='deal_heading'>Deal of the Day</h2>

                {/* swiper for deal of the day */}
                <div className="deal_OTD_Slider_container">

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                    >

                        {dotdProducts.map((product, index) => (

                            <SwiperSlide>
                                {/* deal of the product card */}
                                <DealOfTheDayCard key={index} product={product} />
                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

            </div>

        </>
    )
}

export default DealOfTheDay