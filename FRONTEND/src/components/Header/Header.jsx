import React from 'react'
import './header.css'
import Navbar from './Navbar'
import Searchbar from '../SearchBar/Searchbar'

import { IoBagHandleOutline, IoBagHandleSharp } from "react-icons/io5";
import { RiUser6Line, RiUser6Fill } from "react-icons/ri";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdLogin } from "react-icons/md";

const Header = () => {
    return (
        <>
            {/* header */}
            <div className="header">

                {/* container wrapper */}
                <div className="container">

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

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

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

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                    <div className="products_detail">

                                        <div className="img_cont">
                                            <img src="https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                                        </div>

                                        <div className="product_info">
                                            <span className='name'>mac book m3</span>
                                            <span className='price'>₹ 89000</span>
                                            <span className="rating">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalf />
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                {/* horizontal rule */}
                                <div className="hr_rule"></div>

                                {/* total cart price */}
                                <span className="totalPrice">
                                    <span>Total</span>
                                    <span>₹ 183000</span>
                                </span>

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
                                <p className="profile">
                                    <MdOutlineAccountCircle />
                                    <span>View Profile</span>
                                </p>
                                <p className="auth">
                                    <MdLogin />
                                    <span>login/signup</span>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div >
        </>
    )
};

export default Header