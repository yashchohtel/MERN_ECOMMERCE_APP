import React from 'react'
import ProductCardMini from '../ProductCardMini/ProductCardMini'

const LatestDrop = () => {
    return (
        <>

            {/* Just Drop section */}
            < section className="section JustDropSection" >

                {/* container */}
                <div className="container justDropContainer">

                    {/* heading */}
                    <div className="heading_wrapper">
                        <h2 className='heading'>Latest Drops</h2>
                    </div>

                    {/* Just Drop Product Container */}
                    <div className="justDropProductContainer">

                        {/* Product Card Mini component */}
                        <ProductCardMini />

                    </div>

                </div>

            </section>

        </>
    )
}

export default LatestDrop

