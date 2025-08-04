import React from 'react'
import './FeaturedProducts.css'

const MiniProductCard = ({ product }) => {
    return (
        <>
            {/* mini product card */}
            <div className="fps_mini_product_card">

                <div className="img_cont">
                    <img src={product.image} alt={product.name || "Product"} />
                </div>

                <div className="product_info">
                    <p className="product_name">{product.name}</p>
                    <p className="category">{product.category}</p>
                    <p className="price">
                        <span className="new_price">₹{product.price}</span>
                        <span className="old_price">₹{product.oldPrice}</span>
                    </p>
                </div>

            </div>
        </>
    )
}

export default MiniProductCard