import React from 'react'
import './featuredProducts.css'

const DealOfTheDayCard = ({ product }) => {
    return (
        <>

            {/* deal of the day card */}
            <div className='DOTDCard'>
                
                <div className='DOTDCardImage'>
                    <img src={product.image} alt={product.title} />
                </div>

                <div className='DOTDCardContent'>
                    <h3 className='DOTDCardTitle'>{product.title}</h3>
                    <p className='DOTDCardDescription'>{product.description}</p>

                    <div className='DOTDCardRating'>
                        <span className='DOTDCardRatingStars'>{product.ratingStars}</span>
                        <span className='DOTDCardRatingCount'>({product.ratingCount} reviews)</span>
                    </div>

                    <div className='DOTDCardPrice'>
                        <span className='DOTDCardDiscountedPrice'>₹{product.discountedPrice}</span>
                        <span className='DOTDCardOriginalPrice'>₹{product.originalPrice}</span>
                    </div>

                    <button className='button DOTDCardButton'>Add to Cart</button>

                    <div className='sale_timeout'>
                        <span className='timeout_hour'>{product.timeout.hour}</span>:
                        <span className='timeout_minute'>{product.timeout.minute}</span>:
                        <span className='timeout_second'>{product.timeout.second}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealOfTheDayCard