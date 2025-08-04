import React from 'react'
import './FeaturedProducts.css'
import MiniProductCard from './MiniProductCard'

const miniProducts = [
    {
        name: "Casual Cotton Shirt",
        category: "Clothes",
        price: 1999,
        oldPrice: 2999,
        image: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499,
        oldPrice: 3499,
        image: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png",
    },
    {
        name: "Leather Backpack",
        category: "Accessories",
        price: 3199,
        oldPrice: 4599,
        image: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg",
    },
    {
        name: "Running Sneakers",
        category: "Shoes",
        price: 2799,
        oldPrice: 3799,
        image: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg",
    },
    {
        name: "Smart Watch Pro",
        category: "Gadgets",
        price: 5599,
        oldPrice: 6999,
        image: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg",
    }
];



const FeaturedProductSlide = ({ title }) => {
    return (

        <>
            {/* feature product slide */}
            <div className="feature_product_slide">

                {/* heading */}
                <h2 className='fps_heading'>{title}</h2>

                {/* product container */}
                <div className="fps_product_container">

                    {/* mini product card */}
                    {miniProducts.map((product, index) => (
                        <MiniProductCard key={index} product={product} />
                    ))}

                </div>

            </div>
        </>
    )
}

export default FeaturedProductSlide