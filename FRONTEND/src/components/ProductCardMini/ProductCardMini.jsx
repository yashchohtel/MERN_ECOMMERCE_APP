/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './ProductCardMini.css';

const ProductCardMini = ({ product }) => {

    // state to store index starting from 1 to avoid showing the last image initially
    const [currentIndex, setCurrentIndex] = useState(1);

    // state to control transition animation
    const [isTransitioning, setIsTransitioning] = useState(true);

    // numbers of slides for pagination 
    const totalSlides = product.images.length;

    // Duplicate images for loop effect
    const images = [
        product.images[product.images.length - 1], // last image duplicate at start
        ...product.images,
        product.images[0] // first image duplicate at end
    ];

    // Set up interval to change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(true);
        }, 3000000);

        return () => clearInterval(interval);
    }, []);

    // Handle loop reset
    useEffect(() => {

        // for forward looping
        if (currentIndex === images.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false); // disable animation
                setCurrentIndex(1); // jump to first real slide
            }, 500); // match transition duration
        }

        // for backward looping
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(images.length - 2); // jump to last real slide
            }, 500);
        }
    }, [currentIndex, images.length]);

    return (

        // product card container
        <div className="product_card_mini">

            {/* Product image slider */}
            <div className="product_image_slider">

                <div className="slider_track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                    }}
                >
                    {images.map((img, index) => (
                        <div className="slide" key={index}>
                            <img src={img.url} alt={product.name} />
                        </div>
                    ))}

                </div>

                {/* pagination dots */}
                <div className="slider_pag_dot">

                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <span className='dot'></span>
                    ))}

                </div>

            </div>

            {/* product details description */}
            <div className="product_description">

            </div>

        </div>
    );
};

export default ProductCardMini;
