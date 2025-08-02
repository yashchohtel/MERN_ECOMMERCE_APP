import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/slider'
import BrandShop from '../components/BrandShop/BrandShop'

const Home = () => {
    return (
        <>
            {/* header component */}
            <Header />

            {/* slider component */}
            <Slider />

            {/* brands category */}
            <BrandShop/>

        </>
    )
}

export default Home