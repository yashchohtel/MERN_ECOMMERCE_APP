import React, { useState, useEffect } from 'react';
import './ProductCardMini.css';

const ProductCardMini = ({ product }) => {

    const [currentIndex, setCurrentIndex] = useState(1); // start from 1 because of duplicate at start
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Duplicate images for loop effect
    const images = [
        product.images[product.images.length - 1], // last image duplicate at start
        ...product.images,
        product.images[0] // first image duplicate at end
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(true);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Handle loop reset
    useEffect(() => {
        if (currentIndex === images.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false); // disable animation
                setCurrentIndex(1); // jump to first real slide
            }, 500); // match transition duration
        }

        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(images.length - 2); // jump to last real slide
            }, 500);
        }
    }, [currentIndex, images.length]);

    // Re-enable transition after instant jump
    useEffect(() => {
        if (!isTransitioning) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsTransitioning(true));
            });
        }
    }, [isTransitioning]);

    return (
        <div className="product_card_mini">
            <div className="product_image_slider">
                <div
                    className="slider_track"
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
            </div>

            <div className="product_description">
                <h4>{product.name}</h4>
            </div>
        </div>
    );
};

export default ProductCardMini;
