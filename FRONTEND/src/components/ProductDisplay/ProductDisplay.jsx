import React from 'react'
import './productDisplay.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductDisplay = ({ heading, products }) => {

    return (
        <>

            {/* Product Display Section */}
            <section className="section product_display_section">

                {/* product display section */}
                <div className="container product_display_container">

                    {/* heading */}
                    <div className="heading_wrapper">
                        <h2 className='heading'>{heading}</h2>
                    </div>

                    {/* product cards */}
                    <div className="product_display_grid">

                        {products && products.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))}

                    </div>

                </div>

            </section>
        </>
    )
}

export default ProductDisplay