// /* eslint-disable no-unused-vars */
import React from 'react'
import './header.css'
import Navbar from './Navbar'
import Searchbar from '../SearchBar/Searchbar'

import { IoBagHandleOutline, IoBagHandleSharp } from "react-icons/io5";
import { RiUser6Line, RiUser6Fill } from "react-icons/ri";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const products = [
    {
        _id: "1",
        name: "Casual Cotton Shirt",
        description: "Soft breathable cotton shirt.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 2,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32649583/2025/5/16/08836ef1-6f11-4415-9170-10a5f61df0ae1747376812893-Mens-Woven-Pants-5551747376812323-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32649583/2025/5/16/08836ef1-6f11-4415-9170-10a5f61df0ae1747376812893-Mens-Woven-Pants-5551747376812323-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" },
        ]
    },
    {
        _id: "2",
        name: "Wireless Headphones",
        description: "Crystal clear sound bass.",
        price: 2499,
        oldPrice: 3499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17091614/2022/2/18/779ac019-8b8c-48f7-9c5e-b3e2fe3004b01645166457327-Men-White-Casual-Shirt-5731645166456476-1.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "3",
        name: "Leather Backpack",
        description: "Stylish durable daily backpack.",
        price: 3199,
        oldPrice: 4199,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3,
        category: "Accessories",
        stock: 60,
        numOfReviews: 2,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26099988/2023/12/8/691ea757-17b2-44ea-8980-6035e15c71e51702033518117-Mast--Harbour-Men-Shirts-3541702033517747-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "4",
        name: "Running Sneakers",
        description: "Lightweight sneakers for speed.",
        price: 2799,
        oldPrice: 3599,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Shoes",
        stock: 120,
        numOfReviews: 4,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25815666/2023/11/9/4271a29c-059d-4828-8a25-b488676db49d1699534368513PUMALeatherEmbossedWallet1.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "5",
        name: "Smart Watch Pro",
        description: "Fitness health tracking smartwatch.",
        price: 5599,
        oldPrice: 6999,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3.7,
        category: "Gadgets",
        stock: 70,
        numOfReviews: 6,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/23/ygciPiUh_08f16466b47642488ec9e1066fd254d0.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
        ]
    },
    {
        _id: "6",
        name: "Casual Cotton Shirt",
        description: "Classic lightweight cotton shirt.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4.5,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JULY/5/IO01ES6e_6ba1b026cf554d1193a4cbd49c341f07.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "7",
        name: "Wireless Headphones",
        description: "Premium sound comfort fit.",
        price: 2499,
        oldPrice: 3299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3.2,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/4/1VYD9esq_6137ccdf02f34493a0fe01a5a045e071.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
];

console.log(products);

const Header = () => {
    return (
        <>
            {/* header */}
            <div className="header">

                {/* container wrapper */}
                <div className="container header_cont">

                    {/* logo */}
                    <div className="logo">
                        <img src="/logo-light.png" alt="logoimage" />
                    </div>

                    {/* nav and search container */}
                    <div className="Nav_search_cont">

                        {/* navigation bar */}
                        <Navbar />

                        {/* search bar */}
                        <Searchbar />

                    </div>

                    {/* user actions */}
                    <div className="user-actions">

                        {/* wishlist */}
                        <div className="action-icon wishlist">

                            {/* count */}
                            <span className='count'>6</span>

                            <div className="icon_container">
                                <GoHeart className='icon_outline' />
                                <GoHeartFill className='iocn_filled' />
                            </div>

                            {/* wishlist submenu */}
                            <div className="wish_submenu">

                                {/* product container */}
                                <div className="product_container">

                                    {products.map((product, index) => {

                                        const fullStars = Math.floor(product.rating);
                                        const halfStar = product.rating - fullStars;
                                        const emptyStars = 5 - (fullStars + (halfStar > 0 ? 1 : 0));

                                        return (
                                            <div className="products_detail" key={index}>

                                                <div className="img_cont">
                                                    <img src={product.images[0].url} alt="" />
                                                </div>

                                                <div className="product_info">
                                                    <span className='name'>{product.name}</span>
                                                    <span className='price'>₹ {product.price}</span>
                                                    <span className="rating">

                                                        {Array(fullStars).fill().map((_, i) => <FaStar key={i} />)}
                                                        {
                                                            halfStar === 0 ? null                              // bilkul decimal nahi hai
                                                                :
                                                                halfStar < 0.5 ? <FaRegStar key="half-empty" />  // 0 < decimal < 0.5
                                                                    :
                                                                    <FaStarHalfAlt key="half" />    // decimal >= 0.5
                                                        }
                                                        {Array(emptyStars).fill().map((_, i) => <FaRegStar key={i} />)}

                                                    </span>
                                                </div>

                                            </div>
                                        )

                                    })}

                                </div>

                                {/* horizontal rule */}
                                <div className="hr_rule"></div>

                                {/* buttons */}
                                <button className='wish_button'>view wishlist</button>

                            </div>

                        </div>

                        {/* cart */}
                        <div className="action-icon cart">

                            {/* count */}
                            <span className='count'>2</span>

                            <div className="icon_container">
                                <IoBagHandleOutline className='icon_outline' />
                                <IoBagHandleSharp className='iocn_filled' />
                            </div>

                            {/* wishlist submenu */}
                            <div className="wish_submenu">

                                {/* product container */}
                                <div className="product_container">

                                    {products.map((product, index) => (

                                        <div className="products_detail" key={index}>

                                            <div className="img_cont">
                                                <img src={product.images[0].url} alt="" />
                                            </div>

                                            <div className="product_info">
                                                <span className='name'>{product.name}</span>
                                                <span className='price'>₹ {product.price}</span>
                                                <span className="rating">
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStarHalf />
                                                </span>
                                            </div>

                                        </div>

                                    ))}

                                </div>

                                {/* horizontal rule */}
                                <div className="hr_rule"></div>

                                {/* buttons */}
                                <button className='wish_button'>view cart</button>
                                <button className='wish_button'>CHECKOUT</button>

                            </div>

                        </div>

                        {/* user profile */}
                        <div className="action-icon user">

                            <div className="icon_container">
                                <RiUser6Line className='icon_outline' />
                                <RiUser6Fill className='iocn_filled' />
                            </div>

                            {/* user sub menu */}
                            <div className="user_submenu">
                                <p className="profile"> View Profile</p>
                                <p className="auth">login/signup</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div >
        </>
    )
};

export default Header