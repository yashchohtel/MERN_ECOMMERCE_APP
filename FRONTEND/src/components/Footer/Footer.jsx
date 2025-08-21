import React from 'react'
import './footer.css'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className="footer_section">

                {/* logo image */}
                <div className="container">

                    <div className="footer_logo">
                        <img src="/logo-dark.png" alt="footer logo" />
                    </div>

                </div>

                {/* Discover More */}
                <div className="discover_more">

                    {/* discover more section */}
                    <div className="container discover_more_container">

                        <h2 className='dis_more_head'>Explore Categories</h2>

                        {/* Electronics */}
                        <div className="categories_items">
                            <h3 className='categories'>Electronics : </h3>
                            <span className='item'>Smartphones</span>
                            <span className='item'>Laptops</span>
                            <span className='item'>Tablets</span>
                            <span className='item'>Smartwatches</span>
                            <span className='item'>Headphones & Earbuds</span>
                            <span className='item'>Cameras</span>
                            <span className='item'>Gaming Consoles</span>
                            <span className='item'>Smart TVs</span>
                            <span className='item'>Power Banks</span>
                            <span className='item'>Bluetooth Speakers</span>
                        </div>

                        {/* Fashion */}
                        <div className="categories_items">
                            <h3 className='categories'>Fashion : </h3>
                            <span className='item'>T-Shirts</span>
                            <span className='item'>Shirts</span>
                            <span className='item'>Jeans</span>
                            <span className='item'>Dresses</span>
                            <span className='item'>Jackets</span>
                            <span className='item'>Sarees</span>
                            <span className='item'>Kurtas & Kurtis</span>
                            <span className='item'>Shoes & Sneakers</span>
                            <span className='item'>Handbags</span>
                            <span className='item'>Sunglasses</span>
                        </div>

                        {/* Home */}
                        <div className="categories_items">
                            <h3 className='categories'>Home : </h3>
                            <span className='item'>Furniture</span>
                            <span className='item'>Bedsheets & Blankets</span>
                            <span className='item'>Curtains</span>
                            <span className='item'>Appliances</span>
                            <span className='item'>Cookware & Utensils</span>
                            <span className='item'>Lighting & Lamps</span>
                            <span className='item'>Home Décor</span>
                            <span className='item'>Storage Solutions</span>
                            <span className='item'>Rugs & Carpets</span>
                            <span className='item'>Cleaning Essentials</span>
                        </div>

                        {/* Beauty */}
                        <div className="categories_items">
                            <h3 className='categories'>Beauty : </h3>
                            <span className='item'>Skincare</span>
                            <span className='item'>Haircare</span>
                            <span className='item'>Makeup</span>
                            <span className='item'>Fragrances</span>
                            <span className='item'>Lipsticks</span>
                            <span className='item'>Foundations & Primers</span>
                            <span className='item'>Face Wash & Cleansers</span>
                            <span className='item'>Sunscreens</span>
                            <span className='item'>Nail Care</span>
                            <span className='item'>Men’s Grooming</span>
                        </div>

                        {/* Fitness */}
                        <div className="categories_items">
                            <h3 className='categories'>Fitness : </h3>
                            <span className='item'>Yoga Mats</span>
                            <span className='item'>Dumbbells</span>
                            <span className='item'>Treadmills</span>
                            <span className='item'>Exercise Bikes</span>
                            <span className='item'>Resistance Bands</span>
                            <span className='item'>Protein Powders</span>
                            <span className='item'>Shakers & Bottles</span>
                            <span className='item'>Fitness Trackers</span>
                            <span className='item'>Gym Gloves</span>
                            <span className='item'>Running Shoes</span>
                        </div>

                    </div>

                </div>

                {/* footer bottom section */}
                <div className="footer_bottom">

                    {/* footer bottom container */}
                    <div className="container footer_bottom_container">

                        {/* category */}
                        <div className="footer-column">
                            <h3 className="footer-title">POPULAR CATEGORIES</h3>
                            <ul>
                                <li>Fashion</li>
                                <li>Electronic</li>
                                <li>Cosmetic</li>
                                <li>Health</li>
                                <li>Watches</li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div className="footer-column">
                            <h3 className="footer-title">PRODUCTS</h3>
                            <ul>
                                <li>Prices Drop</li>
                                <li>New Products</li>
                                <li>Best Sales</li>
                                <li>Contact Us</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>

                        {/* Our Company */}
                        <div className="footer-column">
                            <h3 className="footer-title">OUR COMPANY</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Legal Notice</li>
                                <li>Terms And Conditions</li>
                                <li>About Us</li>
                                <li>Secure Payment</li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-column">
                            <h3 className="footer-title">SERVICES</h3>
                            <ul>
                                <li>Prices Drop</li>
                                <li>New Products</li>
                                <li>Best Sales</li>
                                <li>Contact Us</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-column">
                            <h3 className="footer-title">CONTACT</h3>
                            <ul className="contact-info">
                                <li>
                                    <FaSearchLocation  className='footer_icon'/> MUMBAI INDIA
                                </li>
                                <li>
                                    <FaPhoneAlt className='footer_icon'/> (607) 936-8058
                                </li>
                                <li>
                                    <FaEnvelope className='footer_icon'/> Example@Gmail.Com
                                </li>
                            </ul>

                            {/* payment image */}
                            <div className="pay_img">
                                <img src="/payment.png" alt="payment png" />
                            </div>

                        </div>

                    </div>
                </div>

                <div className="copy_right">
                    <p className="copyright_desc">Copyright © VENDORA all rights reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer