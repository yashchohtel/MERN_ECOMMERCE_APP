import React from 'react'
import Header from '../components/Header/Header.jsx'
import BrandShop from '../components/BrandShop/BrandShop'
import FeaturedProducts from '../components/FeauredProducts/FeaturedProducts.jsx'
import PromotionBanner from '../components/PromotionBanner/PromotionBanner.jsx'
import DealOfTheDay from '../components/DealOfTheDay/DealOfTheDay.jsx'
import ShopTheHighlights from '../components/ShopTheHighlights/ShopTheHighlights.jsx'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx'
import BlogSection from '../components/BlogSection/BlogSection.jsx'
import Footer from '../components/Footer/Footer.jsx'
import HeroSlider from '../components/HeroSlider/HeroSlider.jsx'

const products = [
    {
        _id: "1",
        name: "Casual Cotton Shirt",
        description: "Soft breathable cotton shirt.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
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
        rating: 5,
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
        rating: 4,
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
        rating: 5,
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
    {
        _id: "8",
        name: "Leather Backpack",
        description: "Durable leather stylish backpack.",
        price: 3199,
        oldPrice: 4299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3,
        category: "Accessories",
        stock: 60,
        numOfReviews: 2,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19150592/2025/5/30/25d389fa-78c0-4047-8eb3-11f92623dd731748587561520-Puma-Men-Blue--Green-Cricket-Square-Shoes-1971748587560911-1.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "9",
        name: "Running Sneakers",
        description: "Breathable cushioned running shoes.",
        price: 2799,
        oldPrice: 3599,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Shoes",
        stock: 120,
        numOfReviews: 4,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21767244/2025/3/1/9e94103a-01f3-46de-b8ea-869667d8ab8c1740835649255-Puma-Smashic-Brand-Logo-Printed-Casual-Sneakers-Shoes-495174-1.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "10",
        name: "Smart Watch Pro",
        description: "AMOLED GPS heart monitoring.",
        price: 5599,
        oldPrice: 6999,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Gadgets",
        stock: 70,
        numOfReviews: 6,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/31/U0T56XVw_ed8f9bd2e59d4587b3b7dccb1a0563db.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
        ]
    },
    {
        _id: "11",
        name: "Casual Cotton Shirt",
        description: "Classic lightweight cotton shirt.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25786106/2023/12/8/8a8321c0-3140-4b10-8076-c425fe1ad9281702014752564-Puma-Printed-Slip-On-Flip-Flops-3101702014752320-11.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "12",
        name: "Wireless Headphones",
        description: "Premium sound comfort fit.",
        price: 2499,
        oldPrice: 3299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24055866/2023/7/26/312a30f2-7979-49d6-8634-92aed94aed2c1690348081258-Manchester-City-2324-Mens-Replica-Home-Jersey-67516903480808-1.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
];

const techProducts = [
    {
        _id: "1",
        name: "Casual Cotton Shirt",
        description: "Soft breathable cotton shirt.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32649583/2025/5/16/08836ef1-6f11-4415-9170-10a5f61df0ae1747376812893-Mens-Woven-Pants-5551747376812323-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
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
        description: "Stylish durable daily backpack.",
        price: 3199,
        oldPrice: 4199,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3,
        category: "Accessories",
        stock: 60,
        numOfReviews: 2,
        images: [
            { url: "https://m.media-amazon.com/images/I/71fHNU8KnQL._AC_UY327_FMwebp_QL65_.jpg " },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26099988/2023/12/8/691ea757-17b2-44ea-8980-6035e15c71e51702033518117-Mast--Harbour-Men-Shirts-3541702033517747-1.jpg" },
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
            { url: "https://m.media-amazon.com/images/I/718762usS2L._AC_UL480_FMwebp_QL65_.jpg " },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25815666/2023/11/9/4271a29c-059d-4828-8a25-b488676db49d1699534368513PUMALeatherEmbossedWallet1.jpg" },
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
        rating: 5,
        category: "Gadgets",
        stock: 70,
        numOfReviews: 6,
        images: [
            { url: "https://m.media-amazon.com/images/I/71bUXVCt5EL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/23/ygciPiUh_08f16466b47642488ec9e1066fd254d0.jpg" },
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
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://m.media-amazon.com/images/I/71xS69DTCbL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JULY/5/IO01ES6e_6ba1b026cf554d1193a4cbd49c341f07.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
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
        rating: 5,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/4/1VYD9esq_6137ccdf02f34493a0fe01a5a045e071.jpg" },
            { url: "https://m.media-amazon.com/images/I/513ugd16C6L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "8",
        name: "Leather Backpack",
        description: "Durable leather stylish backpack.",
        price: 3199,
        oldPrice: 4299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3,
        category: "Accessories",
        stock: 60,
        numOfReviews: 2,
        images: [
            { url: "https://m.media-amazon.com/images/I/71Cckqh1VnL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19150592/2025/5/30/25d389fa-78c0-4047-8eb3-11f92623dd731748587561520-Puma-Men-Blue--Green-Cricket-Square-Shoes-1971748587560911-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "9",
        name: "Running Sneakers",
        description: "Breathable cushioned running shoes.",
        price: 2799,
        oldPrice: 3599,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Shoes",
        stock: 120,
        numOfReviews: 4,
        images: [
            { url: "https://m.media-amazon.com/images/I/71B2ciyPrdL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21767244/2025/3/1/9e94103a-01f3-46de-b8ea-869667d8ab8c1740835649255-Puma-Smashic-Brand-Logo-Printed-Casual-Sneakers-Shoes-495174-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "10",
        name: "Smart Watch Pro",
        description: "AMOLED GPS heart monitoring.",
        price: 5599,
        oldPrice: 6999,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Gadgets",
        stock: 70,
        numOfReviews: 6,
        images: [
            { url: "https://m.media-amazon.com/images/I/61kMIKm23VL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/31/U0T56XVw_ed8f9bd2e59d4587b3b7dccb1a0563db.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
        ]
    },
    {
        _id: "11",
        name: "Casual Cotton Shirt",
        description: "Classic lightweight cotton shirt.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://m.media-amazon.com/images/I/51jFOZuPzYL._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25786106/2023/12/8/8a8321c0-3140-4b10-8076-c425fe1ad9281702014752564-Puma-Printed-Slip-On-Flip-Flops-3101702014752320-11.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "12",
        name: "Wireless Headphones",
        description: "Premium sound comfort fit.",
        price: 2499,
        oldPrice: 3299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://m.media-amazon.com/images/I/61w9SDINq6L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24055866/2023/7/26/312a30f2-7979-49d6-8634-92aed94aed2c1690348081258-Manchester-City-2324-Mens-Replica-Home-Jersey-67516903480808-1.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
];

const homeProducts = [
    {
        _id: "1",
        name: "Casual Cotton Shirt",
        description: "Soft breathable cotton shirt.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://m.media-amazon.com/images/I/61Qhf542pML._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/32649583/2025/5/16/08836ef1-6f11-4415-9170-10a5f61df0ae1747376812893-Mens-Woven-Pants-5551747376812323-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
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
            { url: "https://m.media-amazon.com/images/I/6175VaXsi9L._AC_UL480_FMwebp_QL65_.jpg" },
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
            { url: "https://m.media-amazon.com/images/I/71a0mwTxooL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/26099988/2023/12/8/691ea757-17b2-44ea-8980-6035e15c71e51702033518117-Mast--Harbour-Men-Shirts-3541702033517747-1.jpg" },
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
            { url: "https://m.media-amazon.com/images/I/71z86NnHJiL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25815666/2023/11/9/4271a29c-059d-4828-8a25-b488676db49d1699534368513PUMALeatherEmbossedWallet1.jpg" },
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
        rating: 5,
        category: "Gadgets",
        stock: 70,
        numOfReviews: 6,
        images: [
            { url: "https://m.media-amazon.com/images/I/61PfQJSNmaL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/23/ygciPiUh_08f16466b47642488ec9e1066fd254d0.jpg" },
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
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://m.media-amazon.com/images/I/71DHWihCWVL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JULY/5/IO01ES6e_6ba1b026cf554d1193a4cbd49c341f07.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
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
        rating: 5,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://m.media-amazon.com/images/I/61d9W1vJjmL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/4/1VYD9esq_6137ccdf02f34493a0fe01a5a045e071.jpg" },
            { url: "https://m.media-amazon.com/images/I/513ugd16C6L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "8",
        name: "Leather Backpack",
        description: "Durable leather stylish backpack.",
        price: 3199,
        oldPrice: 4299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 3,
        category: "Accessories",
        stock: 60,
        numOfReviews: 2,
        images: [
            { url: "https://m.media-amazon.com/images/I/61urSqqW8gL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19150592/2025/5/30/25d389fa-78c0-4047-8eb3-11f92623dd731748587561520-Puma-Men-Blue--Green-Cricket-Square-Shoes-1971748587560911-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "9",
        name: "Running Sneakers",
        description: "Breathable cushioned running shoes.",
        price: 2799,
        oldPrice: 3599,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Shoes",
        stock: 120,
        numOfReviews: 4,
        images: [
            { url: "https://m.media-amazon.com/images/I/71hpkS1d4vL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21767244/2025/3/1/9e94103a-01f3-46de-b8ea-869667d8ab8c1740835649255-Puma-Smashic-Brand-Logo-Printed-Casual-Sneakers-Shoes-495174-1.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "10",
        name: "Smart Watch Pro",
        description: "AMOLED GPS heart monitoring.",
        price: 5599,
        oldPrice: 6999,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Gadgets",
        stock: 70,
        numOfReviews: 6,
        images: [
            { url: "https://m.media-amazon.com/images/I/51sytbA6OXL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/MAY/31/U0T56XVw_ed8f9bd2e59d4587b3b7dccb1a0563db.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://m.media-amazon.com/images/I/51aFJQT-19L._SY625_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
        ]
    },
    {
        _id: "11",
        name: "Casual Cotton Shirt",
        description: "Classic lightweight cotton shirt.",
        price: 1999,
        oldPrice: 2499,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 4,
        category: "Clothes",
        stock: 100,
        numOfReviews: 3,
        images: [
            { url: "https://m.media-amazon.com/images/I/81dsWgzXLrL._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/25786106/2023/12/8/8a8321c0-3140-4b10-8076-c425fe1ad9281702014752564-Puma-Printed-Slip-On-Flip-Flops-3101702014752320-11.jpg" },
            { url: "https://www.apple.com/v/iphone/home/cd/images/overview/select/iphone_16__c5bvots96jee_large_2x.png" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
    {
        _id: "12",
        name: "Wireless Headphones",
        description: "Premium sound comfort fit.",
        price: 2499,
        oldPrice: 3299,
        creator: "686fd2129b088b4b1257a5e0",
        rating: 5,
        category: "Electronics",
        stock: 80,
        numOfReviews: 5,
        images: [
            { url: "https://m.media-amazon.com/images/I/71k1BT3w51L._AC_UL480_FMwebp_QL65_.jpg" },
            { url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24055866/2023/7/26/312a30f2-7979-49d6-8634-92aed94aed2c1690348081258-Manchester-City-2324-Mens-Replica-Home-Jersey-67516903480808-1.jpg" },
            { url: "https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" },
            { url: "https://mystoreweb.netlify.app/IMAGE/products/featured%20products/sports-2.jpg" },
            { url: "https://m.media-amazon.com/images/I/717Q2swzhBL._AC_UY327_FMwebp_QL65_.jpg" }
        ]
    },
];

const Home = () => {

    return (

        <>

            {/* slider component */}
            <HeroSlider />

            {/* featured products */}
            <FeaturedProducts />

            {/* PromotioalBanner */}
            <PromotionBanner />

            {/* Deal of the Day section */}
            <DealOfTheDay />

            {/* shop the hightliht section */}
            <ShopTheHighlights />

            {/* product display section (FASHION)*/}
            <ProductDisplay heading={"latest fashion drop"} products={products} />

            {/* product display section (ELECTRONIC)*/}
            <ProductDisplay heading={"Latest Tech Arrivals"} products={techProducts} />

            {/* product display section (HOME)*/}
            <ProductDisplay heading={"Curated for Your Home"} products={homeProducts} />

            {/* blog section */}
            <BlogSection />

            {/* brands category */}
            <BrandShop />

        </>
    )
};

export default Home;