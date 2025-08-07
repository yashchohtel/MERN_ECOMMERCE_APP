import React from 'react'
import './productCard.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCard = ({ product }) => {
    return (
        <>
            {/* product card */}
            <div className="product_card">

                {/* product card image */}
                <div className="card_img_cont">
                    <img src={product.images[0]?.url} alt={product.name} />
                </div>

                {/* product card details */}
                <div className="card_detail"></div>
                {/* <div className="product_card_detail">
                    <h3 className="product_name">{product.name}</h3>
                    <p className="product_desc">{product.description}</p>
                    <div className="product_price_rating">
                        <span className="product_price">₹{product.price}</span>
                        <span className="product_rating">⭐ {product.rating} ({product.numOfReviews} reviews)</span>
                    </div>
                    <button className="add_to_cart_btn">Add to Cart</button>
                </div> */}

            </div>
        </>
    )
}

export default ProductCard