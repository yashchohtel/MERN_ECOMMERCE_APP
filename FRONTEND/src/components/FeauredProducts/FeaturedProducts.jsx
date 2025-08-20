import React from 'react'
import './FeaturedProducts.css'
import FeaturedProductSlide from './FeaturedProductSlide'

const FeaturedProducts = () => {

    return (
        <>
            {/* featured products section */}
            <section className="section featuredProductSection">

                {/* section heading */}
                <div className="heading_wrapper">
                    <h1 className="heading">Featured Products</h1>
                </div>

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

            </section>
        </>
    )
}

export default FeaturedProducts