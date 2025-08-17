import React from 'react'
import Header from '../components/Header/Header.jsx'
import Slider from '../components/Slider/Slider.jsx'
import BrandShop from '../components/BrandShop/BrandShop'
import FeaturedProducts from '../components/FeauredProducts/FeaturedProducts.jsx'
import PromotionBanner from '../components/PromotionBanner/PromotionBanner.jsx'
import LatestDrop from '../components/LatestDrop/LatestDrop.jsx'
import DealOfTheDay from '../components/DealOfTheDay/DealOfTheDay.jsx'
import ShopTheHighlights from '../components/ShopTheHighlights/ShopTheHighlights.jsx'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx'


const products = [
    {
        _id: "1",
        name: "Casual Cotton Shirt",
        description: "Soft, breathable cotton shirt – perfect for everyday wear with ultimate comfort.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "2",
        name: "Wireless Headphones",
        description: "Experience crystal clear sound and deep bass with noise cancellation.",
        price: 2499,
        oldPrice: 3499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "3",
        name: "Leather Backpack",
        description: "Stylish and durable backpack with multiple compartments for daily essentials.",
        price: 3199,
        oldPrice: 4199,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3,
        category: "Accessories",
        stock: 60,
        numOfReviews: 2,
        images: [
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "4",
        name: "Running Sneakers",
        description: "Lightweight sneakers built for speed, grip, and long-lasting comfort.",
        price: 2799,
        oldPrice: 3599,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Shoes",
        stock: 120,
        numOfReviews: 4,
        images: [
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "5",
        name: "Smart Watch Pro",
        description: "Track fitness, monitor health, and stay connected with style.",
        price: 5599,
        oldPrice: 6999,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Gadgets",
        stock: 70,
        numOfReviews: 6,
        images: [
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
        ]
    },
    {
        _id: "6",
        name: "Casual Cotton Shirt",
        description: "Classic design cotton shirt – lightweight and easy to style.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "7",
        name: "Wireless Headphones",
        description: "Premium sound with 20-hour battery life and ergonomic comfort fit.",
        price: 2499,
        oldPrice: 3299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "8",
        name: "Leather Backpack",
        description: "Durable leather finish, perfect for travel, office, or casual outings.",
        price: 3199,
        oldPrice: 4299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3,
        category: "Accessories",
        stock: 60,
        numOfReviews: 2,
        images: [
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "9",
        name: "Running Sneakers",
        description: "Engineered with breathable mesh and cushioned sole for runners.",
        price: 2799,
        oldPrice: 3599,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Shoes",
        stock: 120,
        numOfReviews: 4,
        images: [
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "10",
        name: "Smart Watch Pro",
        description: "Advanced smartwatch with AMOLED display, GPS & heart monitoring.",
        price: 5599,
        oldPrice: 6999,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Gadgets",
        stock: 70,
        numOfReviews: 6,
        images: [
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
        ]
    },
];

const Home = () => {
    return (
        <>
            {/* header component */}
            <Header />

            {/* slider component */}
            <Slider />

            {/* featured products */}
            <FeaturedProducts />

            {/* PromotioalBanner */}
            <PromotionBanner />

            {/* Deal of the Day section */}
            <DealOfTheDay />

            {/* brands category */}
            <BrandShop />

            {/* shop the hightliht section */}
            <ShopTheHighlights />

            {/* product display section */}
            <ProductDisplay heading={"latest fashion drop"} products={products} />

        </>
    )


}

export default Home;
