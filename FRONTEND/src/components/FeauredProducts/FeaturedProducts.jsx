import React from 'react'
import './FeaturedProducts.css'
import FeaturedProductSlide from './FeaturedProductSlide'
import DealOfTheDay from './DealOfTheDay'

const FeaturedProducts = () => {

    return (
        <>
            {/* featured products section */}
            <section className="section featuredProductSection">

                {/* section heading */}
                <h1 className="heading">Featured Products</h1>

                {/* feature product slide container */}
                <div className="container featured_product_slide_container">

                    {/* feature product slide */}
                    <FeaturedProductSlide title="New Arrivals" />

                    {/* feature product slide */}
                    <FeaturedProductSlide title="Trending" />

                    {/* feature product slide */}
                    <FeaturedProductSlide title="Top Rated" />

                    {/* feature product slide */}
                    <FeaturedProductSlide title="Recommended" />

                </div>

                {/* deal of the day section */}
                <DealOfTheDay />

            </section>
        </>
    )
}

export default FeaturedProducts