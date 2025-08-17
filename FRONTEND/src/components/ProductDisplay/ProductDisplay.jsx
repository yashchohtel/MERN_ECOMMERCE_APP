import React from 'react'
import './productDisplay.css';
import ProductCardMini from '../ProductCardMini/ProductCardMini';

const ProductDisplay = ({ heading, products }) => {

    return (
        <>

            {/* Product Display Section */}
            <section className="section product_display_section">

                {/* product display section */}
                <div className="container product_display_container">

                    {/* heading */}
                    <h2 className='heading'>{heading}</h2>

                    {/* product cards */}
                    <div className="product_display_grid">

                        {products && products.map((product) => (
                            <ProductCardMini product={product} />
                        ))}

                    </div>

                </div>

            </section>
        </>
    )
}

export default ProductDisplay