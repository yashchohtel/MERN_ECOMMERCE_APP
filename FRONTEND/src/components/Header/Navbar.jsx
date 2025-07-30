import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <>

            {/* navigation bar */}
            <nav className='navbar'>

                {/* navigation links */}
                <ul className="navbar-links">

                    <li className='nav_link n_link_1'>

                        <span className='tag'>Electronics</span>

                        {/* submenu */}
                        <div className="submenu">

                            {/* category */}
                            <ul className='category'>

                                <li className='catgory_item'>
                                    <span className="category_head">Mobiles</span>
                                    <ul className="category_list">
                                        <li className='items'>Smartphones</li>
                                        <li className='items'>Feature Phones</li>
                                        <li className='items'>Tablets</li>
                                        <li className='items'>Mobile Accessories</li>
                                        <li className='items'>Power Banks</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Computers</span>
                                    <ul className="category_list">
                                        <li className='items'>Laptops</li>
                                        <li className='items'>Gaming Laptops</li>
                                        <li className='items'>Desktop PCs</li>
                                        <li className='items'>Monitors</li>
                                        <li className='items'>Laptop Accessories</li>
                                        <li className='items'>Keyboards & Mice</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Appliances</span>
                                    <ul className="category_list">
                                        <li className='items'>Smart TVs</li>
                                        <li className='items'>Refrigerators</li>
                                        <li className='items'>Washing Machines</li>
                                        <li className='items'>Air Conditioners</li>
                                        <li className='items'>Kitchen Appliances</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Audio</span>
                                    <ul className="category_list">
                                        <li className='items'>Headphones</li>
                                        <li className='items'>Earphones</li>
                                        <li className='items'>Bluetooth Speakers</li>
                                        <li className='items'>Home Theaters</li>
                                        <li className='items'>Soundbars</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Cameras</span>
                                    <ul className="category_list">
                                        <li className='items'>Mirrorless Cameras</li>
                                        <li className='items'>Action Cameras</li>
                                        <li className='items'>CCTV & Security Cameras</li>
                                        <li className='items'>Camera Accessories</li>

                                    </ul>
                                </li>

                            </ul>

                        </div>

                    </li>

                    <li className='nav_link n_link_2'>

                        <span className='tag'>Fashion</span>

                        {/* submenu - Fashion */}
                        <div className="submenu">

                            {/* category */}
                            <ul className='category'>

                                <li className='catgory_item'>
                                    <span className="category_head">Men's Clothing</span>
                                    <ul className="category_list">
                                        <li className='items'>T-Shirts</li>
                                        <li className='items'>Shirts</li>
                                        <li className='items'>Jeans</li>
                                        <li className='items'>Jackets</li>
                                        <li className='items'>Ethnic Wear</li>
                                        <li className='items'>Hoodies</li>
                                        <li className='items'>Blazers</li>
                                        <li className='items'>Track Pants</li>
                                        <li className='items'>Suits</li>
                                        <li className='items'>Innerwear</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Women's Clothing</span>
                                    <ul className="category_list">
                                        <li className='items'>Dresses</li>
                                        <li className='items'>Tops</li>
                                        <li className='items'>Sarees</li>
                                        <li className='items'>Kurtis</li>
                                        <li className='items'>Leggings & Palazzos</li>
                                        <li className='items'>Tunics</li>
                                        <li className='items'>Ethnic Sets</li>
                                        <li className='items'>Lingerie</li>
                                        <li className='items'>Nightwear</li>
                                        <li className='items'>Maternity Wear</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Footwear</span>
                                    <ul className="category_list">
                                        <li className='items'>Sneakers</li>
                                        <li className='items'>Casual Shoes</li>
                                        <li className='items'>Formal Shoes</li>
                                        <li className='items'>Heels</li>
                                        <li className='items'>Sandals</li>
                                        <li className='items'>Flip Flops</li>
                                        <li className='items'>Sports Shoes</li>
                                        <li className='items'>Loafers</li>
                                        <li className='items'>Slippers</li>
                                        <li className='items'>Boots</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Accessories</span>
                                    <ul className="category_list">
                                        <li className='items'>Watches</li>
                                        <li className='items'>Bags</li>
                                        <li className='items'>Belts</li>
                                        <li className='items'>Sunglasses</li>
                                        <li className='items'>Wallets</li>
                                        <li className='items'>Hats & Caps</li>
                                        <li className='items'>Scarves</li>
                                        <li className='items'>Jewellery</li>
                                        <li className='items'>Hair Accessories</li>
                                        <li className='items'>Ties</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Kids Fashion</span>
                                    <ul className="category_list">
                                        <li className='items'>T-Shirts</li>
                                        <li className='items'>Dresses</li>
                                        <li className='items'>Shorts</li>
                                        <li className='items'>School Bags</li>
                                        <li className='items'>Kids Footwear</li>
                                        <li className='items'>Ethnic Wear</li>
                                        <li className='items'>Toys & Games</li>
                                        <li className='items'>Winter Wear</li>
                                        <li className='items'>Sleepwear</li>
                                        <li className='items'>Caps & Gloves</li>
                                    </ul>
                                </li>

                            </ul>
                            
                        </div>


                    </li>

                    <li className='nav_link n_link_3'>

                        <span className='tag'>Home</span>

                        {/* submenu - Home */}
                        <div className="submenu">

                            {/* category */}
                            <ul className='category'>

                                <li className='catgory_item'>
                                    <span className="category_head">Furniture</span>
                                    <ul className="category_list">
                                        <li className='items'>Sofas & Couches</li>
                                        <li className='items'>Beds</li>
                                        <li className='items'>Dining Tables</li>
                                        <li className='items'>Wardrobes</li>
                                        <li className='items'>Study Tables</li>
                                        <li className='items'>TV Units</li>
                                        <li className='items'>Bookshelves</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Home Decor</span>
                                    <ul className="category_list">
                                        <li className='items'>Wall Art</li>
                                        <li className='items'>Showpieces</li>
                                        <li className='items'>Lamps & Lighting</li>
                                        <li className='items'>Clocks</li>
                                        <li className='items'>Candles & Holders</li>
                                        <li className='items'>Photo Frames</li>
                                        <li className='items'>Plants & Vases</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Kitchen & Dining</span>
                                    <ul className="category_list">
                                        <li className='items'>Cookware</li>
                                        <li className='items'>Kitchen Storage</li>
                                        <li className='items'>Dinner Sets</li>
                                        <li className='items'>Serving Tools</li>
                                        <li className='items'>Water Bottles</li>
                                        <li className='items'>Flasks & Jugs</li>
                                        <li className='items'>Bakeware</li>
                                        <li className='items'>Kitchen Tools</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Home Furnishing</span>
                                    <ul className="category_list">
                                        <li className='items'>Bedsheets</li>
                                        <li className='items'>Curtains</li>
                                        <li className='items'>Blankets & Comforters</li>
                                        <li className='items'>Cushions & Covers</li>
                                        <li className='items'>Carpets & Rugs</li>
                                        <li className='items'>Towels & Mats</li>
                                        <li className='items'>Pillow Covers</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Cleaning & Utility</span>
                                    <ul className="category_list">
                                        <li className='items'>Cleaning Tools</li>
                                        <li className='items'>Laundry Baskets</li>
                                        <li className='items'>Ironing Boards</li>
                                        <li className='items'>Dustbins</li>
                                        <li className='items'>Storage Boxes</li>
                                        <li className='items'>Mops & Buckets</li>
                                        <li className='items'>Shoe Racks</li>
                                    </ul>
                                </li>

                            </ul>

                        </div>

                    </li>

                    <li className='nav_link n_link_4'>

                        <span className='tag'>Beauty</span>

                        {/* submenu - Beauty */}
                        <div className="submenu">

                            {/* category */}
                            <ul className='category'>

                                <li className='catgory_item'>
                                    <span className="category_head">Makeup</span>
                                    <ul className="category_list">
                                        <li className='items'>Lipstick</li>
                                        <li className='items'>Foundation</li>
                                        <li className='items'>Mascara</li>
                                        <li className='items'>Blush</li>
                                        <li className='items'>Eyeliner</li>
                                        <li className='items'>Kajal</li>
                                        <li className='items'>Highlighters</li>
                                        <li className='items'>Concealers</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Skincare</span>
                                    <ul className="category_list">
                                        <li className='items'>Face Wash</li>
                                        <li className='items'>Moisturizers</li>
                                        <li className='items'>Sunscreen</li>
                                        <li className='items'>Face Masks</li>
                                        <li className='items'>Serums</li>
                                        <li className='items'>Lip Care</li>
                                        <li className='items'>Night Creams</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Hair Care</span>
                                    <ul className="category_list">
                                        <li className='items'>Shampoo</li>
                                        <li className='items'>Conditioner</li>
                                        <li className='items'>Hair Oil</li>
                                        <li className='items'>Hair Serum</li>
                                        <li className='items'>Hair Masks</li>
                                        <li className='items'>Hair Color</li>
                                        <li className='items'>Hair Styling</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Fragrances</span>
                                    <ul className="category_list">
                                        <li className='items'>Perfumes</li>
                                        <li className='items'>Body Sprays</li>
                                        <li className='items'>Deodorants</li>
                                        <li className='items'>Roll-ons</li>
                                        <li className='items'>Attars</li>
                                        <li className='items'>Room Fresheners</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Tools & Brushes</span>
                                    <ul className="category_list">
                                        <li className='items'>Makeup Brushes</li>
                                        <li className='items'>Sponges</li>
                                        <li className='items'>Hair Dryers</li>
                                        <li className='items'>Straighteners</li>
                                        <li className='items'>Curlers</li>
                                        <li className='items'>Trimmers</li>
                                        <li className='items'>Nail Clippers</li>
                                    </ul>
                                </li>

                            </ul>

                        </div>

                    </li>

                    <li className='nav_link n_link_5'>

                        <span className='tag'>Fitness</span>

                        {/* submenu - Fashion */}
                        <div className="submenu">

                            {/* category */}
                            <ul className='category'>

                                <li className='catgory_item'>
                                    <span className="category_head">Men's Clothing</span>
                                    <ul className="category_list">
                                        <li className='items'>T-Shirts</li>
                                        <li className='items'>Shirts</li>
                                        <li className='items'>Jeans</li>
                                        <li className='items'>Trousers</li>
                                        <li className='items'>Ethnic Wear</li>
                                        <li className='items'>Jackets</li>
                                        <li className='items'>Blazers</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Women's Clothing</span>
                                    <ul className="category_list">
                                        <li className='items'>Dresses</li>
                                        <li className='items'>Tops</li>
                                        <li className='items'>Kurtis</li>
                                        <li className='items'>Sarees</li>
                                        <li className='items'>Lehengas</li>
                                        <li className='items'>Tunics</li>
                                        <li className='items'>Jumpsuits</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Footwear</span>
                                    <ul className="category_list">
                                        <li className='items'>Casual Shoes</li>
                                        <li className='items'>Sports Shoes</li>
                                        <li className='items'>Sandals</li>
                                        <li className='items'>Heels</li>
                                        <li className='items'>Flats</li>
                                        <li className='items'>Boots</li>
                                        <li className='items'>Loafers</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Accessories</span>
                                    <ul className="category_list">
                                        <li className='items'>Watches</li>
                                        <li className='items'>Bags</li>
                                        <li className='items'>Wallets</li>
                                        <li className='items'>Sunglasses</li>
                                        <li className='items'>Belts</li>
                                        <li className='items'>Caps & Hats</li>
                                        <li className='items'>Jewellery</li>
                                    </ul>
                                </li>

                                <li className='catgory_item'>
                                    <span className="category_head">Kids Fashion</span>
                                    <ul className="category_list">
                                        <li className='items'>T-Shirts</li>
                                        <li className='items'>Shorts</li>
                                        <li className='items'>Dresses</li>
                                        <li className='items'>Ethnic Wear</li>
                                        <li className='items'>Footwear</li>
                                        <li className='items'>Winter Wear</li>
                                    </ul>
                                </li>

                            </ul>

                        </div>

                    </li>

                </ul>

            </nav>

        </>
    )
};

export default Navbar