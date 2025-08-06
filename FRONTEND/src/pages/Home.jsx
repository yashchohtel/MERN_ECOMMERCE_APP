import React from 'react'
import Header from '../components/Header/Header.jsx'
import Slider from '../components/Slider/Slider.jsx'
import BrandShop from '../components/BrandShop/BrandShop'
import FeaturedProducts from '../components/FeauredProducts/FeaturedProducts.jsx'
import PromotionBanner from '../components/PromotionBanner/PromotionBanner.jsx'
import LatestDrop from '../components/LatestDrop/LatestDrop.jsx'
import DealOfTheDay from '../components/DealOfTheDay/DealOfTheDay.jsx'
import ShopTheHighlights from '../components/ShopTheHighlights/ShopTheHighlights.jsx'

const Home = () => {
    return (
        <>
            {/* header component */}
            <Header />

            {/* slider component */}
            <Slider />

            {/* brands category */}
            <BrandShop />

            {/* PromotioalBanner */}
            <PromotionBanner/>

            {/* featured products */}
            <FeaturedProducts />

            {/* Deal of the Day section */}
            <DealOfTheDay/>

            {/* shop the hightliht section */}
            <ShopTheHighlights/>

        </>
    )
}

export default Home