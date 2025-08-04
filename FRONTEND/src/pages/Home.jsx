import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/slider'
import BrandShop from '../components/BrandShop/BrandShop'
import FeaturedProducts from '../components/FeauredProducts/FeaturedProducts.jsx'

const Home = () => {
    return (
        <>
            {/* header component */}
            <Header />

            {/* slider component */}
            <Slider />

            {/* brands category */}
            <BrandShop />

            {/* featured products */}
            <FeaturedProducts />

        </>
    )
}

export default Home