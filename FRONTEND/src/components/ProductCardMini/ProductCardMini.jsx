// /* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './ProductCardMini.css';
import { FaStar } from 'react-icons/fa';

const ProductCardMini = ({ product }) => {

    // state to store index starting from 1 to avoid showing the last image initially
    const [currentIndex, setCurrentIndex] = useState(1);

    // state to control transition animati
    const [isTransitioning, setIsTransitioning] = useState(true);

    // state to track hover on product card
    const [isHovered, setIsHovered] = useState(false);

    // numbers of slides for pagination 
    const totalSlides = product.images.length;

    // Duplicate images for loop effect
    const images = [
        product.images[product.images.length - 1], // last image duplicate at start
        ...product.images,
        product.images[0] // first image duplicate at end
    ];

    // active dot index calculation
    const activeDotIndex = (currentIndex - 1 + totalSlides) % totalSlides;

    // function to handle slide change on dot click
    const goToSlide = (dotIndex) => {
        setCurrentIndex(dotIndex + 1);
        setIsTransitioning(true);
    };

    // on mouse enter 
    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsTransitioning(true);
    };

    // on mouse leave
    const handleMouseLeave = () => {
        setIsHovered(false);
        setCurrentIndex(1);
        setIsTransitioning(false);
    };

    // Set up interval to change image every 3 seconds
    useEffect(() => {

        if (!isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setIsTransitioning(true);
        }, 1200);

        return () => clearInterval(interval);
    }, [isHovered]);

    // Handle loop reset
    useEffect(() => {

        if (!isHovered) return;

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
    }, [currentIndex, images.length, isHovered]);

    return (

        // product card container
        <div className="product_card_mini"
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >

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

                            {/* Display image */}
                            <img src={img.url} alt={product.name} />


                        </div>
                    ))}

                </div>

                {/* Rating box */}
                <div className="rating-box">
                    <span className="rating-value">{product.rating}</span>
                    <FaStar className="rating-star" />
                    <span className="divider"></span>
                    <span className="rating-count">{product.numOfReviews}</span>
                </div>

            </div>

            {/* pagination dots */}
            <div className="slider_pag_dot">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${activeDotIndex === index ? 'active' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation(); // stop event bubbling
                            goToSlide(index); // change slide on dot click
                        }}

                    ></span>
                ))}
            </div>

            {/* product details description */}
            <div className="product_description">
                <h3 className='name'>{product.name}</h3>
                <p className='description'>{product.description}</p>
                <p className="product_price">
                    <span className="org_price">₹{product.price}</span>
                    {product.oldPrice && (
                        <>
                            <span className="old_price">₹{product.oldPrice}</span>
                            <span className="discount">
                                ({Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF)
                            </span>
                        </>
                    )}
                </p>
            </div>  

            {/* Add to cart button */}
            <button className='cart_btn button'>
                    
            </button>


        </div>
    );
};

export default ProductCardMini;




